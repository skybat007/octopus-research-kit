# External Research

## 1. 官方资料

| 资料 | 链接或路径 | 主要内容 | 对本次调研的价值 | 可信度等级 |
|---|---|---|---|---|
| Gateway architecture | https://docs.openclaw.ai/architecture | Gateway 是长期运行控制面，连接消息面、控制面客户端和节点 | 确认 OpenClaw 的产品核心不是单一 Agent loop，而是 Gateway control plane | A |
| Agent runtime | https://docs.openclaw.ai/concepts/agent | 单 Gateway 内嵌 agent runtime、workspace、bootstrap files、session transcript、Pi core 边界 | 生成 Agent runtime 与 OpenClaw-owned layer 的源码验证问题 | A |
| Session management | https://docs.openclaw.ai/concepts/session | 按 DM、group、room、cron、webhook 路由 session，强调 DM isolation 和 Gateway-owned state | 验证会话隔离、session store、transcript 设计 | A |
| Multi-agent routing | https://docs.openclaw.ai/concepts/multi-agent | 多 isolated agents，分别拥有 workspace、agentDir、auth profiles、session history | 验证多 Agent 是否是一等模型而非简单 persona | A |
| Plugin internals | https://docs.openclaw.ai/plugins/architecture | capability model、manifest/discovery、enablement/validation、runtime loading、surface consumption | 验证 plugin capability ownership 和 loader 分层 | A |
| 本地仓库 README/VISION/docs | `/Users/cheng/IdeaProjects/openclaw/README.md`, `VISION.md`, `docs/**` | 产品定位、安全边界、插件优先、Gateway/Agent/Session/Plugin 概念文档 | 已在第一版源码调研中作为仓库文档证据 | S/A |

## 2. 项目协作资料

| 资料 | 链接或路径 | 主要观点 | 时间/版本 | 可信度等级 | 是否需要源码验证 |
|---|---|---|---|---|---|
| GitHub repository | https://github.com/openclaw/openclaw | 官方代码和 docs 编辑源 | 2026-05-25 查询 | A/B | 是 |
| Plugin docs edit source links | OpenClaw docs 页面中的 GitHub edit source | docs 与源码仓库同源 | 2026-05-25 查询 | B | 是 |

## 3. 社区与第三方资料

本轮未采用独立第三方文章作为结论依据。OpenClaw 的外部资料主要来自官方文档站和本地源码仓库；社区资料只作为后续横向对比或实践风险补充入口。

## 4. 外部资料中的关键观点

### EXT-OC-001: Gateway 是长期运行控制面

来源：

- 官方 Gateway architecture 文档
- 本地 `docs/concepts/architecture.md`

说明：

- 外部资料强调一个长期运行 Gateway 负责消息面、控制面客户端、节点和 HTTP/WS surface。

是否已被源码验证：

- 已验证。

对应源码证据：

- [evidence-index.md](./evidence-index.md) `C-004`, `C-005`, `C-006`

### EXT-OC-002: Agent runtime 是 OpenClaw 外壳加 Pi agent core

来源：

- 官方 Agent runtime 文档
- 本地 `docs/concepts/agent.md`, `docs/concepts/agent-loop.md`

说明：

- 官方资料区分 workspace/session/tool/channel delivery 等 OpenClaw-owned layer 与 Pi agent core。

是否已被源码验证：

- 已验证主链路，Pi core 事件结构仍待深挖。

对应源码证据：

- `C-007`, `C-008`, `INF-003`

### EXT-OC-003: Plugin capability 是公开 native plugin model

来源：

- 官方 Plugin internals 文档
- 本地 `docs/plugins/architecture.md`, `docs/plugins/manifest.md`

说明：

- 插件不只是 hook；capability registration、manifest/discovery、runtime registry、surface consumption 构成核心扩展模型。

是否已被源码验证：

- 已验证 loader/API builder 主链路。

对应源码证据：

- `C-010`, `C-011`, `C-012`, `INF-001`

### EXT-OC-004: Session 和 multi-agent 是隔离模型

来源：

- 官方 Session management 文档
- 官方 Multi-agent routing 文档

说明：

- 外部资料强调不同消息来源路由到不同 session，多 agent 拥有独立 workspace、state、auth profiles、session history。

是否已被源码验证：

- 已由本地仓库文档和 Agent RPC 链路部分验证；运行态隔离仍需 live Gateway 验证。

对应源码证据：

- `C-008`, `C-009`

## 5. 外部资料与源码不一致的地方

| 外部资料说法 | 源码实际情况 | 判断 | 后续处理 |
|---|---|---|---|
| 官方 docs 展示 capability-first plugin model | 源码和 docs 同时保留 legacy hook-only 路径 | 不是冲突，是演进期兼容 | 在 extension-points 中保留 capability 与 legacy hook 双轨描述 |
| 官方 docs 说明多 Agent active | 本轮源码只验证了主要配置/文档和部分 Agent ingress 链路 | 部分验证 | 后续需要跑多 Agent channel binding 样例 |

## 6. 对调研方向的影响

外部资料帮助确认本轮应重点深挖：

- Gateway control plane
- Agent runtime boundary
- Plugin capability ownership
- Session/multi-agent isolation
- Channel/provider capability examples
