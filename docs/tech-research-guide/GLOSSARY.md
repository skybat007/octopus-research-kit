# Glossary

## Research Brief

一次调研的入口文档，也可以叫 Research Charter。用于定义调研对象、版本、背景、目标、范围、关键问题、交付物和验收标准。

## Source Map

源码地图。用于说明仓库结构、核心模块、入口、测试、示例和推荐阅读顺序。

## Source Inventory

结构化源码清单。通常是 `references/source-inventory.json`，由脚本从本地源码确定性扫描生成，用于记录文件数量、主要语言、顶层目录、构建文件、入口候选、测试、示例、文档和配置。它是过程性阅读辅助索引，不是架构结论。

## Research Dashboard

调研阅读入口。通常由 `dashboard.html` 和 `docs.html` 组成：`dashboard.html` 用于把 README、Markdown 调研文档、可视化架构图和证据查看器组织成一个浏览入口；`docs.html` 用于以 UTF-8 渲染 Markdown/JSON，避免直接打开 `.md` 出现编码问题。Dashboard 不替代 Markdown，也不新增架构结论；`references/source-inventory.json` 这类过程性材料默认不作为阅读入口展示。

## 可视化架构图

可视化架构图。推荐由 `visual/architecture.html`、`visual/architecture.visual.js`、`visual/evidence.html` 和 `visual/evidence.visual.js` 组成，用于承载 Markdown/Mermaid 不易表达的复杂分层图、多视图架构图、流程图和扩展点图。它是 `architecture.md` 的视觉补充，不能替代证据索引和源码验证。图面默认不展示证据编号，证据映射应保留在生成前设计说明、`architecture.visual.js`、`evidence.visual.js` 或 `evidence-index.md` 中。

## External Research

外部资料调研。用于记录官方文档、Release Notes、Issue、PR、Discussion、社区文章和第三方分析，并标记可信度与待源码验证的观点。

## Research Questions

研究问题清单。用于把外部资料、仓库文档和用户目标中的关键说法转成可验证问题，并记录源码验证状态。

## Runtime Flow

运行时链路。用于追踪一次真实调用从外部入口到核心执行的完整路径。

## Key Abstraction

核心抽象。指框架中承担关键设计职责的接口、类、函数、数据结构、生命周期对象或协议。

## Extension Point

扩展点。框架有意开放给外部扩展的 Hook、Plugin、Provider、Registry、Middleware、Tool、Skill、Adapter 等机制。

## Evidence Index

证据索引，也可以理解为 Evidence Log。用于记录关键结论和支撑证据，避免无依据推断。

## Adoption Notes

借鉴与学习笔记。用于记录开源框架中值得学习、需结合语境后才能借鉴和不建议照搬的设计，以及适用前提和待验证问题。

## Research Review

调研审查。用于检查版本、范围、证据、架构图、设计思想、开放问题和学习借鉴笔记是否可靠。

## Source Fact

源码事实。代码中可以直接看到的事实。

## Official Fact

官方事实。官网、官方 README、官方文档、官方示例或 Release Notes 中明确说明的事实。

## Doc Fact

文档事实。仓库文档或设计文档明确说明的事实。若来源是官方公开资料，优先标记为 Official Fact。

## Collaboration Fact

协作事实。Issue、PR、Discussion 或 commit message 中能追溯的事实。

## Community Fact

社区事实。第三方文章、视频、分享或用户实践中提出的观点，不得作为核心结论的唯一证据。

## Test Fact

测试事实。测试用例、示例工程或 benchmark 展示的事实。

## Inference

推断结论。基于多个事实综合得出的判断，必须说明推断链路。

## Pending

待确认。证据不足，不能写成确定结论。
