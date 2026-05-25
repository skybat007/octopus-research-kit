# 横向对比

## 1. 对照对象

本文件把 Claude Code 与本项目已调研的 Hermes Agent、OpenClaw，以及常见 Agent CLI 设计做架构维度对照。Claude Code 结论均来自本轮证据；其他项目仅作为理解参照，不作为 Claude Code 的事实来源。

## 2. 架构定位

| 维度 | Claude Code | Hermes Agent | OpenClaw | 常见 Agent CLI |
|---|---|---|---|---|
| 核心定位 | 终端/SDK/远程会话统一的 coding agent runtime | 本地优先、多入口 Agent runtime 与 gateway | Skill/workflow/角色协作平台 | 单 CLI 或简单 chat loop |
| 入口复杂度 | 高，`main()` 负责多模式路由和大量子命令[C-003][C-004] | 高，CLI/TUI/Gateway/ACP/cron 多入口 | 高，Skill/任务/通知/工作流多入口 | 通常中低 |
| 核心运行对象 | `QueryEngine` + `queryLoop`[C-007][C-008] | `AIAgent` + conversation loop | Skill runtime/workflow/session | 一个 loop 或 service |
| 工具抽象 | `Tool` contract 极厚，含权限、渲染、并发、MCP 等[C-009] | ToolRegistry + model tool schema | Skill 工具与平台服务 | function/tool call wrapper |
| 权限模型 | 独立 permission pipeline，支持 hooks、UI、bridge、remote[C-010] | 审批/hook/toolset 组合 | 运行态权限与平台安全约束 | 多为 allowlist 或简单确认 |
| 扩展机制 | Command/Skill/Plugin/MCP/Hook 分层[C-011][C-012] | Plugin/Provider/Memory/Gateway Platform 分层 | Skills/workflows/platform APIs | plugin 或 config |
| 会话状态 | session id、transcript、sidechain、remote persistence[C-013] | session store/memory/gateway session | 会话上下文和任务记录 | history file 或内存 |
| 远程会话 | bridge、remote CCR、direct-connect[C-015] | gateway/ACP/TUI bridge | OpenClaw 平台会话/通知 | 通常弱或没有 |

## 3. Claude Code 的突出点

### Tool contract 语义最厚

Hermes Agent 的工具系统偏 registry-first；Claude Code 则把更多调度、权限、渲染、MCP 和 UI 提示语义放进 `Tool` contract。[C-009] 这让一个工具可以同时服务模型、权限系统、UI 和远程通道。

### 权限流水线最细

Claude Code 的权限不是只在 registry 层判断，而是在 tool execution path 中串起 validation、hooks、interactive handler、classifier、bridge/remote callbacks 和 decision persistence。[C-010] 对 coding agent 来说，这种结构更适合处理读写文件、执行命令、Web/MCP 等高风险能力。

### 远程和本地复用消息语义

bridge 使用 child CLI + stream-json，remote session 使用 WebSocket + HTTP POST，direct-connect 使用 WebSocket + stream-json；三者都显式处理 SDK messages 和 permission control request。[C-015] 这比单纯把远程当成 HTTP API 更接近“远程化同一个 runtime”。

### Prompt-cache 稳定性被前置

tool pool 组装中显式考虑 source of truth、deny filter、simple mode、dedup 和稳定排序。[C-009] 这说明模型上下文成本和稳定性直接影响架构设计。

## 4. Claude Code 的复杂度成本

- `main.tsx` 非常大，入口、命令、模式和子命令都集中在一个文件，阅读门槛高。[C-003][C-004]
- `Tool` contract 功能丰富，学习成本高；新增工具需要理解 schema、permission、rendering、concurrency 等多个维度。[C-009]
- permission path 横跨 tool execution、hooks、React hook、permission context、interactive handler、bridge/remote callback，调试时需要按链路追踪。[C-010]
- direct-connect server-side 文件在当前快照中不完整，部分能力只能确认入口引用和 client-side 行为。[C-004][C-015]

## 5. 学习优先级

1. 先学 `QueryEngine` 和 `queryLoop` 的会话/turn 分工。
2. 再学 `Tool` contract 如何让模型、权限、UI 和调度共享语义。
3. 再学 permission pipeline 如何兼容本地、远程和自动模式。
4. 最后学 Skills/Plugins/MCP 如何分别进入 command/tool/resource 语义。
