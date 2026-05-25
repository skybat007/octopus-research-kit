# 设计思想

Status: draft
Last Updated: 2026-05-25

## 1. 产品哲学：Gateway 是控制面，不是产品本体

README 和官方 Gateway architecture 共同说明 OpenClaw 是运行在用户设备上的 personal AI assistant，Gateway 只是 control plane，产品是 assistant。[C-001][EXT-OC-001] 这决定了技术架构的重心：

- Gateway 要稳定、可观测、可配置。
- 用户交互可以发生在已有渠道、Control UI、CLI、移动端、节点设备中。
- 多渠道不是附加功能，而是产品形态的一部分。

对其它系统的启发：如果真正价值在“持续服务用户的智能体”，不要把产品边界限制在某个 Web UI 或某个 Bot。

## 2. Local-first + operator-controlled security

OpenClaw 强调运行在用户自己的设备和规则里，并且把安全和 safe defaults 放在当前优先级前列。[C-015] README 也明确说明默认 main session 工具在宿主机运行，群组/频道需要通过 sandbox 等配置控制风险。[C-016]

这是一种“能力强，但风险显式”的设计：

- 单用户本地使用时保持高能力。
- 多人/远程/群组入口必须显式考虑 DM policy、pairing、sandbox、auth。
- Convenience 不应该隐藏关键安全决策。[C-015]

## 3. Core stays plugin-agnostic

根 `AGENTS.md` 对架构边界非常明确：core 保持 plugin-agnostic，插件通过 SDK、manifest metadata、runtime helpers 和 documented barrels 接入；owner-specific behavior 放在 owner plugin。[C-003]

这是 OpenClaw 的核心工程思想之一：

- core 负责 generic seams。
- provider/channel/owner 的特殊策略留在插件。
- 如果插件做不了，优先扩展 plugin API，而不是把特例塞进 core。

## 4. Metadata-before-runtime

OpenClaw 的插件系统先读 manifest，再决定是否加载 runtime。Manifest 用于配置校验、能力归属、activation planning、UI hints、owner maps 等，不执行插件代码。[C-010]

这个思想背后的取舍：

- 启动和诊断能更快、更安全。
- 配置错误可以在 runtime 激活前暴露。
- 插件 runtime 加载变成明确动作，而不是所有插件一上来全执行。

## 5. Capability ownership 优先于 Hook 万能化

OpenClaw 支持丰富 hooks，但本地文档和官方 Plugin internals 都明确 capability registration 是 native plugin 的 intended direction；legacy hook-only 支持是兼容基线，不是新设计首选。[C-010][EXT-OC-003]

这点很重要：Hook 系统很容易变成隐式业务总线。OpenClaw 的方向是：

- 稳定能力用 capability/register contract 表达。
- 生命周期拦截用 hook。
- legacy hook-only 继续兼容，但不鼓励扩大。

## 6. Hot path 携带已解析事实

根架构规则要求 hot paths carry prepared facts forward，例如 provider id、model ref、channel id、target、capability family、attachment class；不要在请求时反复 broad discovery。[C-003]

这是一种面向复杂平台的性能与可维护性原则：

- 早期解析事实。
- 在上下文中传递 canonical value。
- 避免每层各自猜测、搜索、归一化。

## 7. Explicit trust at ingress boundary

`agentCommand` 是本地/CLI trusted entrypoint，默认 owner；`agentCommandFromIngress` 要求网络入口显式声明 `senderIsOwner` 和 `allowModelOverride`。[C-008]

这比“在深层函数里看参数猜权限”更安全：

- 权限判断集中在入口层。
- 深层 runtime 不隐式提升权限。
- 代码审计可以从 ingress boundary 开始。

## 8. Terminal-first setup

VISION 说明 OpenClaw 当前 terminal-first，是为了让用户看见 docs、auth、permissions 和 security posture，而不是被便利包装隐藏。[C-015]

这对理解复杂系统设计的启发是：早期复杂系统不一定要优先做完美 UI；关键安全、授权和运行环境决策，CLI/wizard 反而更透明。

## 9. 设计取舍总结

| 取舍 | OpenClaw 的选择 | 可借鉴性 |
|---|---|---|
| 能力 vs 安全 | 强能力 + 显式安全边界 | 高 |
| Core vs Plugin | core generic，owner policy plugin-owned | 高 |
| Hook vs Capability | capability 优先，hook 补充/兼容 | 高 |
| UI-first vs Terminal-first | setup 阶段 terminal-first | 中 |
| 单 Agent vs 多 Agent | 默认 main，但多 Agent 是一等模型 | 高 |
| Metadata vs Runtime | metadata 先行，runtime 按计划加载 | 高 |
