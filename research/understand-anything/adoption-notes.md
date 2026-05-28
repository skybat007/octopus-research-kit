# 学习借鉴笔记

## 1. 可以直接学习的设计

- **知识源产物化**：把分析结果保存为 `knowledge-graph.json`，让 Dashboard、Chat、Explain、Diff 复用，而不是每次重新分析。
- **确定性事实先行**：先用扫描、parser、importMap、batch 压缩上下文，再让 LLM 处理语义。
- **LLM 输出吸收层**：alias、sanitize、merge、review、auto-fix 缓冲 LLM 不稳定性。
- **证据/图谱/展示分层**：图谱作为契约，Dashboard 只是消费端。
- **受控本地源码读取**：token + path allowlist + 文件大小/二进制限制。

## 2. 需要改造后借鉴的设计

- **Skill 文件编排流程**：适合 AI coding 平台，但如果用于普通后端服务，建议改成显式任务编排器或队列。
- **intermediate 文件协调多 Agent**：简单、可恢复，但要严控文件命名、并发写入和清理策略。
- **Louvain batching**：适合基于 import graph 的代码库，对弱依赖项目或文档库需要替换分组策略。
- **Graph schema**：节点/边很通用，但如果用于企业系统，需要补权限、服务边界、部署拓扑、数据实体和接口协议字段。

## 3. 不建议直接照搬

- 不建议把所有分析逻辑都写进长 Skill Markdown；大型团队最好把 orchestration 下沉到可测试代码。
- 不建议依赖 LLM 生成关键边而不做后续校验；至少要保留 import/call/schema 等确定性边。
- 不建议把 Dashboard 作为唯一阅读入口；Markdown/HTML 调研文档仍适合沉淀稳定结论。

## 4. 适合本技术调研项目借鉴的点

- 可把 `evidence-index.md` 看作轻量版 KnowledgeGraph：统一承接结论、证据、来源和可信度。
- 可把 HTML 架构图当作 Dashboard 的简化版：Markdown 是知识源，visual JS 是结构化图数据，HTML 只是展示。
- 可在后续框架调研中加入“确定性源码事实”和“LLM/外部资料推断”分层，避免概念图和事实混在一起。

## 5. 后续验证建议

- 实际运行 `/understand` 分析一个中型项目，比较图谱中 imports/calls/layers 的准确率。
- 对一个只改内部实现、不改导出的文件测试 fingerprint 是否判为 COSMETIC。
- 对 Dashboard 尝试读取非图谱路径，验证 allowlist 拦截。
- 对非 TypeScript 项目验证语言 registry 和 extractor 覆盖质量。

