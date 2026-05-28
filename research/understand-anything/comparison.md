# 对比视角

本轮未做完整横向源码对比，只给出后续比较 Understand Anything 时应关注的维度。

## 1. 与一次性源码总结工具

Understand Anything 的优势不是“能总结代码”，而是把总结沉淀成可复用的 `KnowledgeGraph`。一次性总结通常产出 Markdown，后续问答和 diff 要重新读上下文；Understand Anything 则让 Chat、Explain、Onboard、Dashboard 共享同一个图谱。[INF-002]

## 2. 与 IDE 索引 / LSP

LSP 更擅长精确符号、跳转、诊断；Understand Anything 更偏架构学习和语义导览。它牺牲了一部分 IDE 级精度，换取跨语言/非代码/领域/知识库的统一图谱表达。[UA-010][UA-016]

## 3. 与 Mermaid/静态架构文档

静态架构图表达最终结论，Understand Anything 的图谱表达“可查询的中间状态”。Dashboard 可以搜索、筛选、点击源码、看 diff、切换 domain/knowledge view；Markdown 图更适合汇报，图谱更适合持续探索。[UA-013]

## 4. 与 OpenClaw / Hermes Agent / Claude Code 调研对象

| 对象 | 更像什么 | Understand Anything 的差异 |
|---|---|---|
| OpenClaw | Agent Gateway / 控制面 | Understand Anything 不运行长期 Agent 网关，核心是分析产物和 Dashboard |
| Hermes Agent | Agent runtime / message gateway | Understand Anything 的 Agent 只是离线分析阶段，生产结果是图谱 |
| Claude Code | Coding agent CLI/runtime | Understand Anything 依赖这类平台执行 Skill/Agent，但自身是代码理解插件 |

## 5. 后续对比建议

- Sourcegraph Cody / Code Search：对比索引、搜索和问答。
- CodeSee / OpenGrok / Understand by SciTools：对比代码可视化和静态分析。
- Doxygen / TypeDoc / JSDoc：对比文档生成与图谱中间表示。
- LangGraph / Dify：对比 Agent workflow 与图谱生产 pipeline。

