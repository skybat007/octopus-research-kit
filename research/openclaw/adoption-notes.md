# Adoption Notes

Status: draft
Last Updated: 2026-05-25

## 1. 适用语境

OpenClaw 适合用来学习 AI Gateway、个人智能体、插件治理、多渠道消息接入和多 Agent 运行时的系统设计。这里的笔记只记录“为什么这个设计值得理解”和“在哪些语境下可能有参考价值”，不把它转成具体实施任务。

## 2. 可以直接学习

### 1.1 Gateway control plane

把多入口、多渠道、工具、Agent run、session、事件、设备节点统一到一个 Gateway 控制面。它的学习价值在于：OpenClaw 没有把 Gateway 当成单纯 API server，而是把它作为长期运行的协调层。

- 能理解多渠道入口为什么需要统一协议、session 和事件模型。
- 能观察 Agent 执行、工具调用、设备节点和 delivery 如何共用一个控制面。
- 能提醒研究者区分“产品入口很多”和“运行时控制面清晰”这两件事。

适用前提：系统确实存在多个入口、多个执行上下文或多个 delivery target；单入口应用不一定需要这种控制面复杂度。

### 1.2 Manifest + registry

OpenClaw 的插件 manifest 先声明 capability ownership，runtime 再 register 能力。[C-010][C-011] 这体现的是 metadata-before-runtime 的治理思路。

学习重点：

- manifest 不是简单描述文件，而是插件身份、配置 schema、能力归属和 activation hints 的控制面入口。
- runtime 注册能力前，系统已经能做配置校验、能力规划和 owner map。
- 插件越多，越需要把“能力是谁的”前置表达，而不是等 runtime 执行后再推断。

### 1.3 Explicit ingress trust

网络入口必须显式传 `senderIsOwner`、`allowModelOverride` 这种信任参数。[C-008] 这体现的是 ingress boundary 优先的安全设计。

学习重点：

- 本地 CLI 和网络入口的信任默认值不同。
- 权限判断应尽早发生在入口层，而不是让深层 runtime 根据来源字符串猜测。
- 安全参数作为运行请求的一部分显式传递，便于审计和测试。

### 1.4 Per-agent workspace/state/session

OpenClaw 把 Agent 定义为 workspace + agentDir + auth profiles + session store。[C-009] 这有助于理解多 Agent 系统的隔离边界。

学习重点：

- Gateway 可以共享，但 agent 的 workspace、auth profile、session store 应有明确归属。
- 多 Agent 不是“多几个 prompt”，而是状态、权限、会话和 delivery target 的组合边界。
- 默认 main agent 可以降低入门成本，但不能掩盖未来扩展时的隔离模型。

## 3. 需要结合语境后借鉴

### 2.1 Channel plugin 完整 contract

OpenClaw 的 channel contract 覆盖 config、setup、inbound normalize、outbound send、directory、security policy 和 reload lifecycle。这个设计值得学习，但不适合脱离多渠道产品目标直接照搬。

适用前提：

- 渠道数量多，且存在明显的 inbound/outbound 差异。
- 需要统一身份、目录、delivery 和安全策略。
- 渠道配置需要可观测、可 reload、可诊断。

### 2.2 Hook system

OpenClaw hook 很丰富，但它的文档也强调 capability registration 是 native plugin 的目标方向。[C-010] 学习时应区分“稳定能力契约”和“生命周期扩展点”。

不确定性：hook 点过多会让系统变成隐式业务总线；hook 需要配套 timeout、priority、failure policy 和观测手段。

### 2.3 Plugin metadata snapshot

Metadata snapshot 能优化重复 discovery，但只有在插件/Provider/Channel 足够多时才值得做。简单系统可以先用 manifest registry，等出现启动和热路径瓶颈再做 snapshot。

## 3. 不建议照搬

### 3.1 一开始就支持大量渠道

OpenClaw 的多渠道广度是产品目标驱动。如果研究对象没有明确多渠道需求，不应把“支持很多渠道”误读为架构先进性的必要条件；更值得学习的是 channel contract 和 delivery 边界。

### 3.2 宽泛 Plugin API 一步到位

OpenClawPluginApi 很强，但也很宽。[C-012] 新系统初期建议只开放必要注册面，避免 API 兼容包袱过早形成。

### 3.3 默认 main session 的 DM 共享策略

OpenClaw 文档说明 DM 默认共享适合单用户，多人可消息时必须开启 DM isolation。[C-009] 学习时要注意它的 local-first 单用户前提，不能把 shared DM 默认值泛化到天然多用户场景。

## 5. 后续单独评估问题

| 问题 | 为什么需要评估 | 建议验证方式 |
|---|---|---|
| Plugin reload/config change 的真实边界是什么？ | 静态源码能看出设计意图，但不能证明运行时一致性 | 跑一次 plugin inspect 和 reload/config change 样例 |
| Channel inbound 到 outbound delivery 是否有统一可观测链路？ | 多渠道系统最容易在 delivery 上出现隐式状态 | 选 Telegram 或 Slack 插件做端到端追踪 |
| Metadata snapshot 对启动和热路径的收益有多大？ | snapshot 增加心智成本，收益依赖插件数量 | 对比启用/禁用 discovery cache 的启动和 inspect 输出 |
| DM isolation 在多人渠道里的实际配置体验如何？ | README 明确提示多人场景风险，但需要验证默认配置行为 | 用一个群组 channel 配置样例追踪 session key 生成 |

## 6. 风险和误读

- 不要把 OpenClaw 的渠道数量当成主要价值；主要价值在统一控制面、session/delivery 模型和插件能力归属。
- 不要把 local-first 的安全默认值泛化到企业多租户场景；OpenClaw 自己也要求多人/群组入口显式处理隔离和 sandbox。[C-016]
- 不要把 hook 丰富度等同于扩展性成熟度；更稳定的扩展边界来自 capability contract 和 manifest metadata。
- 不要只读 README 就下结论；Agent runtime、Gateway RPC、plugin loader 和 session manager 的源码链路需要一起看。
