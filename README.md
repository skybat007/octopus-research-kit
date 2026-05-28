# Octopus Research Kit

证据化技术调研工具箱：用结构化模板、证据索引、自动校验和可视化 Dashboard，把源码阅读、框架分析、技术选型和架构研究沉淀成可复查、可复用、可分享的研究资产。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js >= 18](https://img.shields.io/badge/Node.js-%3E%3D18-339933.svg)](package.json)
[![Research Artifacts](https://img.shields.io/badge/research-evidence--backed-2563eb.svg)](research/)

![Octopus Research Kit Dashboard](assets/research-dashboard.png)

![A2UI 调研项目 Dashboard](assets/a2ui-dashboard.png)

## 适合谁

- 想系统研究一个陌生技术、开源框架或代码库，而不是只收藏几篇文章的人。
- 需要向团队解释技术架构、核心抽象、扩展点和设计取舍的人。
- 希望让 AI Agent 协助技术调研，但又要求结论能回到证据的人。
- 想把一次调研沉淀成后续可以复用的模板、流程和质量门禁的人。

## 它解决什么问题

很多技术调研最后会散落在聊天记录、临时笔记和截图里，难以复查，也难以传承。这个仓库提供一套固定工作流：

1. 用 `research-brief.md` 明确调研目标、边界和交付物。
2. 用 `external-research.md` 和 `research-questions.md` 把外部资料转成源码验证问题。
3. 用 `source-map.md`、`architecture.md`、`runtime-flows.md` 等文档拆解源码结构和核心流程。
4. 用 `evidence-index.md` 把重要结论绑定到官方文档、源码、测试、配置、Issue、PR、Release Note 或明确标注的推断。
5. 用 Dashboard、HTML 文档阅读器和可视化架构图降低阅读成本。
6. 用脚本检查目录结构、证据完整性、隐私泄漏和发布风险。

## 你可以得到什么

| 产物 | 用途 |
|---|---|
| Research Spec | 定义一次调研的目标、范围、问题和完成标准 |
| Research Skill | 固化 Agent 执行调研时的步骤、证据标准和输出契约 |
| Markdown 文档集 | 保存架构、抽象、流程、扩展点、设计思想和采纳建议 |
| Evidence Index | 把关键结论映射到来源、版本、源码位置或外部资料 |
| Dashboard | 统一浏览 `research/` 下的调研项目 |
| Visual Architecture | 用 HTML/JS 展示 Markdown 难以表达的架构关系 |
| Release Checks | 发布前检查结构、证据、隐私和空白字符问题 |

## 示例调研

当前仓库包含以下调研样例，可从 [research/index.html](research/index.html) 进入统一 Dashboard：

| 调研对象 | 说明 |
|---|---|
| [OpenClaw](research/openclaw/README.md) | 本地优先个人 AI Assistant / Gateway 架构调研 |
| [Hermes Agent](research/hermes-agent/README.md) | 多入口 Agent Runtime、工具系统、插件和 Gateway 调研 |
| [A2UI](research/A2UI/README.md) | Agent-to-UI 协议、renderer、catalog 和 Python SDK 调研 |
| [example-framework](research/example-framework/README.md) | 新调研目录的结构示例 |

## 快速开始

```bash
npm install
npm test
```

创建一次新调研：

```bash
mkdir -p research/<framework-name>
cp docs/tech-research-guide/templates/* research/<framework-name>/
```

然后从 `research/<framework-name>/research-brief.md` 开始，先写清楚调研对象、版本、范围、关键问题和交付物。

更完整的流程见：

- [QUICKSTART.md](QUICKSTART.md)
- [技术调研规范](docs/tech-research-guide/TECH_RESEARCH_GUIDE.md)
- [AI 技术调研快速开始](docs/tech-research-guide/AI_TECH_RESEARCH_QUICKSTART.md)
- [模板目录](docs/tech-research-guide/templates/)
- [开源技术调研 Skill](skills/open-source-tech-research/SKILL.md)

## 推荐流程

1. 明确调研对象、版本、源码来源和不做范围。
2. 收集官方资料、Release Notes、Issue/PR 和高质量社区资料。
3. 把外部资料中的判断转成源码验证问题。
4. 先做源码地图，再拆核心抽象、运行流程、扩展点和设计思想。
5. 每个重要结论都写入 `evidence-index.md`，标注证据类型和来源。
6. 生成 Dashboard、证据解释页和可视化架构图。
7. 在 `adoption-notes.md` 中沉淀可借鉴模式、适用前提和误读风险。
8. 发布前运行校验脚本。

## 目录结构

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
├── docs/
│   └── tech-research-guide/
│       ├── roles/
│       ├── scripts/
│       └── templates/
├── research/
│   ├── index.html
│   └── <framework-name>/
├── skills/
│   └── open-source-tech-research/
├── CONTRIBUTING.md
├── LICENSE
├── QUICKSTART.md
└── README.md
```

## 发布前检查

公开发布前建议至少执行：

```bash
npm run research:sanitize
npm run research:dashboard
npm run research:validate:strict
npm run release:check
git diff --check
```

这些检查用于确认调研产物结构完整、Dashboard 可重新生成、Mermaid 常见语法问题可被发现，并避免把个人本机路径、常见令牌或私钥形态误提交到公开仓库。

## 贡献

欢迎贡献新的调研模板、质量门禁、示例调研、脚本改进和文档修正。请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)，并保证重要结论有可追溯证据。

如果你希望新增某个开源项目的调研，可以通过 Issue 描述调研对象、版本、关注问题和预期产物。

## 支持项目

如果这套技术调研工作台对你有帮助，欢迎在 GitHub 给本仓库点一个 Star。

Star 不只是鼓励，也能帮助更多需要源码调研、架构梳理和证据化技术文档的人更容易发现这个项目。

## 许可证

本仓库以 [MIT License](LICENSE) 发布，可用于个人学习、团队内部方法沉淀和商业项目中的调研工作流改造。

调研过程中引用的第三方开源项目、官方文档、源码片段或外部资料仍然遵循其各自许可证和使用条款；本仓库不会重新授权这些第三方内容。
