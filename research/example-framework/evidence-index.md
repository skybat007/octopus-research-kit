# 证据索引

本文件是示例结构，用于说明可视化图中的 `TPL-*` 证据编号应该能回到证据索引。真实调研时请替换为目标框架的官方资料、源码、测试、配置、示例或推断链路。

## 1. 模板证据

| 结论编号 | 结论 | 证据类型 | 位置 | 置信度 | 备注 |
|---|---|---|---|---|---|
| <a id="TPL-001"></a>TPL-001 | 调研应先定义目标、范围、问题和交付物 | repository doc fact | `research-brief.md` | 高 | 模板约束 |
| <a id="TPL-002"></a>TPL-002 | 外部资料调研应区分官方资料、协作资料和社区资料 | repository doc fact | `external-research.md` | 高 | 模板约束 |
| <a id="TPL-003"></a>TPL-003 | 外部观点和用户目标应转成可源码验证的问题 | repository doc fact | `research-questions.md` | 高 | 模板约束 |
| <a id="TPL-004"></a>TPL-004 | 源码地图用于定位入口、模块边界和阅读顺序 | repository doc fact | `source-map.md`, `references/source-inventory.json` | 高 | 模板约束 |
| <a id="TPL-005"></a>TPL-005 | 架构和运行流程应沉淀模块关系、依赖方向和主链路 | repository doc fact | `architecture.md`, `runtime-flows.md` | 高 | 模板约束 |
| <a id="TPL-006"></a>TPL-006 | 核心抽象和扩展点应单独记录 | repository doc fact | `key-abstractions.md`, `extension-points.md` | 高 | 模板约束 |
| <a id="TPL-007"></a>TPL-007 | 关键结论应通过证据索引和调研审查保持可追溯 | repository doc fact | `evidence-index.md`, `research-review.md` | 高 | 模板约束 |
