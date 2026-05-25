# 扩展点

## 1. Slash Commands

`commands.ts` 维护内置命令、availability requirement、remote safe command 和 bridge safe command，并从 skills、plugins、workflow、commands 等来源并行加载命令。[C-011]

关键机制：

- `loadAllCommands` 并行加载不同命令来源。
- `getCommands` 根据 availability 和 enabled 状态过滤。
- bridge safe command 会允许 prompt command、阻止 local-jsx，并只放行 allowlist 本地命令。[C-011]

适合学习的点：命令扩展不只需要注册表，还需要按运行环境声明哪些命令可见、可调用、可远程调用。

## 2. Skills

Skill 来源包括 managed、user、project、additional dirs、legacy commands、plugin skills、bundled skills 等。[C-011] `loadSkillsDir` 会并行加载、按文件 identity 去重，并把 conditional skills 留给后续激活。[C-011]

Skill 在 Claude Code 中更接近“可触发的能力说明和 prompt 资产”，最终会进入 command/tool 生态，而不是独立于 runtime 的说明文件。

## 3. Plugins

plugin loader 支持 marketplace 和 session-only dirs，校验 manifest，处理 hooks config、重复名称、enable/disable state 和错误收集。[C-011]

plugin command 支持：

- markdown frontmatter 转 Command。
- allowed tools、argument hint/names、when_to_use、version、name、model、effort、disable、userInvocable、shell。
- args、plugin variables、user config、`CLAUDE_SKILL_DIR`、`SESSION_ID` 替换。
- 通过 allowed tool context 执行 shell command。[C-011]

plugin schema 对 marketplace name 有保留名、冒充阻断、非 ASCII 限制和 official GitHub org validation。[C-011]

## 4. MCP

MCP 是最完整的外部能力接入面。`getMcpToolsCommandsAndResources` 会加载所有 MCP configs，区分 disabled/active、本地/远程、auth needs、连接、tools/commands/skills/resources，并用不同并发限制处理本地与远程连接。[C-012]

MCP tool 会被包装成 Claude Code `Tool`：

- schema 和 description 被清洗后暴露给模型。
- readOnly、concurrency、destructive、openWorld hints 会影响工具语义。
- permission passthrough 需要显式 allow rule。
- call path 支持 progress、timeout 和 elicitation retry。[C-012]

## 5. Hooks And Permission Requests

tool execution 在真正调用工具前运行 PreToolUse hooks；hook 可以修改 messages、permission、input，也可以 prevent、stop 或添加 context。[C-010] permission context 又支持 hook allow、user allow、deny abort、decision persistence 和日志。[C-010]

交互式 permission handler 会同时协调 hook、classifier、用户弹窗、bridge callback 等来源，并用 resolve-once 防止重复决策。[C-010]

## 6. Model/API Providers

`getAnthropicClient` 支持 Direct API、Bedrock、Foundry、Vertex 等环境变量路径，并设置 session、container、remote、client app 等默认 headers。[C-014] query layer 通过 `QueryDeps` 注入模型调用函数，核心 loop 不直接绑定到某个客户端构造细节。[C-014]

## 7. Remote And Bridge Channels

bridge 通过 `createSessionSpawner` 启动 child CLI，传入 `--print --sdk-url --session-id --input-format stream-json --output-format stream-json`，并使用 stdout NDJSON 解析 activity 和 permission request。[C-015]

remote session 使用 WebSocket 订阅消息，HTTP POST 发送用户消息，pending map 管理 permission request/response。[C-015]

direct-connect manager 使用 WebSocket 收消息，把 `control_request can_use_tool` 转成 permission callback，把 SDK messages 转发给上层，并用 `stream-json` 格式发送用户消息。[C-015]

## 8. 扩展边界总结

Claude Code 的扩展机制不是“一切都是 plugin”。它把扩展拆成多种 contract：

- 用户命令：Command
- 能力说明：Skill
- 外部能力源：MCP
- 工具执行单元：Tool
- 权限前置控制：Hook/PermissionRequest
- 远程会话：structured message protocol

这种拆分让每类扩展可以有自己的安全边界和加载策略，同时在 query runtime 内统一成工具、命令、消息和权限事件。
