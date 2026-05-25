# Docs Guide

本目录用于组织技术调研规范、模板、参考材料和历史归档。具体调研产物放在仓库根目录的 `research/` 下。

## 目录说明

```text
docs/
  README.md
  tech-research-guide/
    README.md
    TECH_RESEARCH_GUIDE.md
    templates/
  memory/
  specs-archive/

research/
  <framework-name>/
    README.md
    research-brief.md
    external-research.md
    research-questions.md
    source-map.md
    architecture.md
    key-abstractions.md
    extension-points.md
    runtime-flows.md
    design-philosophy.md
    comparison.md
    adoption-notes.md
    evidence-index.md
    research-review.md
    references/
```

## 技术调研文档

技术调研使用：

- [tech-research-guide/TECH_RESEARCH_GUIDE.md](./tech-research-guide/TECH_RESEARCH_GUIDE.md)
- [tech-research-guide/AI_TECH_RESEARCH_QUICKSTART.md](./tech-research-guide/AI_TECH_RESEARCH_QUICKSTART.md)
- [tech-research-guide/templates/](./tech-research-guide/templates/)
- [research/example-framework/](../research/example-framework/)

适用场景：

- 分析开源框架源码
- 收集官方文档、Release Notes、Issue/PR 和高质量社区资料
- 梳理技术架构
- 追踪核心运行流程
- 总结设计思想
- 沉淀可学习、可借鉴和不宜照搬的设计模式

## 参考与归档

- `docs/memory/`：预留给项目级长期记忆、约定和调研上下文沉淀。
- `docs/specs-archive/`：存放历史残留的旧业务 spec 说明，仅作历史参考。

新的开源技术调研统一放到：

```text
research/<framework-name>/
```
