# 关键抽象

## 1. `KnowledgeGraph`

核心中间表示，字段包括：

- `version`
- `kind?: "codebase" | "knowledge"`
- `project`
- `nodes`
- `edges`
- `layers`
- `tour`

它既承载代码图，也承载领域图和知识库图，是生产端与消费端之间的稳定契约。[UA-010]

## 2. `GraphNode` / `GraphEdge`

`GraphNode` 把代码、非代码、领域和知识库概念统一成节点，最小字段包含 `id`、`type`、`name`、`summary`、`tags`、`complexity`。`GraphEdge` 用 35 类边表达 imports、contains、calls、reads/writes、routes、domain flow、knowledge citation 等关系。[UA-010]

这个抽象的价值在于：Dashboard、Chat、Diff 和 Explain 不需要理解每种源码语言，只需要理解图谱节点和边。

## 3. `TreeSitterPlugin`

`TreeSitterPlugin` 是确定性结构抽取的核心。它通过语言配置加载 `web-tree-sitter` WASM grammar，并注册 language extractor；随后提供：

- `analyzeFile`
- `resolveImports`
- `extractCallGraph`

它对 grammar 缺失采取 graceful degradation，保持 pipeline 可继续运行。[UA-009]

## 4. `PluginRegistry`

`PluginRegistry` 把文件扩展名和语言配置映射到 `AnalyzerPlugin`，为脚本提供统一分发面：

- 按语言或文件找 plugin。
- 分发 `analyzeFile`。
- 分发 `resolveImports`。
- 分发 `extractCallGraph`。

这让 Tree-sitter 和非代码 parser 可以共存，而上层脚本不需要知道具体 parser 类型。[UA-009]

## 5. `GraphBuilder`

`GraphBuilder` 将结构分析转换成图谱：

- 文件变成 `file` 节点。
- 函数/类变成子节点，并通过 `contains` 边连接。
- import/call 变成 `imports`/`calls` 边。
- Docker、SQL、OpenAPI、GraphQL、Terraform、CI 等非代码结构变成 service/table/endpoint/pipeline/schema/resource 等节点。

它是“结构事实 -> KnowledgeGraph”之间的重要桥梁。[UA-010]

## 6. `validateGraph` / `autoFixGraph`

schema 层承认 LLM 输出会出现别名、大小写、缺字段、方向不规范等问题，所以提供：

- node/edge/complexity/direction aliases。
- sanitize。
- auto-fix。
- validation result 和 issue 列表。

这比单纯 schema reject 更适合 LLM pipeline。[UA-010]

## 7. `FingerprintStore`

Fingerprint 把文件内容和结构签名分开：

- 内容 hash 相同：`NONE`
- 内容不同但函数/类/import/export 等结构签名相同：`COSMETIC`
- 结构签名变化、新增、删除：`STRUCTURAL`

这是 auto-update 节省 token 的基础。[UA-012]

## 8. `ChatContext` / `ExplainContext`

辅助技能把图谱转成 LLM prompt 上下文：

- Chat：搜索相关节点，扩展 1-hop，收集相关 layers。
- Explain：定位目标文件或函数，收集 child、connected nodes、edges、layer。
- Onboard：从 graph 生成 onboarding 文档。

它们体现了一个关键思路：分析产物不是只给人看，还能继续喂给 LLM 形成二次能力。[UA-015]

