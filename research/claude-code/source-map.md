# 源码地图

## 1. 快照定位

仓库 README 将该项目定位为 Claude Code 的 source snapshot，用于安全研究；它说明快照来自 npm 包中公开可访问的 source map，并明确不是 Anthropic 官方 repository。[C-001] 因此，本轮源码阅读只代表本地快照，不代表官方当前实现。

本地快照：

| 项 | 内容 |
|---|---|
| 路径 | `claude-code` |
| branch | `main` |
| commit | `4b9d30f7953273e567a18eb819f4eddd45fcc877` |
| remote | `https://github.com/jarmuine/claude-code.git` |
| `src` 文件数 | 约 1902 |
| source-inventory | `references/source-inventory.json`，1915 个文件 |

## 2. 顶层阅读入口

| 文件/目录 | 作用 |
|---|---|
| `README.md` | 快照来源、范围、目录说明和用途声明 |
| `src/main.tsx` | CLI 主入口、Commander 命令注册、运行模式路由 |
| `src/setup.ts` | 运行环境初始化、cwd、UDS messaging、worktree 和终端恢复 |
| `src/interactiveHelpers.tsx` | React/Ink 渲染启动、trust/API key/MCP approvals/onboarding |
| `src/replLauncher.tsx` | 动态加载 `App` 和 `REPL` |
| `src/screens/REPL.tsx` | 交互式 REPL 状态、工具上下文、query 发起 |
| `src/QueryEngine.ts` | 会话级 query 生命周期和状态管理 |
| `src/query.ts` | turn 内主循环、模型调用、工具调用、compact、fallback |

## 3. 核心模块地图

| 领域 | 关键位置 | 说明 |
|---|---|---|
| 入口和命令 | `src/main.tsx`, `src/commands.ts` | 主命令、子命令、Slash command、Skill command 加载 |
| UI/REPL | `src/screens/REPL.tsx`, `src/components`, `src/ink`, `src/hooks` | React/Ink 交互界面、hooks、权限弹窗和输入状态 |
| Query | `src/QueryEngine.ts`, `src/query.ts`, `src/query/deps.ts` | 会话状态、turn 编排、依赖注入 |
| Tool | `src/Tool.ts`, `src/tools.ts`, `src/services/tools` | Tool contract、工具池、执行、权限和并发 |
| Permissions | `src/hooks/useCanUseTool.tsx`, `src/hooks/toolPermission` | 权限上下文、交互处理、hook 和 bridge callback |
| Skills | `src/skills`, `src/skills/loadSkillsDir.ts` | Skill discovery、Skill command、动态加载 |
| Plugins | `src/plugins`, `src/utils/plugins` | plugin manifest、command、agent、hook、marketplace |
| MCP | `src/services/mcp` | MCP client、tool/resource/command/skill discovery、远程工具调用 |
| Session | `src/bootstrap/state.ts`, `src/utils/sessionStorage.ts` | session id、project dir、transcript、remote persistence |
| Context/API | `src/context.ts`, `src/services/api` | git/user/system context、模型 client、provider 环境变量 |
| Remote | `src/bridge`, `src/remote`, `src/server` | bridge worker、remote CCR session、direct-connect client pieces |

## 4. 推荐阅读顺序

1. `README.md`：先确认这是 security research snapshot，而不是官方源码仓库。[C-001]
2. `src/main.tsx`：理解运行模式路由、Commander surface 和子命令集合。[C-003][C-004]
3. `src/setup.ts` + `src/interactiveHelpers.tsx`：理解运行前边界、trust、API key 和 MCP approvals。[C-005]
4. `src/replLauncher.tsx` + `src/screens/REPL.tsx`：理解交互式用户 turn 如何进入 query。[C-006]
5. `src/QueryEngine.ts` + `src/query.ts`：理解会话状态和 turn 内模型/工具编排。[C-007][C-008]
6. `src/Tool.ts` + `src/tools.ts` + `src/services/tools`：理解 tool contract、pool assembly、执行和权限。[C-009][C-010]
7. `src/commands.ts` + `src/utils/plugins` + `src/skills`：理解命令、Skill 和 Plugin 扩展面。[C-011]
8. `src/services/mcp`：理解 MCP 如何映射成 Tool contract。[C-012]
9. `src/bootstrap/state.ts` + `src/utils/sessionStorage.ts`：理解 session 和 transcript。[C-013]
10. `src/bridge` + `src/remote` + `src/server`：理解远程会话通道。[C-015]

## 5. 快照缺口

`src/main.tsx` 的 direct-connect `server` 子命令会动态引用 `server/server.js`、`sessionManager.js`、`backends/dangerousBackend.js` 等 server-side 文件，但本地 `src/server` 目录只包含 `directConnectManager.ts`、`types.ts`、`createDirectConnectSession.ts`。因此 direct-connect 的 client-side 和入口引用可以分析，server-side 内部不能从当前快照完整确认。[C-004][C-015]
