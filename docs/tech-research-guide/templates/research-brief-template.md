# 调研简报

Status: draft
Owner:
Last Updated: YYYY-MM-DD

## 1. 研究对象

| 项 | 内容 |
|---|---|
| 名称 |  |
| 代码来源 |  |
| 本地路径 |  |
| 版本/tag/commit |  |
| 官方文档 |  |
| 外部资料范围 | 官网/官方文档/Release Notes/Issue/PR/第三方文章/跳过原因 |
| 调研日期 |  |

## 2. 背景和动机

## 3. 研究目标

- OBJ-001:

## 4. 核心研究问题

| 编号 | 问题 | 优先级 | 预期输出 |
|---|---|---|---|
| Q-001 |  | P0 |  |

## 5. 范围

### 5.1 本次研究范围

- 

### 5.2 不做范围

- 

### 5.3 待确认

- 

## 6. 适用场景

- 

## 7. 后续如何用于学习借鉴

- 

## 8. 预期交付物

| 交付物 | 文件 | 说明 |
|---|---|---|
| 外部资料调研 | external-research.md | 官方资料、协作资料、社区资料和待验证观点 |
| 研究问题 | research-questions.md | 将外部观点和用户目标转成源码验证问题 |
| 源码地图 | source-map.md |  |
| Dashboard | dashboard.html, docs.html | 浏览器阅读入口和 UTF-8 文档阅读器 |
| 结构化源码清单 | references/source-inventory.json | 有本地源码时生成，用于辅助定位入口、测试、示例、构建和配置 |
| 技术架构 | architecture.md |  |
| 可视化架构图 | visual/architecture.html, visual/architecture.visual.js | 当 Markdown 架构图不直观时生成 |
| 可视化证据解释 | visual/evidence.html, visual/evidence.visual.js | 为架构图节点提供可点击证据解释、源码/文档片段和证据回溯 |
| 核心抽象 | key-abstractions.md |  |
| 扩展点 | extension-points.md |  |
| 主流程追踪 | runtime-flows.md |  |
| 设计思想 | design-philosophy.md |  |
| 横向对比 | comparison.md | 可选 |
| 学习借鉴 | adoption-notes.md |  |
| 证据索引 | evidence-index.md |  |
| 调研审查 | research-review.md | 复杂调研建议 |

## 9. 验收标准

| 编号 | 标准 | 验收方式 |
|---|---|---|
| AC-001 | 关键结论均有官方资料、源码、测试、协作资料或社区资料证据 | 检查 evidence-index.md |
| AC-002 | 至少追踪一条主运行链路 | 检查 runtime-flows.md |
| AC-003 | 外部资料中的关键观点已转成研究问题并记录验证状态 | 检查 external-research.md、research-questions.md |
| AC-004 | 复杂架构已补充可视化图，或说明无需生成 | 检查 visual/architecture.html、visual/architecture.visual.js、research-review.md |
| AC-005 | 借鉴建议区分可直接学习、需结合语境后借鉴和不建议照搬 | 检查 adoption-notes.md |
| AC-006 | 本地源码已生成结构化清单，或说明无法生成原因 | 检查 references/source-inventory.json、research-review.md |
| AC-007 | 已生成统一阅读入口 | 检查 dashboard.html、docs.html |
