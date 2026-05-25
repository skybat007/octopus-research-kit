# 研究问题

## 1. 问题清单

| 编号 | 问题 | 来源 | 为什么重要 | 需要验证的源码方向 | 状态 |
|---|---|---|---|---|---|
| RQ-HA-001 | Hermes 的多个入口是否最终进入同一个 Agent runtime？ | EXT-HA-001 | 决定架构中心是单 runtime 还是多套系统 | CLI、TUI gateway、ACP、Gateway、cron | 已验证 |
| RQ-HA-002 | Toolsets 是否真的是工具能力控制面？ | EXT-HA-002 | 决定工具系统如何按平台/任务收敛 | `toolsets.py`, `model_tools.py`, `ToolRegistry` | 已验证 |
| RQ-HA-003 | Plugin 是否能注册 tools/hooks/commands/platform/provider？ | EXT-HA-003 | 决定扩展机制是否分层 | `hermes_cli/plugins.py`, gateway platform registry, providers, memory | 已验证 |
| RQ-HA-004 | Gateway session/delivery 是否支撑 messaging 入口？ | EXT-HA-004 | 决定消息入口是否共享 Agent runtime | `gateway/run.py`, `gateway/session.py`, adapter base | 已验证结构，安全细节部分验证 |
| RQ-HA-005 | Memory Provider 是否一次只允许一个外部 provider？ | EXT-HA-005 | 决定长期记忆边界和失败隔离 | `agent/memory_manager.py`, `agent/memory_provider.py` | 已验证 |
| RQ-HA-006 | Cron 是否在 fresh agent session 中运行并负责 delivery？ | Cron docs | 决定 scheduler 是外挂脚本还是 Agent runtime extension | `cron/jobs.py`, `cron/scheduler.py`, gateway cron ticker | 已验证结构 |

## 2. 详细问题

### RQ-HA-001: 多入口是否共用 Agent runtime？

外部资料来源：

- GitHub README
- Architecture docs

需要源码验证：

- CLI、TUI、Gateway、ACP、cron 是否构造或调用 `AIAgent` / `run_conversation`。

验证结果：

- 已验证。

源码证据：

- `H-003`, `H-004`, `H-013`, `H-014`, `H-015`, `H-016`, `INF-001`

### RQ-HA-002: Toolsets 是否是工具能力控制面？

外部资料来源：

- Toolsets Reference

需要源码验证：

- 工具是否经 `ToolRegistry` 注册。
- 模型 tool schema 是否通过 toolset/disabled toolset 过滤。

验证结果：

- 已验证。

源码证据：

- `H-005`, `H-006`, `H-007`, `INF-002`

### RQ-HA-003: Plugin 扩展面是否分层？

外部资料来源：

- Plugins docs

需要源码验证：

- 插件是否可注册 tools、commands、hooks、provider-like 能力、gateway platform、memory provider。

验证结果：

- 已验证。

源码证据：

- `H-008`, `H-010`, `H-011`, `H-012`, `INF-003`

### RQ-HA-004: Gateway session/delivery 是否支撑 messaging 入口？

外部资料来源：

- Messaging Gateway docs

需要源码验证：

- `MessageEvent`、`SessionContext`、adapter、delivery dedupe 和 cached/fresh agent 是否存在。

验证结果：

- 已验证结构。allowlist/pairing 安全细节未逐平台验证。

源码证据：

- `H-009`, `H-010`, `INF-004`

## 3. 外部观点验证状态

| 外部观点 | 对应问题 | 验证状态 | 证据 |
|---|---|---|---|
| 多入口共用 Agent runtime | RQ-HA-001 | 已验证 | `H-003`, `H-004`, `H-013`-`H-016` |
| Toolsets 控制工具可用性 | RQ-HA-002 | 已验证 | `H-005`-`H-007` |
| Plugin 注册 tools/hooks/integrations | RQ-HA-003 | 已验证 | `H-008`, `H-010`-`H-012` |
| Gateway 默认 allowlist/pairing | RQ-HA-004 | 部分验证 | `H-009`, 待平台 adapter 安全抽样 |
| Memory Provider 一次一个外部 provider | RQ-HA-005 | 已验证 | `H-012` |

## 4. 待继续确认

- agent-created skills 的实际触发和更新策略。
- Gateway allowlist/pairing 在具体平台 adapter 中的实现差异。
- Cron delivery 与 session history 的 live trace。
