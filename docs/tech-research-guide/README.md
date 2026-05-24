# Tech Research Guide

本目录定义开源技术调研的工作方式和模板。

## 入口

- [TECH_RESEARCH_GUIDE.md](./TECH_RESEARCH_GUIDE.md)：完整调研规范
- [templates/](./templates/)：每次调研可复制的文档模板

## 使用方式

1. 为调研对象创建 `docs/research/<framework-name>/`。
2. 从 `templates/` 复制需要的模板。
3. 先完成 `research-brief.md`。
4. 再按源码地图、架构、流程、设计思想、重构启发的顺序推进。
5. 将关键结论同步记录到 `evidence-index.md`。

## 与 Spec Coding 的关系

`tech-research-guide` 用于理解技术和沉淀研究结论。  
`spec-coding-guide` 用于复杂开发前的需求、设计、任务和验收可追溯。
