# Understand Anything 技术调研

Status: draft
Owner: cheng / Codex
Last Updated: 2026-05-28

## 调研摘要

Understand Anything 是一个面向代码库、知识库和文档的理解工具。它把项目扫描、静态结构抽取、LLM 语义分析、知识图谱持久化和 React Dashboard 展示组合成一条可复用的“代码理解流水线”。本轮调研重点不是评价图谱效果，而是理解它如何把“读源码”变成结构化资产：`knowledge-graph.json` 是核心契约，`/understand` 负责生产，Dashboard 和 `/understand-chat`、`/understand-diff`、`/understand-explain` 等技能负责消费。[UA-001][UA-005][UA-013]

本轮调研固定在本地快照 `Understand-Anything`，branch `main`，commit `26edf61856fa476e466bda1814819a266a293c47`。远程 tag 查询显示截至 2026-05-28 可见最新 tag 为 `v2.7.3`，但本地插件包和平台 manifest 标记为 `2.7.5`，因此本文以本地快照为准。[UA-002][EXT-UA-003]

## 文件导航

| 文件 | 说明 |
|---|---|
| research-brief.md | 调研目标、范围、问题和验收标准 |
| external-research.md | 官方资料、外部资料和需要源码验证的观点 |
| research-questions.md | 从外部资料转化出的源码验证问题 |
| source-map.md | 仓库结构、入口、模块和阅读顺序 |
| dashboard.html | 浏览器阅读入口，导航 Markdown、可视化图和辅助材料 |
| docs.html | UTF-8 文档阅读器，避免浏览器直接打开 Markdown 乱码 |
| architecture.md | 总体架构、模块职责和依赖方向 |
| visual/architecture.html | HTML 可视化架构图 |
| visual/architecture.visual.js | 可视化图数据，承接 Markdown 结论和证据链接 |
| visual/evidence.html | 可点击证据解释页 |
| visual/evidence.visual.js | 从 evidence-index.md 和 architecture.visual.js 抽取的证据解释数据 |
| runtime-flows.md | `/understand`、Dashboard、辅助技能、Domain/Knowledge 流程 |
| key-abstractions.md | 核心类型、Registry、GraphBuilder、Schema、上下文构造器 |
| extension-points.md | Skill、Agent、Parser Registry、Language/Framework Registry、平台安装 |
| design-philosophy.md | 设计思想和取舍 |
| comparison.md | 与相邻工具的对比视角 |
| adoption-notes.md | 学习借鉴笔记 |
| evidence-index.md | 证据索引 |
| research-review.md | 调研质量审查 |

## 当前结论

- Understand Anything 的核心设计是“确定性结构事实 + LLM 语义补全”的混合流水线：Tree-sitter、importMap、batching 和 fingerprint 负责可复现结构，LLM Agent 负责摘要、分层、导览、领域和知识关系。[UA-001][UA-007][UA-008][INF-001]
- `KnowledgeGraph` 是系统边界：生产端、校验端、Dashboard、Chat、Diff、Explain、Onboard、Domain 和 Knowledge 模式都围绕这个 JSON 契约协作。[UA-010][UA-013][UA-015][INF-002]
- 它的工程取舍很鲜明：用文件系统中间产物协调多 Agent，并把昂贵 LLM 调用放在 batch 和增量判断之后；同时用 schema/merge/reviewer 降低 LLM 输出不稳定性。[UA-005][UA-008][UA-011]
- Dashboard 不是简单展示 JSON，而是一个受 token 保护的数据服务 + React Flow 图形工作台；源码预览必须通过 graph-derived allowlist，避免任意文件读取。[UA-013][UA-014]
- 最值得借鉴的是“把分析产物产品化”：图谱可提交给团队、可由后续技能消费、可用增量机制保持新鲜，而不是一次性阅读报告。[UA-001][UA-015][INF-003]

## 待确认

- 尚未实际运行 `/understand` 分析一个大型项目，本轮以源码和文档静态分析为主。
- 未完整审查所有语言 extractor 的准确性和测试覆盖。
- 未验证官方主页 Demo 与本地 Dashboard 当前实现是否完全一致。
- 远程最新 tag 与本地版本号存在差异，发布流程需要单独确认。
