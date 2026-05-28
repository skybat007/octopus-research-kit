# External Research

## 本轮策略

本轮进行了实时网络检索。检索日期：2026-05-28。

## 检索范围

| 类型 | 覆盖范围 |
|---|---|
| 官方资料 | `a2ui.org` 官网、Introduction、v0.9/v0.10 protocol、Roadmap、Renderers、Client Setup、Ecosystem Renderers |
| 官方仓库 | `github.com/google/A2UI` 仓库首页、公开状态、issue/PR 数量、stars/forks、quickstart/roadmap 链接 |
| 集成方资料 | CrewAI A2UI 文档、CopilotKit A2UI 文档 |
| 社区/第三方资料 | 本轮只用于发现生态入口；核心结论不依赖非官方聚合站点 |

## 1. 官方资料

| 资料 | 链接或路径 | 主要内容 | 对本次调研的价值 | 可信度等级 |
|---|---|---|---|---|
| A2UI 官网首页 | `https://a2ui.org/` | A2UI 让 agent 生成可原生渲染的交互 UI，强调不执行任意代码。 | 确认官方定位。 | A |
| What is A2UI | `https://a2ui.org/introduction/what-is-a2ui/` | A2UI 是声明式 UI protocol；agent 生成 JSON，经任意 transport 传递，client 使用本地组件渲染；核心价值是安全、native feel、portability。 | 与本地 README/intro 文档互证。 | A |
| A2UI Protocol v0.9 | `https://a2ui.org/specification/v0.9-a2ui/` | v0.9 是 draft；定义 `createSurface`、`updateComponents`、`updateDataModel`、`deleteSurface`；transport contract；prompt-generate-validate loop。 | 与本地 `specification/v0_9` 对齐，确认实现主线。 | A |
| A2UI Protocol v0.10 | `https://a2ui.org/specification/v0_10/docs/a2ui_protocol/` | v0.10 draft；保留 streaming JSON 协议主轴，增加/整理 capabilities、metadata、action response 等内容。 | 说明 v0.10 已在线发布为 draft，但本轮源码重点仍是 v0.9。 | A |
| Roadmap | `https://a2ui.org/roadmap/` | v0.9 标为 current、feature complete、supported；v0.10/v1.0 draft；React/Lit/Angular/Flutter stable；Q4 2026 目标 v1.0。 | 补充当前官方状态和版本规划。 | A |
| Renderers Reference | `https://a2ui.org/reference/renderers/` | Renderer 负责消息 buffering/lifecycle/render/action；React/Lit/Angular/Flutter 为 maintained renderers；合规 renderer 要支持 adjacency list、data binding、incremental messages、user actions。 | 与 `web_core` 和 React renderer 源码验证相连。 | A |
| Client Setup | `https://a2ui.org/guides/client-setup/` | React/Lit/Angular/Flutter 支持 v0.8/v0.9；web renderers 共享 `@a2ui/web_core`；custom catalog 是 agent 与 renderer 的契约。 | 强化 `web_core` 和 catalog 是架构中心的结论。 | A |
| Ecosystem Renderers | `https://a2ui.org/ecosystem/renderers/` | 列出社区 renderer、相关项目和提交 renderer 的方式；提醒社区 renderer 由各自作者维护。 | 判断生态扩展性与成熟度边界。 | A |
| GitHub 仓库 | `https://github.com/google/A2UI` | 公开仓库，Apache-2.0；检索时显示约 15k stars、1.2k forks、196 issues、104 pull requests；README 链接 quickstart、composer、theater、roadmap。 | 版本、维护活跃度和生态关注度背景。 | A/B |

## 2. 项目协作与集成资料

| 资料 | 链接或路径 | 主要观点 | 时间/版本 | 可信度等级 | 是否需要源码验证 |
|---|---|---|---|---|---|
| CrewAI A2UI 文档 | `https://docs.crewai.com/en/learn/a2ui` | CrewAI 把 A2UI 描述为 A2A extension，server 扫描 agent 输出并包装为 `application/json+a2ui` DataPart，client 注入 A2UI instructions/catalog 并跟踪 surface state。 | 页面显示 CrewAI v1.14.0；检索日期 2026-05-28 | B | 是，本地 SDK/A2A parts 已验证类似机制 |
| CopilotKit A2UI 文档 | `https://docs.copilotkit.ai/google-adk/generative-ui/a2ui` | CopilotKit 称 A2UI 是由 Google 牵头、CopilotKit 作为 launch/design partner 的 declarative Generative UI specification，并区分 dynamic schema 与 fixed schema。 | 检索日期 2026-05-28 | B | 部分需要，仓库中有 AG UI/CopilotKit quickstart 链接但未运行 |

## 3. 社区与第三方资料

| 资料 | 作者/来源 | 主要观点 | 可信度等级 | 是否需要源码验证 |
|---|---|---|---|---|
| A2UI ecosystem renderer 列表 | A2UI 官方生态页 | 社区已出现 Android、React Native、SwiftUI、Vue、ShadCN 等 renderer 或相关项目，但维护状态需看各项目。 | A/B | 是，只作为生态背景 |
| 非官方聚合站点与 Reddit 讨论 | 社区 | 多数重复“A2UI 是 Google 开源的 agent UI protocol”这一定位。 | C | 未用于核心结论 |

## 4. 外部资料中的关键观点

| 外部观点 | 来源 | 源码验证问题 | 验证状态 | 结论 |
|---|---|---|---|---|
| A2UI 是 protocol，不是通用前端 framework；agent 发送 JSON，client 原生渲染。 | What is A2UI、README | 本地 README、intro docs、renderer docs 是否一致？ | 已验证 | 一致，且源码中 renderer/catalog 也体现此边界。 |
| v0.9 是当前实现主线，但线上规范页仍标 Draft；Roadmap 又说 current/feature complete/supported。 | v0.9 protocol、Roadmap | 本地源码是否主要实现 v0.9？ | 已验证 | 本地 renderer/SDK 主实现围绕 v0.9；状态口径需同时记录。 |
| v0.10 已作为 draft 文档在线出现。 | v0.10 protocol | 本地是否有 v0.10 目录？ | 已验证 | 本地有 `specification/v0_10`，但本轮未展开源码级调研。 |
| Web renderers 共享 `@a2ui/web_core`。 | Client Setup | 本地 `renderers/web_core` 是否承载 message/state/binding？ | 已验证 | 已在 `MessageProcessor`、`DataModel`、`GenericBinder` 中验证。 |
| React/Lit/Angular/Flutter 是 maintained/stable renderer。 | Roadmap、Renderers、Client Setup | 仓库中是否存在相关 renderer/package？ | 部分验证 | React/web_core 已深入验证；Lit/Angular/Flutter 仅做结构确认。 |
| Custom catalog 是 agent 与 renderer 的契约，生产应定义自己的组件/函数。 | Client Setup、v0.9 protocol | 本地 Catalog runtime 和 SDK 是否支持 custom catalog？ | 已验证 | `Catalog`、`assemble_catalog.py`、`A2uiSchemaManager` 支持该模式。 |
| A2A、AG UI、SSE、WebSocket、REST/MCP 可作为 transport。 | v0.9/v0.10 protocol | 本地 SDK 是否有 A2A converter/parts？ | 已验证 | A2A parts/converters 已验证；AG UI/REST/MCP 未运行。 |
| CrewAI/CopilotKit 已有 A2UI 集成文档。 | CrewAI、CopilotKit | A2UI 仓库是否提供对应桥接或样例？ | 部分验证 | 本地有 A2A/ADK/CopilotKit quickstart 链接；未跑第三方集成。 |

## 5. 外部资料与源码不一致或口径变化

| 外部资料说法 | 本地源码/文档情况 | 判断 | 后续处理 |
|---|---|---|---|
| Roadmap：v0.9 current、feature complete、supported。 | 本地 README 仍写 v0.8 public preview/evolving；v0.9 protocol 文档标 Draft。 | 官方当前状态与仓库内旧 README/规范页状态口径并存。 | 报告中改为“双口径”：实现分析以固定 commit 为准，当前状态以官网 Roadmap 补充。 |
| Roadmap：React renderer stable。 | 本地 React package 和 tests 存在，且 package 版本为 `0.10.0`。 | 与源码结构基本一致。 | React 深入分析已完成。 |
| Ecosystem：多社区 renderer。 | 本地仓库不包含这些社区项目源码。 | 只能作为生态背景，不作为实现结论。 | 采纳建议里标记需另行验证维护状态。 |
| CopilotKit 文档展示的操作名里混用旧/新协议命名。 | 本地 v0.9 规范使用 `createSurface`、`updateComponents`、`updateDataModel`、`deleteSurface`。 | 第三方集成可能兼容多版本或文档未完全同步。 | 核心协议结论以 A2UI 官方规范和本地源码为准。 |

## 6. 资料边界

- 核心实现分析以固定源码快照 `e05dd9699dea21ba832059acb680f71022dd5a77` 为准。
- GitHub issue、PR、discussion 只做入口和数量级确认，未逐条 triage。
- CrewAI/CopilotKit 资料用于生态背景和集成方向，未运行第三方集成样例。
- v0.10/v1.0 只作为版本规划背景，本轮不做源码级差异分析。
