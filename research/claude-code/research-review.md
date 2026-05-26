# 调研审查

## 1. 覆盖检查

| 项 | 状态 | 说明 |
|---|---|---|
| 版本信息 | 已覆盖 | 本地路径、remote、branch、commit 和调研日期已记录。[C-002] |
| 快照属性 | 已覆盖 | README 明确这是非官方 security research snapshot。[C-001] |
| 外部资料 | 已覆盖 | external-research.md 已覆盖 Claude Code 官方 overview/how-it-works/permissions/MCP/skills/hooks 文档。 |
| 研究问题 | 已覆盖 | research-questions.md 已记录 RQ-CC-001 到 RQ-CC-005，并区分官方当前行为和本地 snapshot。 |
| Source map | 已覆盖 | 已整理入口、核心模块、扩展模块、状态和远程通道。 |
| 主运行流 | 已覆盖 | CLI 启动、REPL turn、QueryEngine、queryLoop、tool execution、MCP、session、remote flows 已追踪。 |
| 可视化架构图 | 已覆盖 | visual/architecture.html 负责渲染，visual/architecture.visual.js 承接图数据与证据链接；visual/evidence.html 提供可点击证据查看。 |
| 核心抽象 | 已覆盖 | QueryEngine、queryLoop、Tool、ToolUseContext、PermissionContext、Command、Skill、Plugin、MCP、Session。 |
| 扩展点 | 已覆盖 | Commands、Skills、Plugins、MCP、Hooks、Model/API providers、Remote/Bridge。 |
| 设计思想 | 已覆盖 | 模式归一、trust 前置、Tool 协议、权限流水线、扩展分层、prompt-cache 稳定性。 |
| 证据索引 | 已覆盖 | 15 条本地证据、5 条外部资料证据、4 条推断链路。 |
| 运行验证 | 未覆盖 | 本轮未启动 CLI、未跑测试、未访问模型 API。 |

## 2. 置信度

高置信度：

- 仓库属性和 snapshot 定位来自 README。[C-001]
- CLI 入口、命令面、setup/trust、REPL、QueryEngine、queryLoop、Tool、permissions、MCP、session 和 remote 通道均有明确源码证据。[C-003]-[C-015]

中置信度：

- “多入口收敛到同一 conversation runtime” 是由入口、REPL、SDK、bridge、remote 和 query 层共同推断得出，仍需要运行样例验证。[INF-001]
- “Tool contract 是共同协议层” 源码证据充分，但不同 tool 的具体行为仍需抽样。[INF-002]

低置信度或未确认：

- direct-connect server-side 内部机制，因为当前快照缺少部分被入口引用的文件。[C-004][C-015]
- 真实 Anthropic/Claude 平台侧协议和当前官方行为只能由官方 docs 说明，不能由本地非官方 snapshot 完整证明。
- 性能、错误恢复、权限交互体验和模型成本表现。

## 3. 质量风险

- 本地仓库有未跟踪 `.gitignore`、`.idea/`、`docs/`，但本轮只读取源码和 README，没有依赖这些未跟踪内容作为结论。
- `src/main.tsx` 文件很大，入口细节多；本轮抓取的是架构关键段落，非逐行审计。
- React/Ink 部分源码存在编译器痕迹，本轮没有深入每个 UI component 的渲染状态。
- 部分结论是静态推断，已经在 `evidence-index.md` 中标记为 INF。
- 外部资料已补充官方产品语义，但所有源码实现结论仍限定为本地 snapshot。

## 4. 下一步深挖建议

- 抽样 5 个代表性 built-in tools：`Bash`、`Read`、`Edit`、`Write`、`Agent`。
- 深入 `src/services/api/claude.ts`，补齐模型 streaming、fallback、token limit 和 error taxonomy。
- 跑一个最小 headless `--print --output-format stream-json` 示例，验证 `QueryEngine`、transcript 和 tool permission 的 live behavior。
- 抽样一个 plugin command、一个 skill、一个 MCP tool，验证它们进入 tool/command pool 的差异。
