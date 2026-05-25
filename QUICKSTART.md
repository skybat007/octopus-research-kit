# Quickstart

本指南帮助你快速开始一次开源框架技术调研。

## 1. 选择调研对象

先明确你要研究的对象，例如：

```text
我要研究 LangGraph 的状态图执行模型
我要研究 Spring Framework 的 Bean 生命周期
我要研究 Vue 的响应式系统
我要研究 Netty 的 Reactor 线程模型
```

尽量同时明确：

- 代码来源：本地路径或 GitHub 仓库
- 版本：tag、commit、release 或当前分支
- 目标：学习架构、理解设计思想、准备重构参考，或定位某条运行流程

## 2. 创建调研目录

在根目录 `research/` 下为每个框架建立独立目录：

```text
research/<framework-name>/
```

建议至少包含：

```text
README.md
research-brief.md
source-map.md
architecture.md
key-abstractions.md
extension-points.md
runtime-flows.md
design-philosophy.md
comparison.md
adoption-notes.md
refactor-opportunities.md
refactor-insights.md
evidence-index.md
research-review.md
references/
```

可以从 `docs/tech-research-guide/templates/` 复制模板。

## 3. 先写 Research Brief

`research-brief.md` 是一次调研的合同。它回答：

- 为什么研究它
- 本次看哪些模块
- 本次不看哪些模块
- 要回答哪些关键问题
- 最终要产出哪些文档
- 结论需要达到什么证据标准

它也可以理解为 Research Charter：先定义这次调研到底要搞明白什么。

如果目标还不清楚，先写待确认问题，不要直接进入大范围源码阅读。

## 4. 使用调研 Skill

当你让 Agent 分析开源框架源码、产出架构文档或设计思想时，触发：

```text
open-source-tech-research
```

示例：

```text
使用 open-source-tech-research，帮我分析 /path/to/langgraph 的状态图执行模型，并生成 research/langgraph/ 下的调研文档。
```

## 5. 固定证据

每个关键结论都应该能回到源码证据：

- 文件路径
- 类、函数、配置或测试
- 行号或稳定定位方式
- 结论是源码事实、文档事实，还是基于源码的推断

统一记录在：

```text
evidence-index.md
```

## 6. 产出重构启发

调研的最后一步不是“总结一下”，而是回答：

- 这个框架有哪些模式值得借鉴
- 哪些设计不适合照搬
- 如果迁移到我的系统，需要先改什么边界
- 可以按什么阶段重构
- 风险在哪里

对应文档：

```text
refactor-insights.md
```

## 更多入口

- [技术调研规范](docs/tech-research-guide/TECH_RESEARCH_GUIDE.md)
- [技术调研快速开始](docs/tech-research-guide/AI_TECH_RESEARCH_QUICKSTART.md)
- [模板目录](docs/tech-research-guide/templates/)
- [示例调研目录](research/example-framework/README.md)
- [调研 Skill](skills/open-source-tech-research/SKILL.md)
