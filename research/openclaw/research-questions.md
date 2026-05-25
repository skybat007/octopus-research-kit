# Research Questions

## 1. 问题清单

| 编号 | 问题 | 来源 | 为什么重要 | 需要验证的源码方向 | 状态 |
|---|---|---|---|---|---|
| RQ-OC-001 | OpenClaw 的 Gateway 是否真的是长期运行控制面？ | EXT-OC-001 | 决定架构中心是 Gateway 还是 Agent loop | CLI launcher、Gateway server、WS runtime | 已验证 |
| RQ-OC-002 | Agent runtime 的 OpenClaw-owned layer 与 Pi core 如何分工？ | EXT-OC-002 | 决定如何理解产品上下文与模型工具循环的边界 | Agent RPC、agent-command、attempt-execution、agent loop docs | 部分验证 |
| RQ-OC-003 | Plugin 是 capability ownership 模型还是普通 hook 列表？ | EXT-OC-003 | 决定扩展机制的核心抽象 | plugin manifest、loader、api-builder、hook-types | 已验证 |
| RQ-OC-004 | Session、DM isolation、多 Agent 是否是一等隔离模型？ | EXT-OC-004 | 决定多渠道/多 Agent 的状态边界 | session docs、multi-agent docs、agent ingress | 部分验证 |
| RQ-OC-005 | Channel/Provider plugin 是否能代表完整 capability contract？ | EXT-OC-003 | 决定样例插件能否支撑扩展点结论 | `extensions/anthropic`, `extensions/irc` | 已验证样例 |

## 2. 详细问题

### RQ-OC-001: Gateway 是否真的是长期运行控制面？

外部资料来源：

- https://docs.openclaw.ai/architecture

需要源码验证：

- Gateway 启动是否统一进入 server runtime。
- WS clients、nodes、agent RPC 是否都由 Gateway 管理。

验证结果：

- 已验证。`openclaw.mjs`、`src/entry.ts`、`src/cli/gateway-cli/run.ts` 和 Gateway server/runtime 证据支撑这一点。

源码证据：

- `C-004`, `C-005`, `C-006`

### RQ-OC-002: Agent runtime 的边界是什么？

外部资料来源：

- https://docs.openclaw.ai/concepts/agent

需要源码验证：

- Gateway agent RPC 如何进入 `agentCommandFromIngress`。
- OpenClaw session/workspace/delivery 是否包裹 Pi core。

验证结果：

- 部分验证。入口链路已验证，Pi core 内部事件结构未完全展开。

源码证据：

- `C-007`, `C-008`, `INF-003`

### RQ-OC-003: Plugin 是 capability ownership 还是普通 hook？

外部资料来源：

- https://docs.openclaw.ai/plugins/architecture

需要源码验证：

- manifest/discovery、validation、runtime loading、registry consumption 是否存在。
- Plugin API 是否注册 provider/channel/tool/hook/http/session/memory 等能力。

验证结果：

- 已验证。

源码证据：

- `C-010`, `C-011`, `C-012`, `C-017`, `INF-001`

### RQ-OC-004: Session 与 multi-agent 是否一等隔离模型？

外部资料来源：

- https://docs.openclaw.ai/concepts/session
- https://docs.openclaw.ai/concepts/multi-agent

需要源码验证：

- 不同消息来源如何路由 session。
- agent workspace、agentDir、auth profile、session store 如何隔离。

验证结果：

- 部分验证。本轮已有仓库文档和 agent ingress 证据，但还没有跑 live Gateway 多 Agent/channel binding。

源码证据：

- `C-008`, `C-009`

## 3. 外部观点验证状态

| 外部观点 | 对应问题 | 验证状态 | 证据 |
|---|---|---|---|
| Gateway 是长期运行控制面 | RQ-OC-001 | 已验证 | `C-004`-`C-006` |
| Agent runtime = OpenClaw 外壳 + Pi core | RQ-OC-002 | 部分验证 | `C-007`, `C-008`, `INF-003` |
| Capability registration 是 plugin 方向 | RQ-OC-003 | 已验证 | `C-010`-`C-012` |
| Session/multi-agent 是隔离模型 | RQ-OC-004 | 部分验证 | `C-008`, `C-009` |

## 4. 待继续确认

- 多 Agent channel binding 的 live behavior。
- `openclaw plugins inspect <id>` 的实际 runtime 输出。
- 一个真实 channel inbound 到 session/delivery 的端到端样例。
