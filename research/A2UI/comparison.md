# Comparison

## 比较边界

本轮没有联网检索竞品最新资料，因此外部对比只做架构层面的有限比较。更可靠的比较来自仓库内部：v0.8.1 到 v0.9 的 evolution guide、A2A/AG UI binding 文档、React sample 和 renderer implementation。

## A2UI vs 直接生成 HTML/JS

| 维度 | A2UI | 直接 HTML/JS |
|---|---|---|
| 安全边界 | agent 输出 JSON；host 只执行本地 catalog implementation | agent 可能生成脚本、样式和 DOM 行为，需要额外 sandbox |
| 可验证性 | JSON Schema + validator + catalog | HTML/JS 校验更难，行为空间更大 |
| 原生体验 | renderer 映射到 React/Flutter/native component | 通常偏 web view 或 iframe |
| 多端复用 | 同一协议可由多个 renderer 实现 | HTML/JS 对非 web 端复用较弱 |
| 表达能力 | 受 catalog 限制 | 表达能力更强但风险更大 |

结论：A2UI 更适合安全可控、设计系统强约束的 agent UI；不适合让 agent 自由创作任意 UI/动画/前端逻辑。

## A2UI v0.8.1 vs v0.9

| 维度 | v0.8.1 | v0.9 |
|---|---|---|
| 生成策略 | structured-output first 色彩更强 | prompt-first，schema/post-validation 更重要 |
| 消息 | `beginRendering` 等旧消息 | `createSurface`、`updateComponents`、`updateDataModel`、`deleteSurface` |
| Schema 组织 | 较集中 | common types、server-to-client、catalogs/basic 模块化 |
| Component discriminator | 旧字段形式 | flattened `component` 属性 |
| Root | 旧约定 | `root` component id 规则明确 |
| Catalog | 旧集成 | `catalogId` 更明确，支持 catalog schema 组合 |

结论：v0.9 是当前代码和文档的主要研究面，生产评估应以 v0.9 为基础，同时关注 v0.10 演进。

## A2UI vs A2A/AG UI

仓库文档把 A2A/AG UI 视为 transport/binding 层，而 A2UI 是 UI payload 协议。也就是说：

- A2A 可以承载 A2UI DataPart。
- AG UI 可以作为另一种事件/消息承载方式。
- A2UI 关注 surface、component、data model、catalog 和 renderer。

结论：A2UI 不替代 A2A，它补足“消息里如何表达可渲染 UI”的层次。

## Basic Catalog vs Custom Catalog

| 维度 | Basic Catalog | Custom Catalog |
|---|---|---|
| 目标 | 通用、可移植、快速开始 | 业务/设计系统落地 |
| 组件 | Text、Image、Row、Column、Card、Button、TextField 等通用组件 | 订单、审批、报表、图表、业务表单等 |
| 安全策略 | 通用限制 | 可加入业务 action、URL、字段策略 |
| LLM 提示 | 通用 examples | 可加入领域 examples |
| 生产适配 | 可作为 fallback | 推荐主路径 |

结论：Basic Catalog 适合学习和 demo；生产价值更大的是用同一机制定义自有 catalog。

## React renderer vs web_core

| 维度 | React renderer | web_core |
|---|---|---|
| 职责 | 渲染 React component，提供 Basic Catalog React implementation | 消息处理、状态模型、data binding、action、catalog runtime |
| 复用价值 | React 项目直接使用 | 多 web renderer 或自研 renderer 都可借鉴 |
| 复杂度 | 相对薄 | 核心复杂度集中处 |

结论：学习 A2UI 不应只看 React components；真正的架构重点在 `web_core`。
