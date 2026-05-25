# 调研简报

## 1. 调研对象

| 项 | 内容 |
|---|---|
| 项目 | Claude Code source snapshot |
| 本地路径 | `/Users/cheng/IdeaProjects/claude-code` |
| 远程来源 | `https://github.com/jarmuine/claude-code.git` |
| branch/commit | `main`, `4b9d30f7953273e567a18eb819f4eddd45fcc877` |
| 代码规模 | `src` 下约 1902 个文件 |
| 主要技术 | TypeScript, Bun, React + Ink, CLI, WebSocket, MCP |
| 快照属性 | 非官方源码快照，README 声明用于安全研究和供应链分析 |
| 官方文档 | https://code.claude.com/docs |
| 外部资料范围 | Claude Code 官方 docs、非官方 snapshot README/GitHub；本轮未采用第三方分析文章 |

## 2. 调研目标

理解 Claude Code 的技术架构和设计思想，重点回答：

- 它如何把 CLI、REPL、headless SDK、remote、bridge、direct-connect 等入口统一到同一套运行模型？
- `QueryEngine`、`queryLoop`、Tool、权限、上下文、session transcript 之间如何协作？
- Skills、Plugins、MCP、Commands、Hooks 分别承担什么扩展职责？
- 哪些设计思想值得用于学习 Agent CLI、工具编排和权限系统？

## 3. 范围

本轮覆盖：

- 启动入口、命令注册、运行模式选择
- setup/trust/onboarding/API key/MCP approval 等运行前边界
- REPL 到 query 的主流程
- `QueryEngine` 和 `queryLoop`
- Tool contract、tool pool、tool execution、permission pipeline
- Commands、Skills、Plugins、MCP
- session id、transcript、context、API client
- bridge、remote session、direct-connect 的会话通道

本轮不覆盖：

- 每个内置工具的完整实现细节
- 全量 UI 组件渲染
- 官方产品能力判断
- 真实模型 API 行为、性能压测或安全审计结论
- 任何后续工程动作方案

## 4. 交付物

- `source-map.md`
- `external-research.md`
- `research-questions.md`
- `architecture.md`
- `key-abstractions.md`
- `extension-points.md`
- `runtime-flows.md`
- `design-philosophy.md`
- `comparison.md`
- `adoption-notes.md`
- `evidence-index.md`
- `research-review.md`

## 5. 方法

- 固定本地 snapshot、branch、commit 和调研日期。
- 补充 Claude Code 官方文档调研，并把官方观点转成源码验证问题。
- 从 README、入口文件、核心对象、工具系统、扩展系统、session 和 remote 通道向内追踪。
- 所有关键结论用 `evidence-index.md` 中的证据编号约束。
- 对推断和未验证点单独标注，避免把源码阅读结论包装成运行时事实。
