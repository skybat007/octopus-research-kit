# 快速开始

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
- 目标：学习架构、理解设计思想、定位某条运行流程，或沉淀可借鉴的设计模式

## 2. 创建调研目录

在根目录 `research/` 下为每个框架建立独立目录：

```text
research/<framework-name>/
```

建议至少包含：

```text
README.md
research-brief.md
external-research.md
research-questions.md
source-map.md
architecture.md
visual/
  architecture.html
  architecture.visual.js
  evidence.html
  evidence.visual.js
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

每个关键结论都应该能回到证据：

- 文件路径
- 类、函数、配置或测试
- 行号或稳定定位方式
- 官方文档、README、Release Note、Issue/PR 或社区资料链接
- 结论是源码事实、官方事实、社区事实，还是基于证据的推断

统一记录在：

```text
evidence-index.md
```

如果有本地源码，建议先生成结构化源码清单：

```bash
node docs/tech-research-guide/scripts/build-source-inventory.js research/<framework-name> --source-root /absolute/path/to/source
```

`--source-root` 只作为运行时输入，输出产物不应写入个人本机绝对路径。

## 6. 生成阅读入口

复杂调研建议生成 Dashboard、UTF-8 Markdown 阅读器、可视化架构图和证据解释页：

```bash
node docs/tech-research-guide/scripts/build-evidence-visual.js research/<framework-name> --source-root /absolute/path/to/source
node docs/tech-research-guide/scripts/build-research-dashboard.js research/<framework-name>
node docs/tech-research-guide/scripts/validate-research.js research/<framework-name>
```

Dashboard 是阅读入口，不是新的知识源；核心结论仍以 Markdown 和 `evidence-index.md` 为准。

## 7. 沉淀学习借鉴

调研的最后一步不是“总结一下”，而是回答：

- 这个框架有哪些模式值得借鉴
- 哪些设计不适合照搬
- 哪些设计需要结合语境后再吸收
- 哪些问题还需要运行验证、测试验证或继续外部调研

对应文档：

```text
adoption-notes.md
```

## 更多入口

- [技术调研规范](docs/tech-research-guide/TECH_RESEARCH_GUIDE.md)
- [技术调研快速开始](docs/tech-research-guide/AI_TECH_RESEARCH_QUICKSTART.md)
- [模板目录](docs/tech-research-guide/templates/)
- [示例调研目录](research/example-framework/README.md)
- [调研 Skill](skills/open-source-tech-research/SKILL.md)
