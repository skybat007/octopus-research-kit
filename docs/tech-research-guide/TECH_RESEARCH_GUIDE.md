# Tech Research Guide

本文档用于指导 Agent 在本项目中进行开源框架、基础设施、中间件、工具链或陌生代码库的技术调研。

调研目标不是堆资料，而是形成一套能反复复用的理解资产：外部资料摘要、研究问题、源码地图、结构化源码清单、架构图、可视化架构图、Dashboard 阅读入口、关键流程、设计思想、证据索引和学习借鉴笔记。

## 1. 基本原则

### 1.1 先定义问题，再读源码

每次调研必须先明确研究问题。不要从目录遍历开始无目标阅读。

好的研究问题示例：

- 这个框架如何把用户 API 转换为运行时执行计划？
- 核心生命周期如何启动、扩展和关闭？
- 插件机制如何隔离框架核心与外部扩展？
- 状态、上下文或依赖关系如何在模块之间传递？
- 哪些设计值得学习，哪些不能直接照搬？

### 1.2 先看外部资料，再用源码验证

开源技术调研不应只看源码。推荐先用官方文档和高质量外部资料建立全局认知，再把关键说法转成可验证的问题，最后进入源码验证。

外部资料不能替代源码分析：

- 官方资料帮助理解设计目标、推荐用法和能力边界
- 社区资料帮助理解实践经验、常见问题和历史讨论
- 源码、测试和配置用于验证真实实现
- 未经源码、测试或官方资料验证的内容必须标为推断或待确认

### 1.3 结论必须可追溯

关键结论必须绑定证据。证据可以来自：

- 源码文件、类、函数、配置、测试
- 官方文档或设计文档
- 构建脚本、示例工程、benchmark
- issue、PR、release note 中的设计讨论

需要区分：

- 源码事实：代码直接体现的事实
- 官方事实：官网、官方 README、官方文档、官方示例或 release note 明确说明的事实
- 仓库文档事实：目标仓库内文档明确说明的事实
- 协作事实：issue、PR、discussion、commit message 中能追溯的事实
- 社区事实：第三方文章、分享、视频或用户实践中提出的观点
- 测试事实：测试用例、示例工程或 benchmark 展示的事实
- 推断结论：基于多个证据综合得出的判断
- 待确认：证据不足，不能写成确定结论

### 1.4 资料可信度分级

| 等级 | 类型 | 来源 | 用途 | 使用规则 |
|---|---|---|---|---|
| S | 源码事实 | 核心源码、测试、配置、可运行示例 | 支撑最终架构和实现结论 | 最高优先级 |
| A | 官方资料 | 官网、官方 README、官方文档、官方 Quickstart、官方 Architecture、Release Notes、官方博客 | 理解设计目标、推荐用法、能力边界 | 关键实现仍建议源码验证 |
| B | 项目协作资料 | Issue、PR、Discussion、Commit message | 理解演进背景、历史取舍、用户痛点 | 需要记录上下文和时间 |
| C | 第三方分析 | 技术博客、视频、非官方架构分析、用户实践文章 | 补充实践经验和启发 | 不得作为核心结论的唯一证据 |
| D | AI 推断 | 模型基于上下文生成的解释、无明确证据的设计意图判断 | 帮助形成假设 | 必须标记为推断，不得写成事实 |

### 1.5 什么时候需要联网搜索

需要联网搜索的情况：

- 用户只给项目名、框架名或远程仓库名，需要确认官方仓库、官方文档、license、最新 release/tag 或活跃分支
- 要说明官方定位、推荐用法、稳定 API、兼容性承诺、能力边界或设计目标
- 要分析版本差异、release note、changelog、breaking changes、废弃或新增能力
- 要做横向对比，且对比对象没有本地已固定的调研材料
- 要判断生态成熟度、维护状态、社区痛点、安全公告、包管理器最新版本或插件生态
- 本地源码不完整、来源特殊，或需要判断本地快照和官方当前行为的差异
- `research-review.md` 标记某个关键结论缺少官方、社区或版本证据

通常不需要联网搜索的情况：

- 生成源码地图、模块边界、调用链和核心抽象
- 验证真实实现、配置加载、测试覆盖和运行时状态变化
- 从源码结构提炼设计取舍
- 用户明确要求只基于本地源码

### 1.6 版本必须固定

调研结论必须注明版本来源：

- 项目标识
- git remote
- branch、tag 或 commit
- 依赖版本
- 调研日期

如果版本未固定，结论只能标为当前快照。

### 1.7 从用户场景追踪主流程

优先从框架对外入口出发：

- public API
- CLI 命令
- 配置入口
- 示例代码
- 测试用例
- server bootstrap

不要只按包名横向介绍模块。技术架构文档应该能解释一个真实调用如何穿过核心抽象。

### 1.8 调研要服务技术理解和后续学习

每次调研最后都要回答：

- 有哪些可复用的设计模式
- 哪些设计依赖特定生态，不能照搬
- 这些设计解决了什么问题
- 如果后续单独评估应用，需要先补哪些背景
- 哪些风险或约束需要继续验证

## 2. 推荐目录结构

```text
research/<framework-name>/
  README.md
  research-brief.md
  external-research.md
  research-questions.md
  source-map.md
  dashboard.html
  docs.html
  architecture.md
  visual/
    architecture.html
    architecture.visual.js
    evidence.html
    evidence.visual.js
  runtime-flows.md
  key-abstractions.md
  extension-points.md
  design-philosophy.md
  comparison.md
  adoption-notes.md
  evidence-index.md
  research-review.md
  references/
    source-inventory.json
```

简单调研可以合并文档，但至少要包含：

- 研究目标和范围
- 外部资料摘要和待验证问题
- 源码地图
- `references/source-inventory.json` 结构化源码清单，或说明没有本地源码可生成
- 核心架构
- 一个主流程追踪
- 设计思想总结
- 证据索引
- 学习借鉴笔记

完整调研建议再补充：

- 扩展机制分析
- 可视化架构图
- Dashboard 阅读入口
- 横向对比
- 学习借鉴笔记
- 调研质量审查

## 3. 调研生命周期

### 3.1 Research Brief

先完成 `research-brief.md`。它也可以叫 Research Charter，含义是“这次调研的章程”：

- 研究对象
- 版本信息
- 背景和动机
- 研究问题
- 范围和不做范围
- 预期交付物
- 验收标准

### 3.2 External Research

完成 `external-research.md`：

- 官方资料：官网、官方文档、README、Quickstart、Architecture 文档、Release Notes、官方示例
- 项目协作资料：重要 issue、PR、discussion、commit message
- 社区资料：高质量技术文章、用户实践、视频或分享
- 每个资料的可信度等级、主要观点和对本次调研的价值
- 外部资料中需要源码验证的关键说法
- 外部资料与本地源码可能不一致的地方

如果用户明确要求只做本地源码调研，可以跳过联网搜索，但必须在 `research-review.md` 中说明外部资料未覆盖。

### 3.3 Research Questions

完成 `research-questions.md`：

- 将外部资料、README、用户目标中的关键说法转成可验证问题
- 为每个问题标注来源、重要性、需要验证的源码方向
- 在源码分析后更新验证结果：已验证、部分验证、未验证、待确认
- 如果外部资料和源码不一致，必须单独记录

### 3.4 Source Map

完成 `source-map.md`：

- 仓库结构
- 构建系统
- 核心模块
- 对外入口
- 示例和测试入口
- 阅读顺序建议
- 说明是否已生成 `references/source-inventory.json`

### 3.5 Source Inventory

生成或更新 `references/source-inventory.json`：

```bash
node docs/tech-research-guide/scripts/build-source-inventory.js research/<framework-name> --source-root /absolute/path/to/source
```

`references/source-inventory.json` 是从本地源码仓库确定性扫描出来的结构化索引，用于辅助阅读和后续校验。它属于过程性/机器生成材料，默认放在 `references/`，不作为一级阅读入口。生成时可以通过 `--source-root` 传入本机源码路径，但输出文件和 Markdown 文档只保留项目名、仓库内相对路径和版本信息，不写入个人本机绝对路径。它可以记录：

- 项目标识、remote、branch、commit、调研版本提示
- 文件数量、主要语言、顶层目录摘要
- 构建文件、包文件、入口候选、测试、示例、文档、配置和大文件
- 对 `source-map.md`、`runtime-flows.md` 和 `evidence-index.md` 有帮助的候选入口

使用规则：

- 它不是架构结论，不能替代 `architecture.md`
- 它不解释设计思想，只提供确定性的源码索引
- 重要结论仍必须写入 Markdown，并在 `evidence-index.md` 中绑定证据
- 如果目标没有本地源码，允许缺失，但必须在 `research-review.md` 中说明原因

### 3.6 Architecture

完成 `architecture.md`：

- 总体架构
- 模块职责
- 模块依赖方向
- 核心抽象
- 扩展点
- 状态和数据流

### 3.7 Dashboard

生成或更新 `dashboard.html`：

```bash
node docs/tech-research-guide/scripts/build-research-dashboard.js research/<framework-name>
```

Dashboard 是阅读入口，不是新的知识源。它负责把 README、Markdown 文档、可视化架构图和证据查看器组织成一个可浏览的入口页。`docs.html` 是 Dashboard 使用的 UTF-8 文档阅读器，用来避免浏览器直接打开 `.md` 时出现编码问题。`references/source-inventory.json` 这类过程性材料保留给脚本、Dashboard 元信息和 `source-map.md` 使用，不作为用户阅读入口。

使用规则：

- Dashboard 只做导航和摘要，不在其中新增 Markdown 中不存在的架构结论
- Dashboard 中的 Markdown 文档链接必须指向 `docs.html?doc=<file>`，不要直接打开 `.md`
- Dashboard 和 `docs.html` 使用同一套左侧导航，避免入口数量和分组不一致
- `docs.html` 应渲染 Markdown 中的 Mermaid 代码块；当 Mermaid 脚本不可用时保留原始代码块作为降级展示
- `visual/architecture.html` 仍然作为专门的架构图查看器保留，并归入“架构解析”
- `design-philosophy.md`、`comparison.md`、`adoption-notes.md` 归入“架构解析”，不再单独作为“设计沉淀”一级菜单
- `source-map.md` 单独归入“源码解析”，并放在“架构解析”之后
- `visual/evidence.html` 归入“证据”
- `references/source-inventory.json` 保留在 `references/`，但不要放进 Dashboard 左侧导航或 README 文件导航
- 旧版 `visual-architecture.html` 可作为兼容跳转页保留，不再作为新规范主入口
- `research/index.html` 可以作为全部框架调研的总入口，但只保留各框架 `dashboard.html` 入口
### 3.8 可视化架构图

当 Markdown/Mermaid 图无法清晰表达多层架构、多入口、多流程或大量扩展点时，补充可视化架构图。

推荐采用联动结构：

```text
research/<framework-name>/
  architecture.md
  runtime-flows.md
  source-map.md
  evidence-index.md
  visual/
    architecture.html
    architecture.visual.js
    evidence.html
    evidence.visual.js
```

主从关系必须明确：

- Markdown 是知识源，负责沉淀架构结论、源码地图、运行链路和证据
- `architecture.visual.js` 是图数据层，只存 views、nodes、edges、layers、ev、doc、tip 等结构化数据
- `architecture.html` 是可视化呈现层，只负责渲染和交互
- `evidence.visual.js` 是证据解释页的数据层，从 `evidence-index.md` 和 `architecture.visual.js` 抽取证据编号、结论、架构语境、源码/文档片段和备注
- `evidence.html` 是证据解释页，供架构图节点点击后打开，避免浏览器直接打开 Markdown 原文时出现编码问题
- 不允许在 HTML 或 visual data 中新增 Markdown 里没有的架构结论
- 旧版单文件 `visual-architecture.html` 可以保留用于兼容或临时输出，但新产物优先使用 `visual/architecture.html` + `visual/architecture.visual.js` + `visual/evidence.html` + `visual/evidence.visual.js`

适合生成 HTML 可视化图的情况：

- 架构图超过 3 层或 12 个关键节点
- 同一框架需要同时展示总览、运行流、分层、扩展点、状态流
- Mermaid 图在文档中太拥挤、连线交叉或需要频繁横向滚动
- 用户需要面向阅读、汇报、复盘的直观图，而不只是源码追踪证据

HTML 可视化图要求：

- 必须是 Markdown 架构文档的视觉补充，不替代 `architecture.md`
- 先输出图设计说明，再生成数据文件：说明有哪些视图、每个视图回答什么问题、节点清单、边语义、证据映射
- 先阅读 `architecture.md`、`runtime-flows.md`、`source-map.md`、`evidence-index.md`，必要时再读 `design-philosophy.md`
- 不要把所有调研结论堆进一张大图；一个 tab/view 只回答一个核心问题
- 每个 view 最多 8 到 10 个主节点；超过 10 个节点必须拆成新的 view
- 节点必须是架构对象，例如模块、组件、运行时对象、状态对象、扩展点、外部依赖、策略或权限组件
- 不要把普通函数、字段、设计原则、证据编号或一句调研结论直接画成节点
- 每条边必须有清晰语义，例如请求流、同步调用、异步事件、依赖、注册/发现、权限检查、上下文构造、读写状态、模型流、结果返回
- 不要用同一种箭头表达所有关系；主流程、依赖、注册、权限、状态读写和结果返回应在视觉上可区分
- 推荐拆成多个 tab/view，例如“架构总览”“入口与初始化”“单轮运行主链路”“工具与扩展机制”“状态与上下文”
- 节点、关键连线和说明必须能回溯到 `evidence-index.md` 中的证据编号
- 每个节点必须包含 `id`、`type`、`role`、`title`、`sub`、`ev`、`doc`、`tip`
- 每条关键边必须包含 `from`、`to`、`label`、`kind`、`ev`、`doc`
- `ev` 必须能在 `evidence-index.md` 中找到；`doc` 必须链接到对应 Markdown 锚点或章节
- 图面默认不显示证据编号；证据编号保留在生成前设计说明、`architecture.visual.js` 或 `evidence-index.md` 中
- 大图应支持缩放、拖拽、图例、tooltip 或说明面板
- 必须离线可打开，不依赖外部 CDN、远程图片或运行服务
- 不要在图中新增未经验证的能力、数量或设计结论

HTML 模板使用规则：

- 除非明确要求，不修改 CSS、缩放、拖拽、tooltip、legend、fit 等模板主体逻辑
- 主要修改 `visual/architecture.visual.js`
- `visual/architecture.html` 由 `visual-architecture-template.html` 复制而来，只负责读取 `./architecture.visual.js` 并渲染
- `view.purpose` 必须回答“这个视图解决什么阅读问题”
- `node.role` 用于区分 `module`、`runtime-object`、`state`、`external-dependency`、`extension-point`、`policy`、`adapter`
- `edge.kind` 使用固定关系类型，避免“所有线都是调用”
- `node.ev` 和 `edge.ev` 只作为证据元数据；除非用户明确要求，不渲染到图面
- 节点详情可以展示 `doc` 来源路径；点击来源时应打开 `visual/evidence.html#<证据编号>`，不要直接跳转到原始 Markdown 文件，避免浏览器按错误编码打开 `.md`

生成后自检：

- 每个 tab 是否只回答一个核心问题
- 是否存在一张图塞入过多调研结论
- 每个节点是否都是架构对象
- 是否有普通概念被误画成模块
- 每条边是否有明确语义
- 主流程、依赖、注册、权限、状态读写是否区分清楚
- 节点和关键边是否能回到 `evidence-index.md`
- `architecture.visual.js` 中的 `ev` 是否都能在 `evidence-index.md` 找到
- `architecture.visual.js` 中的 `doc` 是否能通过 `visual/evidence.html` 回到证据项
- 是否存在 HTML/visual data 中有但 Markdown 中没有的结论
- 是否存在没有证据支撑的结论
- 是否区分了源码事实、设计推断和待验证内容
- 是否有线条严重交叉或节点布局拥挤

### 3.9 Key Abstractions

完成 `key-abstractions.md`：

- 核心接口、类、函数和数据结构
- 生命周期对象
- 抽象之间的协作关系
- 每个抽象解决的问题
- 每个抽象的设计限制和可借鉴点

### 3.10 Runtime Flows

完成 `runtime-flows.md`：

- 选择 1 到 3 条关键场景
- 从入口追踪到核心执行
- 画出时序图或流程图
- 标注关键函数和状态变化

### 3.11 Extension Points

完成 `extension-points.md`：

- 插件、Hook、Registry、Provider、Middleware 等扩展点
- 扩展点如何注册、发现、加载、执行和隔离
- 扩展失败如何处理
- 哪些扩展机制适合借鉴

### 3.12 Design Philosophy

完成 `design-philosophy.md`：

- 它为什么这样设计
- 解决了什么复杂度
- 牺牲了什么
- 与常见替代设计相比有什么不同
- 哪些设计体现了作者的核心取舍
- 官方资料可用于解释设计目标
- 源码证据必须用于确认真实实现
- 社区资料只能作为实践经验或问题背景

### 3.13 Comparison

当用户需要比较多个框架时，完成 `comparison.md`：

- 定位和架构风格
- Runtime、Tool、Workflow、Memory、Plugin 等核心抽象差异
- 工程化程度和二次开发友好度
- 对学习、选型或设计判断的启发

### 3.14 Adoption Notes

完成 `adoption-notes.md`：

- 可以直接借鉴的设计
- 需要结合语境后借鉴的设计
- 不建议借鉴的设计
- 适用前提、约束和验证问题
- 学习价值和后续单独评估方向

### 3.15 Evidence Index

持续维护 `evidence-index.md`：

- 每个关键结论对应证据
- 证据类型和位置明确
- 资料可信度等级明确
- 标注是否已由源码、测试或官方资料验证
- 推断结论标明推断链路
- 低置信度结论不能进入最终建议

### 3.16 Research Review

完成 `research-review.md`：

- 调研版本是否固定
- 是否覆盖必要的外部资料
- 外部观点是否转成研究问题并由源码验证
- 结论是否有证据
- 架构图是否由源码支撑
- 设计思想是否过度解读
- 借鉴建议是否越界成实施方案
- 是否明确待验证问题

## 4. 输出质量标准

一份合格的技术调研文档应该满足：

- 读者能在 10 分钟内知道这个框架的核心设计
- 读者能按源码地图继续深入阅读
- 每个关键结论能回到证据
- 至少一条主流程能从入口追到核心执行
- 设计思想不是泛泛而谈，而是从源码结构和取舍中提炼
- 借鉴笔记能说明适用前提、约束和不可照搬点

## 5. Research Quality Gate

最终输出前做一次质量门禁：

| 检查项 | 要求 |
|---|---|
| 版本固定 | 明确 branch、tag、commit 或当前快照 |
| 范围明确 | 明确本次调研范围和不做范围 |
| 外部资料 | 已覆盖必要官方资料、协作资料或社区资料；若跳过则说明原因 |
| 研究问题 | 已把外部关键说法转成可验证问题，并记录验证状态 |
| 源码地图 | 已说明仓库结构、入口、模块和阅读顺序 |
| 结构化源码清单 | 已生成 `references/source-inventory.json`，或说明没有本地源码可生成 |
| Dashboard | 已生成 `dashboard.html` 作为阅读入口，或说明不需要 |
| 主链路 | 至少追踪一条从入口到核心执行的运行链路 |
| 核心抽象 | 已识别关键接口、对象、数据结构和生命周期 |
| 扩展点 | 已识别注册、加载、执行、隔离和失败处理方式 |
| 架构图 | 架构图由源码、文档、测试或示例支撑 |
| 可视化架构图 | 复杂架构已补充 `visual/architecture.html` 和 `visual/architecture.visual.js`，或说明为什么不需要 |
| 设计思想 | 来自源码结构和设计取舍，不是主观想象 |
| 证据索引 | 关键结论已记录到 evidence-index.md |
| 事实区分 | 区分源码事实、官方事实、仓库文档事实、协作事实、社区事实、测试事实、推断和待确认 |
| 借鉴笔记 | 输出可学习、不建议照搬和需要继续验证的内容 |
| 审查记录 | 复杂调研已完成 research-review.md |
| 自动校验 | 已运行 `node docs/tech-research-guide/scripts/validate-research.js research/<framework-name>`，或记录无法运行原因 |

## 6. 调研角色

复杂调研可以按角色思考，不要求机械拆成多人执行。每个角色的完整目标、适用文档、职责和边界见 `roles/`。

| 角色 | 角色目标 | 主要适用文档 |
|---|---|---|
| Research Lead | 把模糊调研意图转化为范围清晰、问题明确、可验收的 Research Brief，并组织外部资料和研究问题 | `research-brief.md`、`external-research.md`、`research-questions.md`、`README.md`、`research-review.md` |
| Source Code Analyst | 建立可信的源码入口、目录地图、结构化源码清单和调用链证据，并验证研究问题 | `source-map.md`、`references/source-inventory.json`、`runtime-flows.md`、`research-questions.md`、`evidence-index.md` |
| Architecture Analyst | 把源码事实抽象成架构模型和核心抽象关系 | `architecture.md`、`key-abstractions.md`、`extension-points.md` |
| Design Philosophy Analyst | 从官方目标、源码结构和架构取舍中提炼设计思想 | `design-philosophy.md`、`external-research.md`、`architecture.md`、`key-abstractions.md` |
| Adoption Analyst | 把开源框架设计转化为学习借鉴笔记，说明适用前提和不可照搬点 | `adoption-notes.md`、`comparison.md`、`external-research.md` |
| Research Reviewer | 审查调研产物是否可信、完整、可复用 | `research-review.md`、`evidence-index.md`、`external-research.md`、`research-questions.md` |

## 7. 不推荐的写法

避免：

- 只摘抄官网介绍
- 只列目录，不解释模块关系
- 只画架构图，没有源码证据
- 把复杂关系硬塞进一个难以阅读的 Markdown 图
- 把推测写成事实
- 用“高内聚低耦合”等空泛词替代具体设计分析
- 不固定版本就给确定结论
- 不区分学习总结和可复用设计
