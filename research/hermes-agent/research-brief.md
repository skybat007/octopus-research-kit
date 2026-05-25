# Research Brief

## 1. 调研对象

| 项 | 内容 |
|---|---|
| 项目 | Hermes Agent |
| 本地路径 | `/Users/cheng/IdeaProjects/hermes-agent` |
| 代码来源 | `https://github.com/NousResearch/hermes-agent.git` |
| 快照 | branch `main`, commit `cae7537359c0ba8fceedc0a6423a4d9f30972100` |
| 包版本 | `hermes-agent` `0.14.0` |
| 语言/运行时 | Python `>=3.11`，部分 TUI/Web/Browser 相关能力使用 Node 生态 |
| 官方文档 | GitHub README, https://hermes-agent.nousresearch.com/docs |
| 外部资料范围 | 官方 GitHub、官方 docs、Release 文件入口；本轮未采用独立第三方文章 |

## 2. 调研目标

本轮目标是理解 Hermes Agent 作为开源 Agent 框架的核心技术结构，形成可复用的学习资料：

- 它如何把 CLI、TUI、消息网关、ACP 和 cron 接入同一个 Agent runtime。
- 它如何组织模型 Provider、工具、插件、记忆、会话和上下文压缩。
- 它如何处理多渠道消息、session identity、流式输出和投递边界。
- 它有哪些设计取舍值得学习，哪些复杂度需要保持警惕。

## 3. 核心问题

| 编号 | 问题 | 输出位置 |
|---|---|---|
| Q1 | 项目主入口、运行时入口和包结构是什么？ | source-map.md |
| Q2 | `AIAgent` 与 `run_conversation` 如何承接多入口请求？ | architecture.md, runtime-flows.md |
| Q3 | 工具如何注册、过滤、暴露给模型并执行？ | key-abstractions.md, runtime-flows.md |
| Q4 | 插件、Provider、Memory、Platform 扩展点如何分层？ | extension-points.md |
| Q5 | Gateway 如何把外部消息转成 Agent turn，并处理 session 与投递？ | runtime-flows.md |
| Q6 | 设计思想里哪些适合用于学习 Agent 框架？ | design-philosophy.md, adoption-notes.md |

## 4. 范围

本轮覆盖：

- 仓库结构、入口脚本、安装入口和主要目录。
- `AIAgent` 初始化、会话循环、工具调用、上下文压缩、记忆和插件 hook。
- `ToolRegistry`、toolset、plugin tool、slash command registry。
- Provider Profile、Memory Provider、Gateway Platform 插件。
- Gateway message pipeline、session model、adapter base、TUI gateway、cron scheduler。

本轮不覆盖：

- 每个具体工具实现的功能细节。
- 每个平台 Adapter 的认证协议和消息 API 细节。
- Web/TUI 前端组件层设计。
- 性能指标、压测和真实运行日志。
- 与业务系统结合的具体方案。

## 5. 交付物

| 文档 | 验收点 |
|---|---|
| README.md | 能快速理解项目定位和主要结论 |
| external-research.md | 记录官方资料、协作资料、外部观点和源码验证关系 |
| research-questions.md | 将外部观点和用户目标转成源码验证问题 |
| source-map.md | 能指导下一位阅读者按入口和模块继续深挖 |
| architecture.md | 能说明模块边界和依赖方向 |
| key-abstractions.md | 能解释关键类/结构的职责和生命周期 |
| extension-points.md | 能说明扩展点的注册、发现、执行边界 |
| runtime-flows.md | 至少追踪 CLI、Gateway、Tool Call 三条主流程 |
| design-philosophy.md | 提炼可学习的架构思想和代价 |
| comparison.md | 给出同类项目对照维度和初步观察 |
| adoption-notes.md | 形成学习借鉴清单 |
| evidence-index.md | 每个核心结论可回溯到官方资料、源码、测试、协作资料或社区资料 |
| research-review.md | 标注覆盖情况、风险和下一步证据缺口 |

## 6. 方法

- 先固定代码快照和入口信息。
- 先补官方资料调研，将关键外部观点转成源码验证问题。
- 使用 `rg`、`find`、`nl` 做静态源码扫描。
- 对关键结论建立证据编号，避免只凭印象描述。
- 区分官方事实、源码事实、仓库文档事实、协作事实、社区事实和推断。
- 对未验证的运行行为明确标注为待确认。
