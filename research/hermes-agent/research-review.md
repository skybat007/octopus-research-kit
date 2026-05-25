# Research Review

Status: draft
Last Updated: 2026-05-25

## 1. 审查结论

本轮调研满足“第一版架构级调研”的验收标准：已固定代码快照，覆盖源码地图、架构、关键抽象、扩展点、主运行流程、设计思想、学习借鉴和证据索引；关键结论均能回溯到源码或仓库文档。

## 2. 覆盖情况

| 检查项 | 状态 | 说明 |
|---|---|---|
| 固定版本/commit | 通过 | `main@cae7537359c0ba8fceedc0a6423a4d9f30972100` |
| 模块关系说明 | 通过 | source-map.md 与 architecture.md 已覆盖 |
| 至少一条运行链路 | 通过 | runtime-flows.md 覆盖 CLI chat、Agent loop、Tool call、Gateway、TUI、cron |
| 证据索引 | 通过 | evidence-index.md 记录 H-001 到 H-016 |
| 区分事实与推断 | 通过 | evidence-index.md 标记 source/doc fact 与 inference |
| 学习借鉴建议 | 通过 | adoption-notes.md |
| 横向对照 | 部分完成 | comparison.md 给出对照维度和与 OpenClaw 的初步观察 |

## 3. 主要风险

| 风险 | 影响 | 建议 |
|---|---|---|
| 未运行 Hermes | 无法证明 live behavior 与静态代码完全一致 | 下一轮用最小配置跑 CLI 或 dry-run 流程 |
| 未跑测试 | 不能确认边界条件和回归保护 | 优先跑 tool registry、plugin、gateway session、cron 相关测试 |
| Gateway 文件过大 | 静态阅读可能遗漏局部异常路径 | 后续按具体平台和 session 类型做定向追踪 |
| TUI 前端未深入 | 只能确认 bridge 架构，不能评价 UI 状态机 | 进入 `ui-tui/src` 看事件消费和渲染模型 |
| 插件实现未抽样 | 扩展点结论主要来自框架层 | 选一个 provider、memory、platform plugin 做完整链路 |

## 4. 需要补充的证据

- 一次 `hermes --version`、`hermes doctor` 或 `hermes --help` 的实际输出。
- 一个最小 CLI prompt 的 session/log/trajectory 生成结果。
- 一个 plugin tool 动态注册后的 tool schema。
- 一个 gateway adapter 的真实 inbound `MessageEvent` 样例。
- 一个 cron job 的保存输出与 delivery 行为。
- 一个 TUI `prompt.submit` 到 `message.delta` 的实际 JSON-RPC trace。

## 5. 审查意见

这版文档已经可以作为学习 Hermes Agent 架构的第一层地图。下一步不建议继续泛读全仓库，而是选择两个窄问题深挖：

1. Tool/plugin deep dive：安装或启用一个插件工具，观察 registry、toolset、model schema 和 dispatch。
2. Gateway/session deep dive：选一个平台 Adapter，从 inbound event 追踪到 session key、AIAgent 调用和 delivery。
