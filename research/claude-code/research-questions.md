# 研究问题

## 1. 问题清单

| 编号 | 问题 | 来源 | 为什么重要 | 需要验证的源码方向 | 状态 |
|---|---|---|---|---|---|
| RQ-CC-001 | 官方 agentic loop 在本地 snapshot 中对应哪些对象？ | EXT-CC-002 | 决定如何把官方概念映射到源码 | `QueryEngine`, `queryLoop`, Tool execution, context | 已验证 |
| RQ-CC-002 | Claude Code 多界面/多入口是否复用同一 runtime 语义？ | EXT-CC-001 | 决定 CLI/remote/SDK 是否是同一架构 | `main.tsx`, REPL, bridge, remote, direct-connect | 部分验证 |
| RQ-CC-003 | 权限规则、模式和 hook 是否在源码中形成独立流水线？ | EXT-CC-003 | 决定安全模型是否只是 prompt 约束 | `ToolPermissionContext`, `useCanUseTool`, `toolExecution`, hooks | 已验证 |
| RQ-CC-004 | MCP、Skills、Hooks 是否是分层扩展模型？ | EXT-CC-004 | 决定扩展点是否应分开理解 | MCP client、commands、skills、plugin loader、hooks | 已验证 snapshot |
| RQ-CC-005 | Session JSONL/resume/fork 语义在源码中如何体现？ | EXT-CC-005 | 决定长期状态是否只是 UI history | `bootstrap/state.ts`, `sessionStorage.ts` | 已验证 snapshot |

## 2. 详细问题

### RQ-CC-001: 官方 agentic loop 对应哪些源码对象？

外部资料来源：

- https://code.claude.com/docs/en/how-claude-code-works

需要源码验证：

- gather context、take action、verify results 是否可映射到 REPL context loading、queryLoop、Tool execution 和 transcript。

验证结果：

- 已验证主要结构。

源码证据：

- `C-006`, `C-007`, `C-008`, `C-009`, `C-010`, `C-013`

### RQ-CC-002: 多界面/多入口是否复用同一 runtime 语义？

外部资料来源：

- https://code.claude.com/docs/en/overview
- https://code.claude.com/docs/en/how-claude-code-works

需要源码验证：

- CLI、REPL、headless SDK、remote、bridge、direct-connect 是否进入统一 query/message/permission 语义。

验证结果：

- 部分验证。本地 snapshot 验证了 CLI/REPL/headless/bridge/remote/direct-connect client pieces；官方当前 web/desktop/IDE/Slack/CI 不能由该 snapshot 完整确认。

源码证据：

- `C-003`, `C-004`, `C-006`, `C-015`, `INF-001`

### RQ-CC-003: 权限是否是独立流水线？

外部资料来源：

- https://code.claude.com/docs/en/permissions
- https://code.claude.com/docs/en/hooks

需要源码验证：

- deny/ask/allow、permission modes、PreToolUse/PermissionRequest 等是否对应源码中的 context、handler 和 tool execution path。

验证结果：

- 已验证。

源码证据：

- `C-009`, `C-010`

### RQ-CC-004: MCP、Skills、Hooks 是否分层？

外部资料来源：

- https://code.claude.com/docs/en/mcp
- https://code.claude.com/docs/en/skills
- https://code.claude.com/docs/en/features-overview

需要源码验证：

- MCP 是否包装成 Tool。
- Skill/command/plugin 是否进入 command/tool 语义。
- Hook 是否作为 lifecycle/permission/control extension 处理。

验证结果：

- 已验证本地 snapshot 中的主要结构。

源码证据：

- `C-010`, `C-011`, `C-012`, `INF-003`

## 3. 外部观点验证状态

| 外部观点 | 对应问题 | 验证状态 | 证据 |
|---|---|---|---|
| Agentic loop 由模型和工具共同驱动 | RQ-CC-001 | 已验证 | `C-006`-`C-010` |
| 多界面共用 agentic loop | RQ-CC-002 | 部分验证 | `C-003`, `C-004`, `C-006`, `C-015` |
| 权限由规则、模式、hook 控制 | RQ-CC-003 | 已验证 | `C-009`, `C-010` |
| MCP/Skills/Hooks 是不同扩展层 | RQ-CC-004 | 已验证 snapshot | `C-010`-`C-012` |
| Sessions 写入本地 JSONL | RQ-CC-005 | 已验证 snapshot | `C-013` |

## 4. 待继续确认

- 官方当前 changelog 与本地 snapshot 的差异。
- direct-connect server-side 文件缺失导致的完整性缺口。
- 官方 web/desktop/IDE/Slack/CI 界面的源码对应关系。
