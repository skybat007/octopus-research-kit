# Research Brief

## 目标

调研 A2UI 的协议定位、核心架构、renderer 实现、SDK 生成链路、扩展点和工程可借鉴点，为后续评估是否在 agent-driven UI、A2A 客户端、动态表单或多端 UI 生成场景中采用/借鉴 A2UI 提供源码级依据。

## 固定版本

| 项目 | 内容 |
|---|---|
| 目标仓库 | `google/A2UI` |
| 代码来源 | `https://github.com/google/A2UI.git` |
| 调研快照 | `main @ e05dd9699dea21ba832059acb680f71022dd5a77` |
| 最新提交时间 | 2026-05-27 14:12:24 -0700 |
| 调研日期 | 2026-05-28 |
| 核心版本 | v0.9 protocol；packages 标注到 `0.10.0`；v0.10 规范目录仍标注 under development |

## 调研问题

- A2UI 解决的核心问题是什么，和直接让 agent 输出 HTML/JS 或纯文本相比有什么边界？
- v0.9 协议如何描述界面、数据、事件和生命周期？
- renderer 如何把 JSON 消息转换成 React/native UI，状态更新和数据绑定在哪里实现？
- Catalog 在安全、能力声明、设计系统映射中的作用是什么？
- Python SDK 如何降低 LLM 输出无效 UI JSON 的概率？
- A2A/AG UI/transport 如何与 A2UI 协议分层？
- 生产采纳时需要补哪些能力、测试和安全边界？

## 交付物

本目录包含：

- 源码清单：`references/source-inventory.json`
- 调研说明：`research-brief.md`、`external-research.md`、`research-questions.md`
- 源码地图与架构：`source-map.md`、`architecture.md`、`runtime-flows.md`
- 设计和扩展：`key-abstractions.md`、`extension-points.md`、`design-philosophy.md`
- 对比和采纳：`comparison.md`、`adoption-notes.md`
- 证据与复核：`evidence-index.md`、`research-review.md`
- 可视化入口：`dashboard.html`、`docs.html`、`visual/architecture.html`

## 调研方法

1. 先阅读 README、概念文档和 v0.9 specification，建立协议模型。
2. 用 `source-inventory.json` 统计仓库结构，定位 renderer、SDK、samples、tools 和 tests。
3. 从 `renderers/web_core` 追踪消息处理、surface/component/data model、binding 和 action 流。
4. 从 `renderers/react` 追踪具体 UI 渲染适配。
5. 从 `agent_sdks/python` 追踪 schema manager、validator、parser、ADK toolset 和 A2A part converter。
6. 用 tests、samples、conformance suites 验证实现声明，而不是只依赖说明文档。

## 非目标

- 不评估 UI 视觉质量和组件库美观度。
- 不做性能 benchmark。
- 不覆盖仓库外竞品的最新版本和社区讨论。
- 不尝试修改 A2UI 源码或运行完整测试矩阵。
