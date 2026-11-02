代理规则集

##项目介绍
每天自动把 [MagicRule](https://magicrule.pages.dev) 上的规则抓取到本仓库，供 Surge / Mihomo / Quantumult X / Loon / Shadowrocket / Stash / Sing-box 直接订阅。

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

> [!CAUTION]
>
> **禁止任何形式转载或发布至中国大陆地区**

## 致谢

规则数据来自 [MagicRule](https://magicrule.pages.dev)，以及它聚合的 [ACL4SSR](https://github.com/ACL4SSR/ACL4SSR)、[v2fly/domain-list-community](https://github.com/v2fly/domain-list-community)、[LM-Firefly/Rules](https://github.com/LM-Firefly/Rules)、[SukkaW/Surge](https://github.com/SukkaW/Surge) 等上游项目。
