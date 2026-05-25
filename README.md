# Octopus Tech Research Workspace

这个项目用于沉淀技术调研方法、开源框架源码分析过程和可复用的技术文档资产。

它的目标不是简单整理资料，而是帮助你围绕一个开源技术建立可追溯的理解：

- 它解决什么问题
- 它的架构边界是什么
- 它的核心抽象如何组织
- 它的关键运行流程如何在源码中体现
- 它的设计思想、取舍和扩展机制是什么
- 哪些模式值得学习、借鉴或后续单独评估

## 核心工作方式

本项目采用 `Research Spec + Research Skill` 的组合。

`Research Spec` 用来定义某一次具体调研：

- 调研对象、版本、代码来源
- 调研目标、范围和不做范围
- 要回答的关键问题
- 需要产出的技术文档
- 外部资料、源码验证问题和关键结论证据

`Research Skill` 用来固化调研执行方法：

- 如何扫描一个陌生开源仓库
- 如何收集官方资料、社区资料并转成源码验证问题
- 如何定位入口、核心模块、关键抽象和主流程
- 如何从源码证据推导架构结论
- 如何在 Markdown 不友好时补充 HTML 可视化架构图
- 如何产出统一格式的技术架构、设计思想和学习借鉴文档

## 目录结构

```text
.
├── AGENTS.md
├── README.md
├── QUICKSTART.md
├── docs/
│   ├── README.md
│   ├── tech-research-guide/
│   │   ├── README.md
│   │   ├── TECH_RESEARCH_GUIDE.md
│   │   └── templates/
│   ├── memory/
│   └── specs-archive/
├── research/
│   └── example-framework/
└── skills/
    └── open-source-tech-research/
```

## 关键入口

- [技术调研规范](docs/tech-research-guide/TECH_RESEARCH_GUIDE.md)
- [技术调研快速开始](docs/tech-research-guide/AI_TECH_RESEARCH_QUICKSTART.md)
- [技术调研模板](docs/tech-research-guide/templates/)
- [示例调研 Spec](research/example-framework/README.md)
- [开源技术调研 Skill](skills/open-source-tech-research/SKILL.md)

## 使用范围

本仓库只作为技术调研工作台使用：

- 调研一个开源框架
- 阅读陌生源码
- 产出技术架构文档
- 提炼设计思想
- 沉淀可复用的技术认知和设计模式

## 推荐流程

1. 在 `research/<framework-name>/` 新建调研目录。
2. 复制 `docs/tech-research-guide/templates/` 中的模板。
3. 先完成 `research-brief.md`，明确研究目标和边界。
4. 生成 `external-research.md` 和 `research-questions.md`，用外部资料建立问题清单，再进入源码验证。
5. 使用 `open-source-tech-research` skill 推进源码扫描、核心抽象、架构拆解、主流程追踪、扩展点和设计思想提炼。
6. 将每个关键结论记录到 `evidence-index.md`，保留官方资料、源码、测试、协作资料或社区资料证据。
7. 在 `adoption-notes.md` 中沉淀值得学习、需要结合语境后再借鉴和不适合照搬的设计。
