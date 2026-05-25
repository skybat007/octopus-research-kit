# AI Tech Research Quickstart

本文件用于快速启动一次开源技术调研。

## 1. 给 AI 的推荐输入

尽量一次性提供：

```text
请使用 open-source-tech-research 调研 <框架名>。

代码位置：
- 本地路径：
- GitHub 地址：
- branch/tag/commit：

本次重点：
- 

本次不关注：
- 

我希望最终用于：
- 学习架构
- 对比框架
- 沉淀可借鉴设计
```

## 2. 最小调研流程

1. 创建 `research/<framework-name>/research-brief.md`。
2. 固定代码版本和调研范围。
3. 收集必要外部资料，生成 `external-research.md`；如果只做本地源码调研，记录跳过原因。
4. 将外部观点和用户目标转成源码验证问题，生成 `research-questions.md`。
5. 生成 `source-map.md`。
6. 追踪一条主运行链路，生成 `runtime-flows.md`。
7. 提炼核心抽象，生成 `key-abstractions.md`。
8. 生成 `architecture.md`；如果架构图在 Markdown 中不直观，补充 `visual-architecture.html`。
9. 生成 `design-philosophy.md`。
10. 记录证据到 `evidence-index.md`。
11. 输出 `adoption-notes.md`。

## 3. 完整调研流程

完整调研在最小流程基础上增加：

- `extension-points.md`：扩展机制分析
- `comparison.md`：横向对比
- `adoption-notes.md`：学习借鉴笔记
- `research-review.md`：调研质量门禁

## 4. 常用提示词

```text
先不要泛泛总结。请先生成 research-brief.md，明确调研目标、范围、不做范围、关键问题和证据标准。
```

```text
请先不要直接分析源码。请围绕 <框架名称> 进行外部资料调研，优先收集官方文档、README/Quickstart、Architecture/Concept 文档、Release Notes、官方 Examples、重要 Issue/PR/Discussion 和高质量第三方技术分析。请输出 external-research.md，区分官方资料、协作资料和第三方资料，标记可信度，并标记哪些观点需要源码验证。
```

```text
请基于 external-research.md 生成 research-questions.md。要求把外部资料中的关键说法转成可验证的问题，说明为什么重要，标记需要去源码中验证的位置或方向，不要直接把外部资料观点当成最终结论。
```

```text
请基于 research-questions.md 进入源码验证。对每个研究问题给出验证结果，标记已验证、部分验证、未验证或待确认，并给出源码路径、类、函数、配置或测试用例作为证据。
```

```text
请从源码入口追踪一条主链路，输出 runtime-flows.md，并把每个关键步骤绑定到源码位置。
```

```text
请基于 architecture.md、runtime-flows.md 和 evidence-index.md 生成 visual-architecture.html。要求输出离线可打开的 HTML，可包含多个 tab/view，例如架构总览、运行流程、分层视图、扩展点；图中节点和连线必须标注或能追溯到证据编号，不要新增未经验证的能力或数量。
```

```text
请提炼 key-abstractions.md。每个抽象都说明它解决什么问题、关键源码、生命周期、和其他对象的关系、可借鉴点。
```

```text
请生成 adoption-notes.md，说明哪些设计值得学习、哪些需要结合语境后再借鉴、哪些不适合照搬，并标注证据和适用前提。
```

## 5. 质量门禁

最终输出前检查：

- 是否明确调研版本、分支或 commit
- 是否明确调研范围和不做范围
- 是否覆盖必要外部资料，或说明跳过原因
- 是否把外部观点转成研究问题并记录源码验证状态
- 是否有源码地图
- 是否至少追踪一条主运行链路
- 复杂架构是否补充 HTML 可视化图，或说明无需补充
- 是否识别核心抽象
- 是否识别扩展点
- 架构图是否有源码证据
- 设计思想是否来自源码结构和设计取舍
- 关键结论是否进入 `evidence-index.md`
- 是否区分官方事实、源码事实、社区事实、推断和待确认
- 是否输出可学习、可借鉴和不适合照搬的设计判断
