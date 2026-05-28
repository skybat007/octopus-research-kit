# 研究简报

## 研究对象

| 项 | 内容 |
|---|---|
| 项目 | Understand Anything |
| 项目标识 | `Understand-Anything` |
| 远程仓库 | `https://github.com/Lum1104/Understand-Anything.git` |
| branch/tag/commit | branch `main`, commit `26edf61856fa476e466bda1814819a266a293c47` |
| 本地插件版本 | `@understand-anything/skill` version `2.7.5` |
| 调研日期 | 2026-05-28 |

## 调研目标

理解 Understand Anything 如何把一个代码库或知识库转成可交互知识图谱，并沉淀以下技术认知：

- `/understand` 主流程如何组织扫描、批处理、Agent 分析、合并、校验、保存和 Dashboard 启动。
- core 包如何定义 `KnowledgeGraph`、节点/边类型、schema 修复、Tree-sitter 分析、搜索和增量更新。
- Dashboard 如何消费图谱、保护源码读取、支持结构图、领域图、知识图和 diff 叠加。
- Skill/Agent/Parser/平台安装这些扩展点如何协作。
- 哪些设计可以借鉴到后续技术调研或代码理解工具中。

## 范围

- 仓库整体结构、monorepo 包边界和安装方式。
- `/understand`、`/understand-dashboard`、`/understand-chat`、`/understand-diff`、`/understand-explain`、`/understand-onboard`、`/understand-domain`、`/understand-knowledge`。
- `packages/core` 的类型、schema、Tree-sitter plugin、PluginRegistry、GraphBuilder、fingerprint/staleness、搜索。
- `packages/dashboard` 的图谱加载、store、token gate、受限源码读取。
- Agent prompt 文件的职责边界。

## 不做范围

- 不运行真实 LLM Agent 生成目标项目图谱。
- 不评估 Dashboard 视觉设计细节和性能上限。
- 不逐行审查每个语言 extractor。
- 不输出重构方案。

## 核心研究问题

1. 它如何把官方声称的“多 Agent 知识图谱流水线”落实为可运行流程？
2. 它如何区分确定性结构事实和 LLM 语义推断？
3. `KnowledgeGraph` 为什么能成为生产端与消费端之间的稳定契约？
4. 增量更新如何避免每次都重新消耗 LLM token？
5. Dashboard 如何避免因为展示源码而暴露本地任意文件？
6. Skill、Agent、Parser Registry 和平台安装分别属于哪类扩展点？

## 交付物

- 技术调研 Markdown 文档。
- HTML 可视化架构图和证据解释页。
- 证据索引，覆盖官方资料、仓库文档、源码事实和推断链路。

