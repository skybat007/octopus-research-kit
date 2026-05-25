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
3. 生成 `source-map.md`。
4. 追踪一条主运行链路，生成 `runtime-flows.md`。
5. 提炼核心抽象，生成 `key-abstractions.md`。
6. 生成 `architecture.md` 和 `design-philosophy.md`。
7. 记录证据到 `evidence-index.md`。
8. 输出 `adoption-notes.md`。

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
请从源码入口追踪一条主链路，输出 runtime-flows.md，并把每个关键步骤绑定到源码位置。
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
- 是否有源码地图
- 是否至少追踪一条主运行链路
- 是否识别核心抽象
- 是否识别扩展点
- 架构图是否有源码证据
- 设计思想是否来自源码结构和设计取舍
- 关键结论是否进入 `evidence-index.md`
- 是否区分事实、推断和待确认
- 是否输出可学习、可借鉴和不适合照搬的设计判断
