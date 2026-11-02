#!/usr/bin/env node
/**
 * MagicRule → GitHub 规则镜像同步脚本
 *
 * 上游：https://magicrule.pages.dev
 *   GET /data/meta/clients.json
 *   GET /data/index/<Client>.json
 *   GET <rule.manifest>                      → artifacts[]（含 dedupe.bytes_sha256）
 *   GET <artifact.url>                       → 规则文件本体
 *
 * 输出（相对于仓库根目录）：
 *   rules/<Client>/<RuleName>.<ext>
 *   index/<Client>.json
 *   index/summary.json
 *   state.json
 *
 * 特性：
 *   - 增量同步：按 rule_updated_at + 本地文件 sha256 判断，未变化的规则零下载
 *   - 内容去抖：仅文件头时间戳变化（semantic_sha256 相同）时不重写规则文件
 *   - 完整性：拒绝空文件、HTML 兜底页、无法解析的 JSON；记录 SHA256
 *   - 防误删：上游规则数骤降超过阈值时中止
 *   - 事务：任一客户端致命失败时，不写 state/index、不删任何规则文件
 *
 * 用法：
 *   node scripts/sync.mjs [--config config.json] [--out .] [--client Surge,Mihomo]
 *                         [--limit N] [--full] [--prune] [--allow-shrink] [--dry-run]
 */

import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = fileURLToPath(new URL('..', import.meta.url));
const STATE_VERSION = 1;
const USER_AGENT = 'magicrule-mirror/1.0 (GitHub Actions rule mirror)';
const DEFAULT_MAX_FILE_BYTES = 64 * 1024 * 1024;

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const opts = {
    config: path.join(REPO_ROOT, 'config.json'),
    out: REPO_ROOT,
    clients: null,
    limit: 0,
    full: false,
    prune: false,
    dryRun: false,
    allowShrink: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const [flag, inline] = arg.includes('=') ? [arg.slice(0, arg.indexOf('=')), arg.slice(arg.indexOf('=') + 1)] : [arg, null];
    const next = () => (inline !== null ? inline : argv[++i]);
    switch (flag) {
      case '--config':
        opts.config = path.resolve(next());
        break;
      case '--out':
        opts.out = path.resolve(next());
        break;
      case '--client':
        opts.clients = next().split(',').map((s) => s.trim()).filter(Boolean);
        break;
      case '--limit':
        opts.limit = Number(next()) || 0;
        break;
      case '--full':
        opts.full = true;
        break;
      case '--prune':
        opts.prune = true;
        break;
      case '--dry-run':
        opts.dryRun = true;
        break;
      case '--allow-shrink':
        opts.allowShrink = true;
        break;
      case '-h':
      case '--help':
        console.log(`用法: node scripts/sync.mjs [选项]

  --config <path>   配置文件（默认仓库根目录 config.json）
  --out <dir>       输出目录（默认仓库根目录）
  --client <a,b>    只同步指定客户端（逗号分隔）
  --limit <N>       每个客户端最多处理 N 条规则（用于测试）
  --full            忽略增量缓存，逐条校验全部规则
  --prune           删除配置中已移除客户端的规则目录
  --allow-shrink    允许上游规则数大幅下降（默认视为异常并中止）
  --dry-run         只打印计划，不写文件`);
        process.exit(0);
        break;
      default:
        throw new Error(`未知参数: ${arg}`);
    }
  }
  return opts;
}

// ---------------------------------------------------------------------------
// 工具
// ---------------------------------------------------------------------------

const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');
const sha256File = async (file) => sha256(await fs.readFile(file));
const toNative = (dir, rel) => path.join(dir, ...rel.split('/'));

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function readJson(file, fallback = null) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') return fallback;
    throw new Error(`读取 JSON 失败: ${file}: ${err.message}`);
  }
}

// 先写临时文件再 rename；rename 在 POSIX/Windows 上都会覆盖已存在文件，
// 失败时再退回「删除重建」，避免出现文件长时间缺失的窗口。
async function writeFileAtomic(file, buf) {
  await ensureDir(path.dirname(file));
  const tmp = `${file}.${process.pid}.tmp`;
  await fs.writeFile(tmp, buf);
  try {
    await fs.rename(tmp, file);
  } catch {
    await fs.rm(file, { force: true });
    await fs.rename(tmp, file);
  }
}

async function writeJson(file, value) {
  const text = `${JSON.stringify(value, null, 2)}\n`;
  await writeFileAtomic(file, Buffer.from(text, 'utf8'));
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function formatBytes(n) {
  return `${(n / 1048576).toFixed(1)} MB`;
}

async function fetchWithRetry(url, { as = 'buffer', tries = 4, maxBytes = 0 } = {}) {
  let lastError;
  for (let attempt = 1; attempt <= tries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': USER_AGENT,
          Accept: as === 'json' ? 'application/json' : '*/*',
          'Cache-Control': 'no-cache',
        },
        signal: AbortSignal.timeout(60_000),
      });
      if (!res.ok) {
        const err = new Error(`HTTP ${res.status} ${res.statusText} - ${url}`);
        err.status = res.status;
        throw err;
      }
      const declared = Number(res.headers.get('content-length') || 0);
      if (maxBytes > 0 && declared > maxBytes) {
        throw new Error(`产物过大（${formatBytes(declared)}，上限 ${formatBytes(maxBytes)}）: ${url}`);
      }
      if (as === 'json') return await res.json();
      const buf = Buffer.from(await res.arrayBuffer());
      if (maxBytes > 0 && buf.length > maxBytes) {
        throw new Error(`产物过大（${formatBytes(buf.length)}，上限 ${formatBytes(maxBytes)}）: ${url}`);
      }
      return buf;
    } catch (err) {
      lastError = err;
      const retriable = !err.status || err.status === 408 || err.status === 429 || err.status >= 500;
      if (!retriable || attempt === tries) break;
      await sleep(500 * 2 ** (attempt - 1) + Math.random() * 250);
    }
  }
  throw lastError;
}

async function pool(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const index = cursor++;
      if (index >= items.length) return;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(runners);
  return results;
}

function normalizeExt(ext) {
  const clean = String(ext || '').trim().replace(/^\.+/, '');
  return clean ? `.${clean}` : '';
}

const UNSAFE_FILENAME = /[\\/:*?"<>|\u0000-\u001f]/g;

function safeFileName(name) {
  const cleaned = String(name || '')
    .replace(UNSAFE_FILENAME, '_')
    .replace(/\s+/g, ' ')
    .replace(/^[.\s]+|[.\s]+$/g, '')
    .slice(0, 120);
  return cleaned || 'rule';
}

// 同一客户端内文件名去重（上游偶尔存在重名规则；正文重名会直接报错）
function buildNameMap(rules) {
  const map = new Map();
  const used = new Map();
  for (const rule of rules) {
    const base = safeFileName(rule.name);
    const seen = used.get(base.toLowerCase()) || 0;
    used.set(base.toLowerCase(), seen + 1);
    map.set(rule, seen === 0 ? base : `${base}-${seen + 1}`);
  }
  return map;
}

// ---------------------------------------------------------------------------
// 上游接口
// ---------------------------------------------------------------------------

const bust = () => `_ts=${Date.now()}`;

function joinUrl(base, rel) {
  return `${base.replace(/\/+$/, '')}/${String(rel).replace(/^\/+/, '')}`;
}

function withCacheBust(url) {
  return url.includes('?') ? `${url}&${bust()}` : `${url}?${bust()}`;
}

async function loadClientsMeta(upstream) {
  const url = withCacheBust(joinUrl(upstream, 'data/meta/clients.json'));
  const meta = await fetchWithRetry(url, { as: 'json' });
  if (!Array.isArray(meta.clients)) throw new Error('上游 clients.json 格式异常');
  return new Map(meta.clients.map((c) => [c.name, c]));
}

async function loadClientIndex(upstream, client) {
  const url = withCacheBust(joinUrl(upstream, `data/index/${encodeURIComponent(client)}.json`));
  const index = await fetchWithRetry(url, { as: 'json' });
  if (!Array.isArray(index.rules)) throw new Error(`上游 ${client} 索引格式异常`);
  return index;
}

// 从 manifest 里挑选要镜像的产物（优先文本格式，跳过 .mrs/.srs 等二进制）
const BINARY_EXTS = new Set(['mrs', 'srs', 'bin', 'dat', 'gz', 'zip', '7z']);

function isTextArtifact(artifact) {
  const ext = String(artifact.ext || '').toLowerCase().replace(/^\.+/, '');
  return !BINARY_EXTS.has(ext);
}

function pickArtifact(manifest, preferredKeys) {
  const artifacts = (manifest.artifacts || []).filter((a) => a && a.url);
  if (artifacts.length === 0) throw new Error(`manifest 无可用产物: ${manifest.client}/${manifest.rule}`);
  const usable = artifacts.filter(isTextArtifact);
  const candidates = usable.length > 0 ? usable : artifacts;

  const keys = (Array.isArray(preferredKeys) ? preferredKeys : [preferredKeys]).filter(Boolean);
  for (const key of keys) {
    const hit = candidates.find((a) => a.key === key);
    if (hit) return hit;
  }
  for (const key of ['rules', 'classical', 'source']) {
    const hit = candidates.find((a) => a.key === key);
    if (hit) return hit;
  }
  const recommended = candidates.find((a) => a.recommended && !a.empty);
  if (recommended) return recommended;
  return candidates.find((a) => !a.empty) || candidates[0];
}

// ---------------------------------------------------------------------------
// 规则目录 README（rules/<客户端>/README.md）
// ---------------------------------------------------------------------------

const COMMON_RULES = [
  'Advertising',
  'AdvertisingLite',
  'Privacy',
  'Direct',
  'China',
  'Global',
  'Lan',
  'YouTube',
  'Netflix',
  'Telegram',
  'OpenAI',
  'Spotify',
  'Steam',
];

const REPOSITORY_PATTERN = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;

function resolveRepository(config) {
  const fromEnv = String(process.env.GITHUB_REPOSITORY || '').trim();
  if (REPOSITORY_PATTERN.test(fromEnv)) return fromEnv;
  const fromConfig = String(config.repository || '').trim();
  if (REPOSITORY_PATTERN.test(fromConfig)) return fromConfig;
  return null;
}

const escapeCell = (value) => String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ').trim();

function policyFor(name) {
  if (/^Advertising|Privacy/i.test(name)) return 'REJECT';
  if (/^(Direct|China|Global|Lan)$/i.test(name)) return 'DIRECT';
  return 'PROXY';
}

const providerKey = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

function buildCommonBlock(client, rawBase, ext, names) {
  const picked = names.map((name) => ({ name, policy: policyFor(name) }));
  switch (client) {
    case 'Surge':
    case 'Loon':
    case 'Shadowrocket':
      return ['[Rule]', ...picked.map(({ name, policy }) => `RULE-SET,${rawBase}/${name}${ext},${policy}`)].join('\n');
    case 'Mihomo':
    case 'Stash': {
      const providers = picked
        .map(
          ({ name }) => `  ${providerKey(name)}:
    type: http
    behavior: classical
    url: "${rawBase}/${name}${ext}"
    path: ./ruleset/${providerKey(name)}${ext}
    interval: 86400`,
        )
        .join('\n');
      const rules = picked.map(({ name, policy }) => `  - RULE-SET,${providerKey(name)},${policy}`).join('\n');
      return `rule-providers:\n${providers}\n\nrules:\n${rules}`;
    }
    case 'QuantumultX':
      return [
        '[filter_remote]',
        ...picked.map(
          ({ name, policy }) =>
            `${rawBase}/${name}${ext}, tag=${name}, force-policy=${policy.toLowerCase()}, update-interval=86400`,
        ),
      ].join('\n');
    case 'SingBox': {
      const items = picked.map(
        ({ name }) =>
          `  {\n    "type": "remote",\n    "tag": "${providerKey(name)}",\n    "format": "source",\n    "url": "${rawBase}/${name}${ext}",\n    "download_detour": "direct"\n  }`,
      );
      return `{\n  "rule_set": [\n${items.join(',\n')}\n  ]\n}`;
    }
    case 'Egern': {
      const policyName = (policy) => (policy === 'REJECT' ? 'Reject' : policy === 'DIRECT' ? 'Direct' : 'Proxy');
      const items = picked.map(
        ({ name, policy }) =>
          `  - rule_set: "${rawBase}/${name}${ext}"\n    policy: ${policyName(policy)}\n    update_interval: 86400`,
      );
      return `rules:\n${items.join('\n')}`;
    }
    default:
      return picked.map(({ name, policy }) => `RULE-SET,${rawBase}/${name}${ext},${policy}`).join('\n');
  }
}

function buildClientCatalog(plan, repository) {
  const { client, snapshot } = plan;
  const rawBase = `https://raw.githubusercontent.com/${repository}/main/rules/${client}`;
  const jsdBase = `https://cdn.jsdelivr.net/gh/${repository}@main/rules/${client}`;
  const byName = new Map(snapshot.rules.map((rule) => [rule.name, rule]));
  const extOf = (rule) => rule.file.slice(rule.file.lastIndexOf('.'));
  const commonNames = COMMON_RULES.filter((name) => byName.has(name));
  const commonExt = commonNames.length > 0 ? extOf(byName.get(commonNames[0])) : '';

  const rows = snapshot.rules
    .slice()
    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    .map((rule) => {
      const date = (rule.rule_updated_at || '').slice(0, 10);
      const fileName = encodeURIComponent(rule.file.slice(rule.file.lastIndexOf('/') + 1));
      return `| ${escapeCell(rule.name)} | ${escapeCell(rule.chinese_name)} | ${rule.total_line_count || 0} | ${date} | [raw](${rawBase}/${fileName}) |`;
    })
    .join('\n');

  return [
    `# ${client} 规则目录`,
    '',
    `> 上游：[MagicRule](https://magicrule.pages.dev) · 本目录每天自动同步 · 本页由 [scripts/sync.mjs](../../scripts/sync.mjs) 生成，请勿手动编辑。`,
    '',
    `- 原始地址前缀：\`${rawBase}/\``,
    `- 国内镜像（jsDelivr）：\`${jsdBase}/\``,
    `- 规则数：**${snapshot.rule_count}** · 总行数：**${snapshot.total_line_count}**`,
    '',
    `## 常用规则（可直接复制）`,
    '',
    '> 下面的示例可直接粘贴到客户端配置里；策略名（`REJECT`/`Reject`、`DIRECT`/`Direct`、`PROXY`/`Proxy`）按客户端写法替换成你自己的策略组。',
    '',
    '```' + (client === 'SingBox' ? 'json' : ['Mihomo', 'Stash', 'Egern'].includes(client) ? 'yaml' : 'ini'),
    buildCommonBlock(client, rawBase, commonExt, commonNames),
    '```',
    '',
    `## 全部规则（${snapshot.rule_count}）`,
    '',
    '<details>',
    `<summary>展开全部 ${snapshot.rule_count} 条</summary>`,
    '',
    '| 规则 | 说明 | 条数 | 更新时间 | 原始链接 |',
    '| --- | --- | ---: | --- | --- |',
    rows,
    '',
    '</details>',
    '',
  ].join('\n');
}

// ---------------------------------------------------------------------------
// 单条规则同步
// ---------------------------------------------------------------------------

const isHtmlDocument = (buf) => {
  const head = buf.subarray(0, 256).toString('utf8').trimStart().toLowerCase();
  return head.startsWith('<!doctype html') || head.startsWith('<html');
};

async function syncRule({ opts, rule, client, artifactKey, targetName, prevEntry, stats, maxFileBytes }) {
  const localIsValid = async (entry) => {
    if (!entry || !entry.file) return false;
    const abs = toNative(opts.out, entry.file);
    const st = await fs.stat(abs).catch(() => null);
    if (!st || !st.isFile()) return false;
    if (typeof entry.bytes === 'number' && st.size !== entry.bytes) return false;
    return (await sha256File(abs)) === entry.sha256;
  };

  // 快速路径：上游更新时间没变 + 本地文件完好 → 不下载
  if (!opts.full && prevEntry && prevEntry.rule_updated_at === rule.rule_updated_at) {
    if (await localIsValid(prevEntry)) {
      return { status: 'unchanged', entry: prevEntry };
    }
  }

  const manifestUrl = withCacheBust(rule.manifest);
  const manifest = await fetchWithRetry(manifestUrl, { as: 'json' });
  const artifact = pickArtifact(manifest, artifactKey);
  const buf = await fetchWithRetry(artifact.url, { maxBytes: maxFileBytes });
  if (buf.length === 0) throw new Error(`产物为空: ${artifact.url}`);
  if (isHtmlDocument(buf)) {
    throw new Error(`产物返回了 HTML（上游 SPA fallback，链接可能失效）: ${artifact.url}`);
  }

  const ext = normalizeExt(artifact.ext) || normalizeExt(rule.file_extension);
  if (ext === '.json') {
    try {
      JSON.parse(buf.toString('utf8'));
    } catch (err) {
      throw new Error(`JSON 产物解析失败: ${artifact.url}: ${err.message}`);
    }
  }
  const relFile = `rules/${client}/${targetName}${ext}`;
  const absFile = toNative(opts.out, relFile);
  const newSha = sha256(buf);
  const expected = artifact.dedupe && artifact.dedupe.bytes_sha256;
  const semantic = artifact.dedupe && artifact.dedupe.semantic_sha256 ? artifact.dedupe.semantic_sha256 : null;

  // manifest 与 CDN 产物不一致时（上游每次构建都会刷新文件头，实测约 3% 不同步），
  // manifest 里的 semantic_sha256 也不可信：此时以实际下载内容为准，不据此跳过写盘。
  const manifestInSync = !expected || expected === newSha;
  if (!manifestInSync) {
    stats.checksumMismatch = (stats.checksumMismatch || 0) + 1;
    if (!Array.isArray(stats.checksumSamples)) stats.checksumSamples = [];
    if (stats.checksumSamples.length < 3) stats.checksumSamples.push(artifact.url);
    if (stats.checksumMismatch <= 10) {
      console.warn(`\n[警告] manifest 校验和与产物不一致（以产物为准）: ${artifact.url}`);
    }
  }

  // 内容完全一致（重复下载/短时间内重建）→ 只更新元数据
  if (prevEntry && newSha === prevEntry.sha256 && prevEntry.file === relFile) {
    return {
      status: 'unchanged',
      entry: { ...prevEntry, rule_updated_at: rule.rule_updated_at, bytes: buf.length, semantic_sha256: semantic || prevEntry.semantic_sha256 || null },
    };
  }

  // 仅在 manifest 可信时用 semantic 去抖（避免头部时间戳变化造成无意义提交）
  if (manifestInSync && prevEntry && semantic && prevEntry.semantic_sha256 === semantic && (await localIsValid(prevEntry))) {
    return {
      status: 'unchanged',
      entry: { ...prevEntry, rule_updated_at: rule.rule_updated_at, semantic_sha256: semantic },
    };
  }

  const changed = !prevEntry || prevEntry.sha256 !== newSha || prevEntry.file !== relFile;
  const entry = {
    file: relFile,
    rule_updated_at: rule.rule_updated_at,
    bytes: buf.length,
    sha256: newSha,
    semantic_sha256: semantic,
  };

  if (!opts.dryRun) {
    await writeFileAtomic(absFile, buf);
    if (prevEntry && prevEntry.file && prevEntry.file !== relFile) {
      await fs.rm(toNative(opts.out, prevEntry.file), { force: true });
    }
  }

  return { status: changed ? (prevEntry ? 'updated' : 'added') : 'unchanged', entry };
}

// ---------------------------------------------------------------------------
// 客户端同步（只计算，不落盘 state/index；删除动作也延后到全局成功后再执行）
// ---------------------------------------------------------------------------

async function syncClient({ opts, config, client, meta, state, stats }) {
  const clientState = state.clients[client] || { rules: {} };
  const previousRules = clientState.rules || {};

  console.log(`\n[${client}] 拉取索引…`);
  const index = await loadClientIndex(config.upstream, client);
  const rules = index.rules;
  console.log(`[${client}] 上游规则数: ${rules.length}`);

  // 上游重名规则会让 state 以 name 为键时塌缩，直接报错，避免静默数据损坏
  const seenNames = new Set();
  const dupNames = [];
  for (const rule of rules) {
    if (seenNames.has(rule.name)) dupNames.push(rule.name);
    seenNames.add(rule.name);
  }
  if (dupNames.length > 0) {
    throw new Error(`[${client}] 上游存在重名规则，暂不支持自动镜像: ${dupNames.slice(0, 10).join(', ')}`);
  }

  // 防误删保护
  const previousCount = clientState.rule_count ?? Object.keys(previousRules).length;
  if (!opts.allowShrink && previousCount > 0 && rules.length < previousCount * (1 - config.maxShrinkRatio)) {
    throw new Error(
      `[${client}] 上游规则数从 ${previousCount} 骤降到 ${rules.length}（超过 ${(config.maxShrinkRatio * 100).toFixed(0)}%），` +
        `视为上游异常，已中止。确认无误可加 --allow-shrink 执行。`,
    );
  }

  const nameMap = buildNameMap(rules);
  const selected = opts.limit > 0 ? rules.slice(0, opts.limit) : rules;
  const fileExt = meta.rule_file_extension || '';
  const prepared = selected.map((rule) => ({ rule, targetName: nameMap.get(rule) }));

  let done = 0;
  const failures = [];
  const results = await pool(prepared, config.concurrency, async (item) => {
    const rule = item.rule;
    const prevEntry = previousRules[rule.name] || null;
    try {
      const effectiveRule = { ...rule, file_extension: fileExt };
      const outcome = await syncRule({
        opts,
        rule: effectiveRule,
        client,
        artifactKey: config.artifactKeys ? config.artifactKeys[client] : null,
        targetName: item.targetName,
        prevEntry,
        stats,
        maxFileBytes: config.maxFileBytes || DEFAULT_MAX_FILE_BYTES,
      });
      stats[outcome.status] = (stats[outcome.status] || 0) + 1;
      return { name: rule.name, ...outcome };
    } catch (err) {
      failures.push({ name: rule.name, error: err.message });
      stats.failed = (stats.failed || 0) + 1;
      return { name: rule.name, status: 'failed', entry: prevEntry };
    } finally {
      done++;
      if (done % 100 === 0 || done === prepared.length) {
        process.stdout.write(`\r[${client}] ${done}/${prepared.length}`);
      }
    }
  });
  process.stdout.write('\n');

  // 汇总新状态
  const failedNames = new Set(failures.map((f) => f.name));
  const nextRules = {};
  for (const result of results) {
    if (result.entry) nextRules[result.name] = result.entry;
  }
  // 未选中的规则（--limit 测试模式）保留旧状态
  if (selected.length !== rules.length) {
    for (const [name, entry] of Object.entries(previousRules)) {
      if (!nextRules[name]) nextRules[name] = entry;
    }
  }

  // 需要删除的上游已下架规则（完整同步时才做；实际删除延后到全局成功之后）
  const removed = [];
  if (selected.length === rules.length) {
    for (const [name, entry] of Object.entries(previousRules)) {
      if (!nextRules[name]) removed.push({ name, file: entry.file });
    }
  }

  // 失败阈值：比例超限、或整客户端全部失败，都视为致命
  const failureLimit = Math.max(3, Math.ceil(rules.length * (config.maxFailureRatio ?? 0.02)));
  const allFailed = rules.length > 0 && failures.length === rules.length;
  const fatal = failures.length > failureLimit || allFailed;
  if (failures.length) {
    console.error(`[${client}] ${failures.length} 条规则失败（阈值 ${failureLimit}${allFailed ? '，且全部失败' : ''}）`);
    for (const f of failures.slice(0, 15)) console.error(`  - ${f.name}: ${f.error}`);
    if (failures.length > 15) console.error(`  … 其余 ${failures.length - 15} 条省略`);
  }
  if (removed.length) console.log(`[${client}] 待删除已下架规则: ${removed.map((r) => r.name).join(', ')}`);

  // 索引快照：rule_updated_at 取自实际落盘文件对应的时间，失败规则标记 stale
  const indexRules = rules
    .filter((r) => nextRules[r.name])
    .map((r) => {
      const entry = nextRules[r.name];
      const item = {
        name: r.name,
        chinese_name: r.chinese_name || '',
        types: r.types || [],
        type_counts: r.type_counts || {},
        total_line_count: r.total_line_count || 0,
        rule_updated_at: entry.rule_updated_at || null,
        file: entry.file,
      };
      if (failedNames.has(r.name)) item.stale = true;
      return item;
    });
  const snapshot = {
    client,
    rule_file_extension: fileExt,
    rule_count: indexRules.length,
    total_line_count: indexRules.reduce((sum, r) => sum + r.total_line_count, 0),
    rules: indexRules,
  };

  const bytes = Object.values(nextRules).reduce((sum, e) => sum + (e.bytes || 0), 0);
  stats.clients[client] = {
    client,
    rule_count: Object.keys(nextRules).length,
    total_line_count: snapshot.total_line_count,
    bytes,
    failed: failures.length,
  };

  return {
    client,
    state: { rule_count: Object.keys(nextRules).length, rules: nextRules },
    snapshot,
    removed,
    fatal,
    failures: failures.length,
  };
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const config = await readJson(opts.config, null);
  if (!config) throw new Error(`配置文件不存在: ${opts.config}`);
  if (!Array.isArray(config.clients) || config.clients.length === 0) throw new Error('config.clients 必须是非空数组');

  const repository = resolveRepository(config);
  if (!repository) {
    console.warn('[警告] 未配置仓库地址（config.repository 或 GITHUB_REPOSITORY），本次不生成 rules/<客户端>/README.md 目录页。');
  }

  const targets = opts.clients ? config.clients.filter((c) => opts.clients.includes(c)) : config.clients;
  if (targets.length === 0) throw new Error(`没有匹配的客户端，可选: ${config.clients.join(', ')}`);

  const statePath = path.join(opts.out, 'state.json');
  const state = (await readJson(statePath, { version: STATE_VERSION, clients: {} })) || { version: STATE_VERSION, clients: {} };
  state.clients = state.clients || {};

  const clientsMeta = await loadClientsMeta(config.upstream);
  for (const client of targets) {
    if (!clientsMeta.has(client)) throw new Error(`上游不存在客户端 ${client}`);
  }

  // 配置里已移除的客户端：先记下来，等全局成功后再删目录/索引
  const prunedClients = [];
  if (opts.prune) {
    for (const client of Object.keys(state.clients)) {
      if (config.clients.includes(client)) continue;
      prunedClients.push(client);
      delete state.clients[client];
    }
  }

  const stats = { added: 0, updated: 0, unchanged: 0, failed: 0, clients: {} };
  let fatal = false;
  const plans = [];
  const nextState = { version: STATE_VERSION, clients: { ...state.clients } };

  for (const client of targets) {
    const meta = clientsMeta.get(client);
    try {
      const plan = await syncClient({ opts, config, client, meta, state, stats });
      plans.push(plan);
      nextState.clients[client] = plan.state;
      fatal = fatal || plan.fatal;
    } catch (err) {
      console.error(`[${client}] 同步失败: ${err.message}`);
      fatal = true;
      if (state.clients[client]) nextState.clients[client] = state.clients[client];
    }
  }

  // 有任何致命失败：不写 state/index、不删任何规则文件（规则文件的新内容保留，下次会重新补齐/提交）
  if (fatal) {
    logSummary(stats, targets);
    await writeStepSummary(stats, targets);
    console.error('\n存在失败或上游异常：本次不更新 state/index、不删除文件，也不提交（退出码 1）。');
    if (prunedClients.length) console.error(`已跳过 --prune 清理: ${prunedClients.join(', ')}`);
    process.exit(1);
  }

  if (!opts.dryRun) {
    // 1) 删除已下架规则文件
    for (const plan of plans) {
      for (const item of plan.removed) {
        await fs.rm(toNative(opts.out, item.file), { force: true });
      }
    }
    // 2) 关闭状态的客户端目录清理
    for (const client of prunedClients) {
      console.log(`[prune] 移除客户端 ${client}`);
      await fs.rm(path.join(opts.out, 'rules', client), { recursive: true, force: true });
      await fs.rm(path.join(opts.out, 'index', `${client}.json`), { force: true });
    }
    // 3) 写索引快照
    for (const plan of plans) {
      await writeJson(path.join(opts.out, 'index', `${plan.client}.json`), plan.snapshot);
    }
    // 3.5) 写各客户端规则目录 README（含可直接复制的常用规则模板 + 全部规则链接）
    if (repository) {
      for (const plan of plans) {
        const catalogPath = path.join(opts.out, 'rules', plan.client, 'README.md');
        await writeFileAtomic(catalogPath, Buffer.from(buildClientCatalog(plan, repository), 'utf8'));
      }
    }
    // 4) 写 summary 与 state
    const summaryPath = path.join(opts.out, 'index', 'summary.json');
    const previousSummary = (await readJson(summaryPath, null)) || { clients: [] };
    const clientSummary = new Map(
      (previousSummary.clients || []).filter((c) => config.clients.includes(c.client)).map((c) => [c.client, c]),
    );
    for (const client of targets) {
      if (stats.clients[client]) clientSummary.set(client, stats.clients[client]);
    }
    await writeJson(summaryPath, {
      upstream: config.upstream,
      clients: [...clientSummary.values()].sort((a, b) => a.client.localeCompare(b.client)),
    });
    await writeJson(statePath, nextState);
  }

  console.log('\n===== 同步结果 =====');
  logSummary(stats, targets);
  await writeStepSummary(stats, targets);
}

function logSummary(stats, targets) {
  console.log(`新增 ${stats.added} · 更新 ${stats.updated} · 未变 ${stats.unchanged} · 失败 ${stats.failed}`);
  if (stats.checksumMismatch) {
    console.log(
      `manifest 校验和告警 ${stats.checksumMismatch} 条（上游 manifest 与产物不同步，已以实际产物为准；内容已通过 HTML/空/JSON 校验）`,
    );
  }
  for (const client of targets) {
    const c = stats.clients[client];
    if (!c) continue;
    console.log(
      `  ${client.padEnd(13)} 规则 ${String(c.rule_count).padStart(5)} · 行数 ${String(c.total_line_count).padStart(8)} · ${formatBytes(c.bytes)}`,
    );
  }
}

async function writeStepSummary(stats, targets) {
  const file = process.env.GITHUB_STEP_SUMMARY;
  if (!file) return;
  const rows = targets
    .filter((client) => stats.clients[client])
    .map((client) => {
      const c = stats.clients[client];
      return `| ${client} | ${c.rule_count} | ${c.total_line_count} | ${formatBytes(c.bytes)} |`;
    });
  const md = [
    '## MagicRule 镜像同步',
    '',
    `新增 **${stats.added}** · 更新 **${stats.updated}** · 未变 **${stats.unchanged}** · 失败 **${stats.failed}**`,
    stats.checksumMismatch ? `\nmanifest 校验和告警 **${stats.checksumMismatch}** 条（已以实际产物为准）` : '',
    '',
    '| 客户端 | 规则数 | 总行数 | 体积 |',
    '| --- | ---: | ---: | ---: |',
    ...rows,
    '',
  ].join('\n');
  await fs.appendFile(file, md);
}

main().catch((err) => {
  console.error(`\n同步失败: ${err.message}`);
  if (err.stack && process.env.DEBUG) console.error(err.stack);
  process.exit(1);
});
