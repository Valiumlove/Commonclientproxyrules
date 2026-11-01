# MagicRule 规则镜像

每天自动把 [MagicRule](https://magicrule.pages.dev/#/c/Surge) 上的规则抓取到本仓库，供 Surge / Mihomo / Quantumult X / Loon / Shadowrocket / Stash / Sing-box 直接订阅。

- 上游：`https://magicrule.pages.dev`（规则由它聚合生成）
- 更新：GitHub Actions 每天 **03:23 UTC**（北京时间 11:23）自动运行，周日自动做一次全量核对；也可手动触发
- 原则：规则正文不变就不重写规则文件；只有上游确实改了规则才提交。偶尔会产生只含 `index/`、`state.json` 的元数据提交（正文没变）

## 支持的客户端

| 客户端 | 格式 | 目录 | 上游产物 |
| --- | --- | --- | --- |
| Surge | `.list` | `rules/Surge/` | `rules` |
| Mihomo（Clash Meta） | `.yaml` | `rules/Mihomo/` | `classical` |
| Quantumult X | `.list` | `rules/QuantumultX/` | `rules` |
| Loon | `.list` | `rules/Loon/` | `rules` |
| Shadowrocket | `.list` | `rules/Shadowrocket/` | `rules` |
| Stash | `.yaml` | `rules/Stash/` | `classical` |
| Sing-box | `.json` | `rules/SingBox/` | `source` |

> 每个规则集一个文件，文件名就是上游规则名（如 `Advertising.list`、`Direct.yaml`）。
> 每个客户端目录下还有一份自动生成的 [`README.md`](rules/Surge/README.md)，里面是**可直接复制的常用规则导入片段**和全部规则的 raw 链接。
>
> 需要 AdGuard / Egern / Surfboard？在 `config.json` 的 `clients` 里加上即可（见下文）。

## 直接打开各客户端规则目录

| 客户端 | 规则目录（含复制导入示例 + 全部规则链接） |
| --- | --- |
| Surge | [rules/Surge/README.md](rules/Surge/README.md) |
| Mihomo（Clash Meta） | [rules/Mihomo/README.md](rules/Mihomo/README.md) |
| Quantumult X | [rules/QuantumultX/README.md](rules/QuantumultX/README.md) |
| Loon | [rules/Loon/README.md](rules/Loon/README.md) |
| Shadowrocket | [rules/Shadowrocket/README.md](rules/Shadowrocket/README.md) |
| Stash | [rules/Stash/README.md](rules/Stash/README.md) |
| Sing-box | [rules/SingBox/README.md](rules/SingBox/README.md) |

## 目录结构

```
rules/<客户端>/<规则名>.<扩展名>   # 规则文件本体
rules/<客户端>/README.md          # 自动生成的规则目录（常用规则导入片段 + 全部 raw 链接）
index/<客户端>.json               # 该客户端的规则目录（名称/类型/行数/更新时间/文件路径）
index/summary.json                # 全部客户端汇总
state.json                        # 同步状态（SHA256、更新时间），用于增量同步
config.json                       # 同步配置
scripts/sync.mjs                  # 同步脚本（零依赖）
.github/workflows/sync.yml        # 每日自动同步工作流
```

## 使用方法

Raw 地址模板：

```
https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/<客户端>/<规则名>.<扩展名>
```

国内访问 `raw.githubusercontent.com` 不稳定时，可用 jsDelivr 镜像：

```
https://cdn.jsdelivr.net/gh/Valiumlove/magicrule-mirror@main/rules/<客户端>/<规则名>.<扩展名>
```

### Surge

```ini
[Rule]
RULE-SET,https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Surge/Advertising.list,REJECT
RULE-SET,https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Surge/Direct.list,DIRECT
```

### Mihomo / Stash

```yaml
rule-providers:
  advertising:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/Mihomo/Advertising.yaml"
    path: ./ruleset/advertising.yaml
    interval: 86400

rules:
  - RULE-SET,advertising,REJECT
```

### Quantumult X

```ini
[filter_remote]
https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/QuantumultX/Advertising.list, tag=Advertising, force-policy=reject, update-interval=86400
```

### Sing-box

```json
{
  "type": "remote",
  "tag": "advertising",
  "format": "source",
  "url": "https://raw.githubusercontent.com/Valiumlove/magicrule-mirror/main/rules/SingBox/Advertising.json",
  "download_detour": "direct"
}
```

> 各客户端语法版本差异较大，上面只是最小示例，具体请以对应客户端文档为准。

## 本地运行

需要 Node.js 20+（零第三方依赖）：

```bash
node scripts/sync.mjs                      # 按 config.json 同步
node scripts/sync.mjs --client Surge       # 只同步一个客户端
node scripts/sync.mjs --limit 10 --out .tmp/sample   # 小样本测试，不污染仓库
node scripts/sync.mjs --full               # 忽略缓存，全量重新核对
node scripts/sync.mjs --prune              # 删除 config.json 里已移除的客户端目录
node scripts/sync.mjs --allow-shrink       # 允许上游规则数大幅下降（确认上游真的删了规则时用）
node scripts/sync.mjs --dry-run            # 只看计划不写文件
```

## 配置说明（config.json）

| 字段 | 说明 |
| --- | --- |
| `upstream` | 上游站点地址，默认 `https://magicrule.pages.dev` |
| `clients` | 要镜像的客户端列表。只要 Surge 就写 `["Surge"]`；全部主流代理客户端见默认值 |
| `artifactKeys` | 各客户端取哪个产物：`rules` / `classical` / `source`（一般不用改） |
| `concurrency` | 并发请求数，默认 8 |
| `maxFileBytes` | 单文件大小上限，默认 64 MB，超过视为异常 |
| `maxShrinkRatio` | 规则数下降超过该比例视为上游异常并中止，默认 `0.25`（25%） |
| `maxFailureRatio` | 失败规则比例阈值（且至少 3 条）超过则本次不提交 |

增删客户端后手动运行一次 `--prune`（或在 Actions 里勾选 prune），即可清理不再需要的目录。

## 同步机制与安全设计

- **增量**：索引里的 `rule_updated_at` 没变、本地文件 SHA256 校验通过时，不请求 manifest、不下载文件。
- **去抖**：上游文件头里的 `# UPDATED` 时间戳变化但正文没变时，保留旧文件，避免无意义提交。只在 manifest 自带的 `bytes_sha256` 与下载内容一致时才用它判断（manifest 与产物不同步时以实际产物为准，避免被滞后信息骗过而错过真实更新）。
- **完整性**：拒绝空文件、HTML 兜底页、无法解析的 JSON，单文件超过 64 MB 视为异常；manifest 自带的 `bytes_sha256` 实测约 3%～30% 与 CDN 实际副本不同步（取决于上游重建时机），因此只作为告警（次数会写进 Actions 的运行摘要），不阻断同步。
- **防误删**：某客户端规则数比上次骤降超过 25% 时直接中止，不提交（确认上游真删了再加 `--allow-shrink`，或在 Actions 里勾选 allow_shrink）。
- **失败不提交（事务式）**：单客户端失败规则超过 `max(3, 2%)`、整个客户端全部失败、索引拉取失败、或上游出现重名规则时，脚本退出码为 1：**不写 `state.json` / `index/`，也不删除任何规则文件**，仓库保留上一次的完整数据。
- **索引标注**：下载失败的规则如果保留了旧文件，会在 `index/<客户端>.json` 里标 `"stale": true`，便于识别「索引时间与文件内容可能不一致」的条目。

## 注意事项

- 建议用**公开仓库**：Actions 免费额度足够，raw 地址也方便直接订阅。
- 仓库约 190 MB；如果只需要一两个客户端，把 `config.json` 的 `clients` 改小（比如 `["Surge"]` 约 25 MB），再在 Actions 里勾选 prune 跑一次。
- GitHub 的定时任务在仓库长期无活动时可能被暂停；本仓库每天有机器人提交通常不会触发，万一被暂停，手动 Run workflow 一次即可恢复。
- 上游接口若改版（`/data/index/*.json` 结构变化等），同步会失败且当天不提交、旧数据不受影响；此时更新 `scripts/sync.mjs` 即可。
- 规则内容版权归 MagicRule 及其上游规则作者所有，本仓库仅做格式镜像，不修改规则内容；使用前请自行评估风险（去广告规则可能存在误拦截）。

## 致谢

规则数据来自 [MagicRule](https://magicrule.pages.dev)，以及它聚合的 [ACL4SSR](https://github.com/ACL4SSR/ACL4SSR)、[v2fly/domain-list-community](https://github.com/v2fly/domain-list-community)、[LM-Firefly/Rules](https://github.com/LM-Firefly/Rules)、[SukkaW/Surge](https://github.com/SukkaW/Surge) 等上游项目。
