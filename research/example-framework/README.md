# 示例框架技术调研

Status: example
Owner:
Last Updated: YYYY-MM-DD

本目录是一次开源框架技术调研的示例结构。开始真实调研时，可以复制本目录或直接使用 `docs/tech-research-guide/templates/` 下的模板。

## 文件导航

| 文件 | 说明 |
|---|---|
| [research-brief.md](research-brief.md) | 调研目标、范围、问题和交付物 |
| [external-research.md](external-research.md) | 官方资料、协作资料、社区资料和待验证观点 |
| [research-questions.md](research-questions.md) | 由外部资料和用户目标生成的源码验证问题 |
| [source-map.md](source-map.md) | 仓库结构、模块边界、入口和阅读顺序 |
| [dashboard.html](dashboard.html) | 浏览器阅读入口，导航 Markdown、可视化图和辅助材料 |
| [docs.html](docs.html) | UTF-8 文档阅读器，避免浏览器直接打开 Markdown 乱码 |
| [architecture.md](architecture.md) | 技术架构、核心抽象、依赖方向和扩展机制 |
| [visual/architecture.html](visual/architecture.html) | HTML 可视化结构图，适合表达 Markdown 图不清晰的分层关系 |
| [visual/architecture.visual.js](visual/architecture.visual.js) | 可视化图数据，承接 Markdown 结论和证据链接 |
| [visual/evidence.html](visual/evidence.html) | 可点击证据解释页，展示架构语境和源码/文档片段 |
| [visual/evidence.visual.js](visual/evidence.visual.js) | 从 evidence-index.md 和 architecture.visual.js 抽取的证据解释数据 |
| [key-abstractions.md](key-abstractions.md) | 核心抽象、接口、数据结构和协作关系 |
| [extension-points.md](extension-points.md) | 插件、Hook、Registry、Provider 等扩展机制 |
| [runtime-flows.md](runtime-flows.md) | 主流程追踪和关键状态变化 |
| [design-philosophy.md](design-philosophy.md) | 设计思想、取舍和非显而易见的设计 |
| [comparison.md](comparison.md) | 与同类框架或历史版本的横向对比 |
| [adoption-notes.md](adoption-notes.md) | 学习借鉴、适用前提和误读风险说明 |
| [evidence-index.md](evidence-index.md) | 关键结论的证据索引 |
| [research-review.md](research-review.md) | 调研质量门禁和审查记录 |

## 使用建议

1. 将 `example-framework` 改成真实框架名。
2. 先补全 `research-brief.md`。
3. 有本地源码时先生成 `references/source-inventory.json`。
4. 再从源码地图开始推进。
5. 所有关键结论同步写入 `evidence-index.md`。
