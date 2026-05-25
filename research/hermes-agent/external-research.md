# External Research

## 1. 官方资料

| 资料 | 链接或路径 | 主要内容 | 对本次调研的价值 | 可信度等级 |
|---|---|---|---|---|
| GitHub README | https://github.com/NousResearch/hermes-agent | 项目定位、自提升 learning loop、CLI/Gateway/TUI/cron/provider/memory/skills 能力概览 | 校准产品目标和外部入口 | A |
| Architecture docs | https://hermes-agent.nousresearch.com/docs/developer-guide/architecture | 目录结构、`run_agent.py`、`model_tools.py`、`toolsets.py`、agent internals、CLI subcommands | 与本地 source-map/architecture 互证 | A |
| Messaging Gateway docs | https://hermes-agent.nousresearch.com/docs/user-guide/messaging | messaging sessions、allowlist 安全默认值、background delivery、service management | 验证 Gateway/session/delivery 方向 | A |
| Plugins docs | https://hermes-agent.nousresearch.com/docs/user-guide/features/plugins | plugin.yaml + Python register，注册 tools/hooks/slash commands/platform/provider 等 | 验证插件是扩展控制面而非只读配置 | A |
| Toolsets reference | https://hermes-agent.nousresearch.com/docs/reference/toolsets-reference | toolset 是按平台/会话/任务控制工具能力的 bundle | 验证 ToolRegistry 与 toolset 过滤结论 | A |
| Memory Providers docs | https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers | 8 个外部 memory providers，且一次只激活一个外部 provider | 验证 Memory Provider 边界 | A |
| Cron docs | https://hermes-agent.nousresearch.com/docs/user-guide/features/cron/ | cron job 可加载 skills、fresh agent sessions、delivery 输出和防递归 | 验证 cron 是 gateway/runtime 扩展入口 | A |

## 2. 项目协作资料

| 资料 | 链接或路径 | 主要观点 | 时间/版本 | 可信度等级 | 是否需要源码验证 |
|---|---|---|---|---|---|
| GitHub repository file tree | https://github.com/NousResearch/hermes-agent | 公开仓库结构与本地快照目录大体一致 | 2026-05-25 查询 | B | 是 |
| Release files | GitHub README 中列出的 `RELEASE_v0.10.0` 到 `RELEASE_v0.14.0` | 说明项目有版本化 release notes | 2026-05-25 查询 | B | 后续版本差异调研需要 |

## 3. 社区与第三方资料

本轮未采用独立第三方文章作为结论依据。Hermes Agent 外部资料以官方 GitHub 和 Nous Research 文档站为主。

## 4. 外部资料中的关键观点

### EXT-HA-001: Hermes 是多入口 self-improving agent

来源：

- GitHub README
- Hermes docs 首页/Architecture docs

说明：

- 外部资料强调 Hermes 不只是 CLI，而是 CLI、TUI、Messaging Gateway、cron、skills、memory、providers 和 delegation 的组合。

是否已被源码验证：

- 已验证多入口收敛到 `AIAgent` 与 conversation loop。

对应源码证据：

- [evidence-index.md](./evidence-index.md) `H-001`, `H-003`, `H-004`, `H-013`, `H-014`, `H-015`, `H-016`

### EXT-HA-002: Toolsets 是能力控制面

来源：

- Toolsets Reference
- GitHub README documentation index

说明：

- 外部资料将 toolsets 描述为按平台、会话或任务控制工具可用性的 bundle。

是否已被源码验证：

- 已验证 `toolsets.py` 与 `model_tools.py` 的 schema/filter/dispatch 逻辑。

对应源码证据：

- `H-005`, `H-006`, `H-007`

### EXT-HA-003: Plugin 是自定义 tools/hooks/integrations 的路径

来源：

- Plugins docs

说明：

- 外部资料说明插件可注册 tool、hook、slash command、gateway platform、provider 等。

是否已被源码验证：

- 已验证通用插件系统、gateway platform registry、provider profile 和 memory provider 扩展面。

对应源码证据：

- `H-008`, `H-010`, `H-011`, `H-012`

### EXT-HA-004: Gateway 默认安全策略依赖 allowlist / pairing

来源：

- Messaging Gateway docs

说明：

- 外部资料强调 messaging gateway 默认拒绝不在 allowlist 或未 DM pairing 的用户。

是否已被源码验证：

- 部分验证。本轮主要验证 Gateway session/delivery 与 adapter 结构，allowlist 细节仍需平台 adapter 级深挖。

对应源码证据：

- `H-009`, `INF-004`

### EXT-HA-005: Memory Provider 一次只激活一个外部 provider

来源：

- Memory Providers docs

说明：

- 外部资料强调 built-in memory 始终启用，但外部 provider 只能激活一个。

是否已被源码验证：

- 已验证 MemoryManager 与 MemoryProvider 抽象。

对应源码证据：

- `H-012`

## 5. 外部资料与源码不一致的地方

| 外部资料说法 | 源码实际情况 | 判断 | 后续处理 |
|---|---|---|---|
| README 强调 self-improving learning loop | 本轮源码验证了 skills/memory/session/search 等支撑结构，但未验证学习触发策略的 live behavior | 部分验证 | 后续需跟踪 agent-created skills 和 session search 实际流程 |
| Messaging docs 强调 allowlist/pairing 安全默认值 | 本轮 Gateway 证据聚焦 message/session/delivery，未逐平台验证认证细节 | 部分验证 | 后续按 Telegram/Discord adapter 抽样 |

## 6. 对调研方向的影响

外部资料帮助确认本轮应重点保留：

- 多入口到 `AIAgent` 的统一 runtime
- ToolRegistry + toolset 的能力控制
- 插件、Provider、Memory、Gateway Platform 分层扩展
- Messaging Gateway 的 session/delivery/safety
- Cron 与 background delivery
