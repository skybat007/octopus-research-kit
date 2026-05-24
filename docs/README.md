# Docs Guide

本目录用于组织技术调研规范、具体调研文档、开发类 spec 规范和历史材料。

## 目录说明

```text
docs/
  README.md
  tech-research-guide/
    README.md
    TECH_RESEARCH_GUIDE.md
    templates/
  research/
    <framework-name>/
      README.md
      research-brief.md
      source-map.md
      architecture.md
      key-abstractions.md
      runtime-flows.md
      design-philosophy.md
      refactor-insights.md
      evidence-index.md
      references/
  spec-coding-guide/
  specs/
  specs-archive/
```

## 技术调研文档

技术调研使用：

- [tech-research-guide/TECH_RESEARCH_GUIDE.md](./tech-research-guide/TECH_RESEARCH_GUIDE.md)
- [tech-research-guide/templates/](./tech-research-guide/templates/)
- [research/example-framework/](./research/example-framework/)

适用场景：

- 分析开源框架源码
- 梳理技术架构
- 追踪核心运行流程
- 总结设计思想
- 沉淀对其他系统重构有帮助的模式

## 开发类 Spec 文档

开发类复杂任务继续使用：

- [spec-coding-guide/SPEC_CODING_GUIDE.md](./spec-coding-guide/SPEC_CODING_GUIDE.md)
- [spec-coding-guide/templates/](./spec-coding-guide/templates/)
- [specs/](./specs/)

`spec-coding-guide` 适合进入 coding 前确认需求、设计、任务和验收关系。它和技术调研规范不是替代关系：

- `tech-research-guide` 解决“如何理解一个技术”
- `spec-coding-guide` 解决“如何把一个需求可靠实现”

## 旧材料说明

当前仓库中部分 `docs/specs/` 内容来自其他项目迁移，可作为参考材料保留。新的开源技术调研不要继续写入旧业务 spec 目录，统一放到：

```text
docs/research/<framework-name>/
```
