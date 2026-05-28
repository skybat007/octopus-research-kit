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
5. 如果有本地源码，生成 `references/source-inventory.json`。
6. 生成 `source-map.md`。
7. 追踪一条主运行链路，生成 `runtime-flows.md`。
8. 提炼核心抽象，生成 `key-abstractions.md`。
9. 生成 `architecture.md`；如果架构图在 Markdown 中不直观，补充 `visual/architecture.html`、`visual/architecture.visual.js`、`visual/evidence.html` 和 `visual/evidence.visual.js`。
10. 生成 `design-philosophy.md`。
11. 记录证据到 `evidence-index.md`。
12. 输出 `adoption-notes.md`。
13. 生成 `dashboard.html` 和 `docs.html` 作为阅读入口与 UTF-8 文档阅读器。

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
请在分析源码前生成 references/source-inventory.json。要求从 evidence-index.md 读取本地源码路径，使用确定性扫描记录文件数量、主要语言、顶层目录、构建文件、包文件、入口候选、测试、示例、文档和配置。references/source-inventory.json 是过程性阅读索引，不要把它当作架构结论，也不要作为一级阅读入口。
```

```text
请生成 dashboard.html 和 docs.html 作为本次调研的统一阅读入口与 UTF-8 文档阅读器。要求：
- Dashboard 只导航已有 Markdown、visual/architecture.html、visual/evidence.html 和 references/ 辅助材料
- Markdown 文档链接必须进入 docs.html?doc=<file>，不要直接打开 .md
- 不在 Dashboard 中新增 Markdown 没有的架构结论
- visual/architecture.html 仍作为专门的架构图查看器保留
- 根目录的 visual-architecture.html 如存在，只作为旧链接兼容跳转页
- research/index.html 只保留各框架 Dashboard 入口
```

```text
请从源码入口追踪一条主链路，输出 runtime-flows.md，并把每个关键步骤绑定到源码位置。
```

```text
请基于 architecture.md、runtime-flows.md、source-map.md 和 evidence-index.md 生成可视化架构图。

主从关系：
- Markdown 是知识源，HTML 只是可视化呈现层。
- 不允许在 HTML 图或 architecture.visual.js 中新增 architecture.md / evidence-index.md 中没有的结论。
- 图数据放在 visual/architecture.visual.js。
- HTML 渲染器放在 visual/architecture.html，并从 visual-architecture-template.html 复制生成。
- 证据解释页放在 visual/evidence.html，证据解释数据放在 visual/evidence.visual.js，内容应包含架构语境、证据结论和源码/文档片段。

生成前先输出图设计说明：
1. 本次有哪些视图
2. 每个视图回答什么问题
3. 每个视图的节点清单
4. 每条边的语义类型
5. 节点和关键边如何回到 evidence-index.md 或对应 Markdown 章节

生成要求：
- 生成或更新 visual/architecture.visual.js、visual/architecture.html、visual/evidence.visual.js 和 visual/evidence.html
- 不要直接大改 HTML 模板；HTML 模板只负责渲染，图数据放到 architecture.visual.js
- 主要修改 ARCHITECTURE_META、ARCHITECTURE_VIEWS、nodes、edges、layers
- 不要把所有调研结论堆到一张图里，一个 tab/view 只回答一个核心问题
- 至少考虑这些视图：架构总览、入口与初始化、单轮运行主链路、工具与扩展机制、状态与上下文
- 每个视图最多 8 到 10 个主节点，超过则拆分
- 节点必须是架构对象，例如模块、组件、运行时对象、状态对象、扩展点、外部依赖、策略/权限组件
- 不要把普通函数、字段、设计原则、证据编号或一句调研结论直接画成节点
- 每条边必须有清晰语义，例如请求流、同步调用、异步事件、依赖、注册/发现、权限检查、上下文构造、读写状态、模型流、结果返回
- 每个节点必须包含 id、type、role、title、sub、ev、doc、tip
- 每条关键边必须包含 from、to、label、kind、ev、doc
- ev 必须能在 evidence-index.md 中找到；doc 必须链接到对应 Markdown 锚点或章节
- 图面不要展示证据编号；证据编号只保留在图设计说明、architecture.visual.js 或 evidence-index.md 中
- 节点详情可展示 doc 来源路径；点击来源时打开 visual/evidence.html#<证据编号>，不要直接跳转到原始 Markdown 文件，避免浏览器按错误编码打开 .md
- 不要新增未经验证的能力、数量或设计结论
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
- 是否生成 `references/source-inventory.json`，或说明没有本地源码可生成
- 是否生成 `dashboard.html` 和 `docs.html` 作为阅读入口
- 是否有源码地图
- 是否至少追踪一条主运行链路
- 复杂架构是否补充 HTML 可视化图，或说明无需补充
- 可视化架构图是否一个 tab 只回答一个核心问题
- 可视化架构图是否隐藏图面证据编号，同时保留证据可追溯性
- 可视化架构图是否采用 Markdown 知识源、visual data、HTML 呈现层分离
- visual/architecture.visual.js 中的 ev/doc 是否能通过 visual/evidence.html 回到证据项
- 是否识别核心抽象
- 是否识别扩展点
- 架构图是否有源码证据
- 设计思想是否来自源码结构和设计取舍
- 关键结论是否进入 `evidence-index.md`
- 是否区分官方事实、源码事实、社区事实、推断和待确认
- 是否输出可学习、可借鉴和不适合照搬的设计判断
- 是否运行 `node docs/tech-research-guide/scripts/validate-research.js research/<framework-name>`，或记录无法运行原因
