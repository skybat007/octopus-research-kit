# 示例框架技术调研

Status: example
Owner:
Last Updated: YYYY-MM-DD

本目录是一次开源框架技术调研的示例结构。开始真实调研时，可以复制本目录或直接使用 `docs/tech-research-guide/templates/` 下的模板。

## 文件导航

| 文件 | 说明 |
|---|---|
| [research-brief.md](research-brief.md) | 调研目标、范围、问题和交付物 |
| [source-map.md](source-map.md) | 仓库结构、模块边界、入口和阅读顺序 |
| [architecture.md](architecture.md) | 技术架构、核心抽象、依赖方向和扩展机制 |
| [visual-architecture.html](visual-architecture.html) | HTML 可视化结构图，适合表达 Markdown 图不清晰的分层关系 |
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
3. 再从源码地图开始推进。
4. 所有关键结论同步写入 `evidence-index.md`。
