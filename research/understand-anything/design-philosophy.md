# 设计思想

## 1. 确定性事实先行，LLM 只补语义

Understand Anything 没有让 LLM 从零阅读整个仓库，而是先用确定性脚本建立文件清单、importMap、结构信息、batch 和 neighborMap，再把压缩后的结构事实交给 Agent。这样做的收益是：

- 结构边更可复现。
- Agent prompt 更小。
- 跨 batch 关系可以由 importMap/neighborMap 补强。
- 增量更新可以先用 fingerprint 判断是否值得调用 LLM。

代价是 pipeline 更长，中间文件和命名契约更多。[INF-001][INF-004]

## 2. 图谱是中间表示，而不是展示格式

`KnowledgeGraph` 同时被 Dashboard、Chat、Diff、Explain、Onboard、Domain 和 Knowledge 模式消费。它更像编译器里的 IR：不同输入被规整到统一结构，不同输出再从同一结构派生。[INF-002]

这个设计比直接生成 Markdown 报告更有复用价值。报告是终点，图谱是后续能力的起点。

## 3. LLM 输出要经过吸收层

schema alias、merge script、reviewer、autoFixGraph 共同说明作者预期 LLM 会犯格式错误、方向错误、重复节点、dangling edge 等问题。系统不把 Agent 输出当最终事实，而是通过合并和校验层吸收不稳定性。[UA-010][UA-011]

这是做 AI 工具很值得借鉴的取舍：LLM 可以负责语义，但结构契约必须由程序兜底。

## 4. 成本控制是架构问题

`compute-batches`、file-analyzer 并发上限、fingerprint、auto-update prompt 都在处理同一个问题：大型项目不能每次全量丢给 LLM。它把成本控制放进架构主线，而不是事后优化。[UA-008][UA-012]

## 5. 本地文件访问必须产品化

Dashboard 需要展示源码，但它不是直接开放静态目录，而是通过 token、路径归一化、graph allowlist、文件大小和二进制检测建立边界。[UA-014]

这说明“本地工具”也需要明确安全模型，尤其是当它在浏览器里打开本地服务时。

## 6. 多平台的核心是目录协议

安装脚本把多平台差异折叠成 skills 目录链接方式。平台可以不同，但 Skill 文件、Agent prompt 和插件源码保持同源。[UA-017]

这适合个人或小团队的 AI coding workflow：不是为每个平台重写插件，而是维护一套 portable skill package。

