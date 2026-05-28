# A2UI 技术调研

Status: draft
Last Updated: 2026-05-28

## 调研摘要

A2UI 是 Google 开源的 Agent-to-UI 协议与实现仓库，目标是让 agent 输出安全、可验证、可流式更新的声明式 UI JSON，由客户端使用本地组件库渲染成原生界面。当前仓库同时包含协议规范、Basic Catalog、React/Lit/Angular/Flutter renderer、Python SDK、A2A/ADK 集成、catalog 构建工具、样例和 conformance 测试。

本轮调研固定在 `google/A2UI` 的 `main` 分支快照 `e05dd9699dea21ba832059acb680f71022dd5a77`。重点分析 v0.9 协议，因为 README、概念文档、React/web_core renderer 和 Python SDK 的主实现都围绕 v0.9 展开；同时补充了 2026-05-28 的官网/生态网络检索，确认官方 Roadmap 已把 v0.9 标为 current、feature complete、supported，而 v0.10/v1.0 仍处于 draft/规划阶段。

## 核心结论

- A2UI 的核心边界是“agent 只发送数据化 UI 意图，客户端负责解释和渲染”。这使它比直接执行 agent 生成代码更安全，也让同一份 UI 意图可映射到多端 renderer。
- v0.9 将协议组织成 `createSurface`、`updateComponents`、`updateDataModel`、`deleteSurface` 四类 server-to-client 消息，组件采用扁平 adjacency-list 模型，用 `id` 和 child refs 维护树结构，适合 LLM 增量生成。
- renderer 的关键实现不在 React 组件本身，而在 `web_core` 的 `MessageProcessor`、`SurfaceModel`、`DataModel`、`DataContext`、`GenericBinder` 和 `Catalog`。React renderer 是这些状态与绑定抽象的 UI 适配层。
- Catalog 是协议能力、设计系统和安全边界的中心。Basic Catalog 提供可移植默认组件与函数；生产系统更应定义自有 catalog，并通过 capabilities / inline catalogs 与 agent 协商。
- Python SDK 的价值是把 A2UI 从“让模型凭空输出 JSON”升级为“prompt/schema/catalog/validator/A2A part converter 串联的生成管线”。它会注入 schema、修复常见 JSON 问题、校验组件完整性与拓扑，并把 A2UI payload 包装为 A2A DataPart。
- 成熟度口径需要区分来源：本地 README 仍保留 public preview / evolving 提示；官网 Roadmap 则把 v0.9 标为 current/supported，v0.10 和 v1.0 仍是 draft/目标版本。生产采纳时应锁定协议版本并核对目标 package/renderer 的实际发布状态。

## 阅读顺序

1. [research-brief.md](research-brief.md) - 调研范围、版本、交付物。
2. [architecture.md](architecture.md) - 总体架构与模块职责。
3. [runtime-flows.md](runtime-flows.md) - 生成、渲染、交互、SDK/A2A 流程。
4. [key-abstractions.md](key-abstractions.md) - 核心抽象拆解。
5. [extension-points.md](extension-points.md) - 扩展点与二次开发入口。
6. [adoption-notes.md](adoption-notes.md) - 采纳建议、风险和落地路径。
7. [evidence-index.md](evidence-index.md) - 结论到源码/文档/测试的证据映射。
8. [dashboard.html](dashboard.html) - 本调研目录的浏览入口。
9. [visual/architecture.html](visual/architecture.html) - 架构图可视化。

## 调研边界

本轮以本地源码快照和仓库内官方文档作为实现分析依据，并补充了官网、GitHub 仓库、Roadmap、renderer/client setup、ecosystem renderers、CrewAI/CopilotKit 集成文档的网络检索。未做 exhaustive issue triage、完整 release diff 或第三方 benchmark；所有关键实现判断仍绑定到源码、规范、测试或样例证据，无法从源码直接证明的内容在文档中标记为推断。
