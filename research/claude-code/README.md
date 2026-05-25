# Claude Code 技术调研

Status: draft
Owner: cheng / Codex
Last Updated: 2026-05-25

## 调研摘要

本轮调研对象是 `/Users/cheng/IdeaProjects/claude-code`，它不是 Anthropic 官方仓库，而是一个面向安全研究的 Claude Code source snapshot。仓库 README 说明该快照来自 npm distribution 中公开可访问的 source map，并声明用途是 educational、defensive security 和 software supply-chain analysis。[C-001]

从源码看，Claude Code 的架构核心可以概括为：多入口命令路由 + 统一 setup/trust 边界 + React/Ink REPL + stateful `QueryEngine` + `queryLoop` 编排 + `Tool` contract + 权限流水线 + Skills/Plugins/MCP 扩展面 + session transcript 持久化。它不是一个只围绕单次 prompt 的 CLI，而是把本地交互、headless SDK、remote session、bridge 和 direct-connect 都接入同一套消息、工具和权限语义。[C-003][C-004][C-006][C-007][C-008][C-009][C-010][C-015]

本轮已补充 Claude Code 官方文档互证；源码验证部分仍只做静态分析，没有启动 CLI、没有跑测试、没有访问真实 API。

## 文件导航

| 文件 | 说明 |
|---|---|
| research-brief.md | 调研目标、范围、问题和交付物 |
| external-research.md | Claude Code 官方资料、快照来源和外部观点验证关系 |
| research-questions.md | 从官方资料生成的源码验证问题 |
| source-map.md | 仓库结构、入口、核心模块和阅读顺序 |
| architecture.md | 技术架构、模块边界、依赖方向和核心链路 |
| visual-architecture.html | HTML 可视化结构图，展示入口路由、Conversation Runtime、Tool、权限流水线和扩展面 |
| key-abstractions.md | 核心抽象、接口、数据结构和生命周期对象 |
| extension-points.md | Skills、Plugins、MCP、Hook、Command 等扩展机制 |
| runtime-flows.md | 入口启动、REPL turn、工具执行、MCP、session、remote 流程 |
| design-philosophy.md | 设计思想和关键取舍 |
| comparison.md | 与 Hermes Agent、OpenClaw 和常见 Agent CLI 的对照 |
| adoption-notes.md | 学习借鉴笔记、适用约束和待验证点 |
| evidence-index.md | 证据索引 |
| research-review.md | 调研审查 |

## 当前结论

- Claude Code 官方文档描述的是当前产品能力，本地仓库是非官方 source snapshot；因此本轮把官方资料用于解释产品语义，把源码用于验证 snapshot 中的真实实现。[C-001][EXT-CC-001]
- Claude Code snapshot 首先是一个模式路由器：`main()` 在真正进入 Commander 前先处理 Windows 安全环境、direct-connect URL、deep link、assistant command、SSH command、headless/interactive 判定和 client type。[C-003]
- `setup()` 和 `renderAndRun()` 把运行环境、工作目录、trust、API key、MCP approvals、telemetry 等前置边界放在 query 之前，说明安全和上下文隔离不是工具调用时才临时判断。[C-005]
- `QueryEngine` 是会话级状态拥有者，`queryLoop` 是 turn 内编排器；两者之间通过消息、system/user context、tool context、budget、fallback、permission callback 和 streaming events 协作。[C-007][C-008]
- `Tool` 是最关键的协议对象，不只是 `name + call`：它还携带 schema、权限、并发、只读、破坏性、渲染、MCP/LSP、defer、strict 等语义。[C-009]
- 权限系统被做成独立流水线：tool execution、hooks、permission context、interactive handler、bridge/remote callbacks、speculative classifier 都可能参与一次 tool decision。[C-010]
- 扩展面分层清晰：Slash command、Skill、Plugin、MCP tool/resource、Hook、remote/bridge session 各自有加载和执行协议，而不是混成一个大插件入口。[C-011][C-012][C-015]

## 待确认

- 未验证本地依赖是否完整，也未运行 `bun`、CLI 或测试。
- 已补充 Claude Code 官方文档互证，但官方当前行为和本地非官方 snapshot 仍需要严格区分。
- direct-connect server 子命令引用的部分 server-side 文件在本地快照中不存在，本轮只能分析 client/manager 和入口引用。[C-004][C-015]
- React/Ink UI 的部分源码经过编译器处理，可读性弱于普通手写 TSX，本轮重点放在状态和调用链。
