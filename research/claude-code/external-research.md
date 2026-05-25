# 外部资料调研

## 1. 官方资料

| 资料 | 链接或路径 | 主要内容 | 对本次调研的价值 | 可信度等级 |
|---|---|---|---|---|
| Claude Code Overview | https://code.claude.com/docs/en/overview | Claude Code 是 agentic coding tool，可在 terminal、IDE、desktop、browser 等界面使用 | 提供官方产品定位，用于与本地 source snapshot 区分 | A |
| How Claude Code works | https://code.claude.com/docs/en/how-claude-code-works | agentic loop、tools、sessions、context、permissions、interfaces | 将官方 agent loop 与本地 `queryLoop`、Tool、session 证据互证 | A |
| Configure permissions | https://code.claude.com/docs/en/permissions | permission rules、modes、deny/ask/allow 优先级、managed settings | 验证本地 permission pipeline 的产品语义 | A |
| MCP docs | https://code.claude.com/docs/en/mcp | MCP servers 连接外部工具、resources、tool search、managed config | 验证本地 MCP client/tool wrapper 设计 | A |
| Skills docs | https://code.claude.com/docs/en/skills | Skills、custom commands、bundled skills、on-demand loading、frontmatter | 验证本地 commands/skills/plugin skill 加载 | A |
| Hooks reference | https://code.claude.com/docs/en/hooks | hook events、configuration、PreToolUse、PermissionRequest、PostToolUse、agent hooks | 验证本地 hook/permission/event 体系 | A |

## 2. 项目协作资料

| 资料 | 链接或路径 | 主要观点 | 时间/版本 | 可信度等级 | 是否需要源码验证 |
|---|---|---|---|---|---|
| 本地 source snapshot README | `/Users/cheng/IdeaProjects/claude-code/README.md` | 声明该仓库不是官方 Anthropic repo，而是 security research source snapshot | 本地快照，2026-05-25 | S/A | 已验证 |
| Snapshot GitHub 仓库 | https://github.com/jarmuine/claude-code | 公开镜像/快照来源，不等同官方当前源码 | 2026-05-25 查询 | C | 是 |

## 3. 社区与第三方资料

本轮只把 `jarmuine/claude-code` 作为非官方 source snapshot 背景，不使用第三方分析文章支撑核心结论。官方当前行为以 Claude Code docs 为准，本地实现结论以 source snapshot 为准。

## 4. 外部资料中的关键观点

### EXT-CC-001: Claude Code 是跨界面的 agentic coding tool

来源：

- Claude Code Overview
- How Claude Code works

说明：

- 官方资料说明 Claude Code 可在 terminal、IDE、desktop、browser 等界面运行，底层 agentic loop、tools 和 capabilities 保持一致。

是否已被源码验证：

- 本地快照验证了 CLI、REPL、headless SDK、remote、bridge、direct-connect 等入口，但官方当前 web/desktop/IDE 行为不能由该 snapshot 完整证明。

对应源码证据：

- [evidence-index.md](./evidence-index.md) `C-003`, `C-004`, `C-006`, `C-015`, `INF-001`

### EXT-CC-002: Agentic loop 由上下文、动作和验证循环组成

来源：

- How Claude Code works

说明：

- 官方资料将 loop 描述为 gather context、take action、verify results，工具结果反馈给下一步决策。

是否已被源码验证：

- 已由 `queryLoop`、Tool execution、context 和 transcript 证据验证主要结构。

对应源码证据：

- `C-006`, `C-007`, `C-008`, `C-009`, `C-010`, `C-013`

### EXT-CC-003: 权限由规则、模式和 hooks 共同控制

来源：

- Configure permissions
- Hooks reference

说明：

- 官方资料说明 deny/ask/allow rules、permission modes、PreToolUse hook 都参与权限控制。

是否已被源码验证：

- 已由 `ToolPermissionContext`、`useCanUseTool`、PermissionContext、interactiveHandler 和 tool execution 证据验证。

对应源码证据：

- `C-009`, `C-010`

### EXT-CC-004: MCP、Skills、Hooks 是不同扩展层

来源：

- MCP docs
- Skills docs
- Extend Claude Code
- Hooks reference

说明：

- 官方资料区分 MCP 外部工具连接、Skill 按需加载知识/流程、Hook 生命周期自动化。

是否已被源码验证：

- 已验证 MCP client、skills/commands/plugin command 和 hooks/permission event 的本地实现；Plugin 与官方当前 product 行为仍可能随版本变化。

对应源码证据：

- `C-011`, `C-012`, `C-010`, `INF-003`

### EXT-CC-005: Session 是本地 JSONL 可恢复记录

来源：

- How Claude Code works

说明：

- 官方资料说明 Claude Code 会把会话写到本地 JSONL，用于 rewind、resume、fork。

是否已被源码验证：

- 已由 sessionStorage 和 bootstrap state 证据验证 snapshot 中的 session/transcript 结构。

对应源码证据：

- `C-013`, `INF-004`

## 5. 外部资料与源码不一致的地方

| 外部资料说法 | 源码实际情况 | 判断 | 后续处理 |
|---|---|---|---|
| 官方 docs 描述当前 Claude Code 产品 | 本地仓库是非官方 source snapshot，且缺少部分 direct-connect server-side 文件 | 不能把 snapshot 视作官方当前实现 | 所有源码结论限定为本地快照 |
| 官方 docs 覆盖 web/desktop/IDE/Slack/CI 等界面 | 本轮源码重点验证 CLI/REPL/headless/bridge/direct-connect/remote client pieces | 部分验证 | 对官方当前多界面行为保持外部事实，不写成源码事实 |
| 官方 docs 说明 hooks/skills/MCP 当前能力 | 本地 snapshot 中相关实现存在，但可能与当前发布版本有差异 | 大体互证，仍需版本差异检查 | 若要追最新行为，应补官方 changelog/release 差异 |

## 6. 对调研方向的影响

外部资料帮助确认本轮应重点保留：

- `queryLoop` 与官方 agentic loop 的对应关系
- Tool contract 与权限模式的真实实现
- MCP/Skills/Hooks 的分层扩展模型
- Session/transcript 与 resume/fork 语义
- 非官方 snapshot 与官方产品行为的边界
