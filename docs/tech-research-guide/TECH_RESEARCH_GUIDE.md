# Tech Research Guide

本文档用于指导 Agent 在本项目中进行开源框架、基础设施、中间件、工具链或陌生代码库的技术调研。

调研目标不是堆资料，而是形成一套能反复复用的理解资产：架构图、源码地图、关键流程、设计思想、证据索引和重构启发。

## 1. 基本原则

### 1.1 先定义问题，再读源码

每次调研必须先明确研究问题。不要从目录遍历开始无目标阅读。

好的研究问题示例：

- 这个框架如何把用户 API 转换为运行时执行计划？
- 核心生命周期如何启动、扩展和关闭？
- 插件机制如何隔离框架核心与外部扩展？
- 状态、上下文或依赖关系如何在模块之间传递？
- 哪些设计可以迁移到我的系统重构中？

### 1.2 结论必须可追溯

关键结论必须绑定证据。证据可以来自：

- 源码文件、类、函数、配置、测试
- 官方文档或设计文档
- 构建脚本、示例工程、benchmark
- issue、PR、release note 中的设计讨论

需要区分：

- 源码事实：代码直接体现的事实
- 文档事实：官方文档明确说明的事实
- 推断结论：基于多个证据综合得出的判断
- 待确认：证据不足，不能写成确定结论

### 1.3 版本必须固定

调研结论必须注明版本来源：

- 本地路径
- git remote
- branch、tag 或 commit
- 依赖版本
- 调研日期

如果版本未固定，结论只能标为当前快照。

### 1.4 从用户场景追踪主流程

优先从框架对外入口出发：

- public API
- CLI 命令
- 配置入口
- 示例代码
- 测试用例
- server bootstrap

不要只按包名横向介绍模块。技术架构文档应该能解释一个真实调用如何穿过核心抽象。

### 1.5 调研要服务后续迁移

每次调研最后都要回答：

- 有哪些可复用的设计模式
- 哪些设计依赖特定生态，不能照搬
- 如果迁移到我的系统，需要先建立哪些边界
- 哪些改造可以分阶段做
- 哪些风险需要提前验证

## 2. 推荐目录结构

```text
research/<framework-name>/
  README.md
  research-brief.md
  source-map.md
  architecture.md
  runtime-flows.md
  key-abstractions.md
  extension-points.md
  design-philosophy.md
  comparison.md
  adoption-notes.md
  refactor-opportunities.md
  refactor-insights.md
  evidence-index.md
  research-review.md
  references/
```

简单调研可以合并文档，但至少要包含：

- 研究目标和范围
- 源码地图
- 核心架构
- 一个主流程追踪
- 设计思想总结
- 证据索引
- 重构启发

完整调研建议再补充：

- 扩展机制分析
- 横向对比
- 借鉴与落地建议
- 重构机会
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

### 3.2 Source Map

完成 `source-map.md`：

- 仓库结构
- 构建系统
- 核心模块
- 对外入口
- 示例和测试入口
- 阅读顺序建议

### 3.3 Architecture

完成 `architecture.md`：

- 总体架构
- 模块职责
- 模块依赖方向
- 核心抽象
- 扩展点
- 状态和数据流

### 3.4 Key Abstractions

完成 `key-abstractions.md`：

- 核心接口、类、函数和数据结构
- 生命周期对象
- 抽象之间的协作关系
- 每个抽象解决的问题
- 每个抽象的设计限制和可借鉴点

### 3.5 Runtime Flows

完成 `runtime-flows.md`：

- 选择 1 到 3 条关键场景
- 从入口追踪到核心执行
- 画出时序图或流程图
- 标注关键函数和状态变化

### 3.6 Extension Points

完成 `extension-points.md`：

- 插件、Hook、Registry、Provider、Middleware 等扩展点
- 扩展点如何注册、发现、加载、执行和隔离
- 扩展失败如何处理
- 哪些扩展机制适合借鉴

### 3.7 Design Philosophy

完成 `design-philosophy.md`：

- 它为什么这样设计
- 解决了什么复杂度
- 牺牲了什么
- 与常见替代设计相比有什么不同
- 哪些设计体现了作者的核心取舍

### 3.8 Comparison

当用户需要比较多个框架时，完成 `comparison.md`：

- 定位和架构风格
- Runtime、Tool、Workflow、Memory、Plugin 等核心抽象差异
- 工程化程度和二次开发友好度
- 对自有系统的启发

### 3.9 Adoption Notes

完成 `adoption-notes.md`：

- 可以直接借鉴的设计
- 需要改造后借鉴的设计
- 不建议借鉴的设计
- 和目标系统的映射关系
- 落地优先级、风险和验证方式

### 3.10 Refactor Opportunities

完成 `refactor-opportunities.md`：

- 当前系统痛点
- 从框架学到的模式
- 可重构模块
- 重构前后对比
- 最小验证方案
- 分阶段演进路径

### 3.11 Refactor Insights

完成 `refactor-insights.md`：

- 可借鉴模式
- 不建议照搬的点
- 迁移前提
- 分阶段改造建议
- 风险和验证方式

`refactor-insights.md` 可以作为 `adoption-notes.md` 和 `refactor-opportunities.md` 的综合摘要。

### 3.12 Evidence Index

持续维护 `evidence-index.md`：

- 每个关键结论对应证据
- 证据类型和位置明确
- 推断结论标明推断链路
- 低置信度结论不能进入最终建议

### 3.13 Research Review

完成 `research-review.md`：

- 调研版本是否固定
- 结论是否有证据
- 架构图是否由源码支撑
- 设计思想是否过度解读
- 落地建议是否可执行
- 是否明确待验证问题

## 4. 输出质量标准

一份合格的技术调研文档应该满足：

- 读者能在 10 分钟内知道这个框架的核心设计
- 读者能按源码地图继续深入阅读
- 每个关键结论能回到证据
- 至少一条主流程能从入口追到核心执行
- 设计思想不是泛泛而谈，而是从源码结构和取舍中提炼
- 重构启发能落到边界、阶段和风险

## 5. Research Quality Gate

最终输出前做一次质量门禁：

| 检查项 | 要求 |
|---|---|
| 版本固定 | 明确 branch、tag、commit 或当前快照 |
| 范围明确 | 明确本次调研范围和不做范围 |
| 源码地图 | 已说明仓库结构、入口、模块和阅读顺序 |
| 主链路 | 至少追踪一条从入口到核心执行的运行链路 |
| 核心抽象 | 已识别关键接口、对象、数据结构和生命周期 |
| 扩展点 | 已识别注册、加载、执行、隔离和失败处理方式 |
| 架构图 | 架构图由源码、文档、测试或示例支撑 |
| 设计思想 | 来自源码结构和设计取舍，不是主观想象 |
| 证据索引 | 关键结论已记录到 evidence-index.md |
| 事实区分 | 区分源码事实、文档事实、测试事实、推断和待确认 |
| 落地建议 | 输出可借鉴、不建议照搬和需要验证的内容 |
| 审查记录 | 复杂调研已完成 research-review.md |

## 6. 调研角色

复杂调研可以按角色思考，不要求机械拆成多人执行。每个角色的完整目标、适用文档、职责和边界见 `roles/`。

| 角色 | 角色目标 | 主要适用文档 |
|---|---|---|
| Research Lead | 把模糊调研意图转化为范围清晰、问题明确、可验收的 Research Brief | `research-brief.md`、`README.md`、`research-review.md` |
| Source Code Analyst | 建立可信的源码入口、目录地图和调用链证据 | `source-map.md`、`runtime-flows.md`、`evidence-index.md` |
| Architecture Analyst | 把源码事实抽象成架构模型和核心抽象关系 | `architecture.md`、`key-abstractions.md`、`extension-points.md` |
| Design Philosophy Analyst | 从源码结构和架构取舍中提炼设计思想 | `design-philosophy.md`、`architecture.md`、`key-abstractions.md` |
| Adoption Architect | 把开源框架设计转化为目标系统的借鉴和重构机会 | `adoption-notes.md`、`refactor-opportunities.md`、`refactor-insights.md` |
| Research Reviewer | 审查调研产物是否可信、完整、可复用 | `research-review.md`、`evidence-index.md` |

## 7. 不推荐的写法

避免：

- 只摘抄官网介绍
- 只列目录，不解释模块关系
- 只画架构图，没有源码证据
- 把推测写成事实
- 用“高内聚低耦合”等空泛词替代具体设计分析
- 不固定版本就给确定结论
- 不区分学习总结和可迁移设计
