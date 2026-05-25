# Hermes Agent 技术调研

Status: draft
Owner: cheng / Codex
Last Updated: 2026-05-25

## 调研摘要

Hermes Agent 是 Nous Research 维护的本地优先 AI Agent 项目，产品形态覆盖 CLI、TUI、消息网关、ACP、cron、工具系统、插件系统、模型 Provider 和记忆 Provider。它的架构核心不是单一聊天入口，而是把多个用户界面和消息渠道统一接到同一个 `AIAgent` 运行时，再通过工具注册表、Provider Profile、Plugin Hook、Session Store 和 Gateway Adapter 管理差异。[H-001][H-002][H-004][H-009]

本轮调研固定在本地快照 `/Users/cheng/IdeaProjects/hermes-agent`，branch `main`，commit `cae7537359c0ba8fceedc0a6423a4d9f30972100`。这是第一版架构级调研，重点覆盖入口、Agent 主循环、工具系统、插件系统、Provider、Memory、Gateway、TUI、cron 与可学习的设计思想；暂不覆盖每个具体平台 Adapter、所有工具实现、UI 细节和性能压测。

## 文件导航

| 文件 | 说明 |
|---|---|
| research-brief.md | 调研目标、范围、问题和交付物 |
| external-research.md | 官方资料、协作资料、外部观点和源码验证关系 |
| research-questions.md | 从外部资料生成的源码验证问题 |
| source-map.md | 仓库结构、入口、模块和阅读顺序 |
| architecture.md | 技术架构、模块边界和依赖方向 |
| visual-architecture.html | HTML 可视化结构图，展示多入口、Agent Core、工具、插件、Gateway 和状态边界 |
| key-abstractions.md | 核心抽象、接口、数据结构和生命周期 |
| extension-points.md | 插件、Hook、Registry、Provider 等扩展机制 |
| runtime-flows.md | 主流程追踪和关键状态变化 |
| design-philosophy.md | 设计思想和关键取舍 |
| comparison.md | 与同类 Agent Gateway/CLI 项目的对照维度 |
| adoption-notes.md | 学习借鉴笔记 |
| evidence-index.md | 证据索引 |
| research-review.md | 调研审查 |

## 当前结论

- Hermes Agent 官方 README/docs 与本地源码共同确认主设计是“多入口，共用 Agent Core”：CLI、TUI、Gateway、ACP 和 cron 最终都围绕 `AIAgent` 与 `run_conversation` 组织。[H-003][H-004][H-013][H-014][H-015][EXT-HA-001]
- 工具系统采用中央 `ToolRegistry` + toolset 过滤 + plugin 注册的组合，`model_tools.py` 负责把 Registry 转成模型可消费的 tool schema，并把模型 tool call 分发回 Registry。[H-005][H-006][H-007]
- 插件系统不是单一 hook 列表，而是分层的扩展控制面：通用插件、Provider Profile、Memory Provider、Gateway Platform、Context Engine、CLI/Slash Command 和 Toolset 都有独立入口。[H-008][H-010][H-011][H-012]
- Gateway 是最复杂的运行面：它把平台 Adapter、认证/配对、session key、agent 缓存、流式输出、重复投递保护和 cron delivery 统一在一个大文件和少量支撑模块中。[H-009][H-010][H-016]
- 最值得学习的思想是稳定系统提示词、入口归一、注册表驱动工具、Provider 行为剥离、Profile 隔离、显式 session key、可失败但不拖垮主流程的插件 hook。[H-004][H-006][H-008][H-012]

## 待确认

- 尚未启动 Hermes Agent 本地 CLI/TUI/Gateway 验证 live behavior。
- 尚未跑测试，只做了静态源码和仓库文档分析。
- 已补充官方外部资料互证，但尚未采用独立第三方实践文章作为结论依据。
- 尚未逐一审查每个 built-in tool、platform adapter、provider plugin 和 memory provider 的实现质量。
- TUI 前端 `ui-tui` 的交互设计和渲染状态机只做入口级扫描，未深入组件层。
