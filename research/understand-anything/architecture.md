# 技术架构

## 1. 总体判断

Understand Anything 的架构可以理解为四层：

1. 平台接入层：多平台插件 manifest、安装脚本、Skill 命令和 Hook。
2. 图谱生产层：`/understand` 编排确定性脚本和 LLM Agent，把项目转成 `KnowledgeGraph`。
3. 图谱契约层：core 包定义类型、schema、parser registry、GraphBuilder、搜索和增量更新能力。
4. 图谱消费层：Dashboard、chat、diff、explain、onboard、domain、knowledge 等功能复用图谱。

它不是一个普通 Dashboard 项目，也不是一个单纯 prompt 包。真正稳定的中心是 `.understand-anything/knowledge-graph.json`，所有生产和消费能力都围绕这个文件形成闭环。[UA-010][INF-002]

## 2. 模块职责

| 模块 | 职责 | 证据 |
|---|---|---|
| Platform / Installer | 将同一组 skills 安装到 Claude、Codex、Gemini、OpenClaw、Hermes、Copilot 等平台 | [UA-017] |
| Skills | 暴露用户命令，定义流程和输入输出文件 | [UA-005][UA-015][UA-016] |
| Agents | 承担 LLM 语义任务：扫描叙述、文件分析、架构分层、导览、审查、领域/知识提取 | [UA-011] |
| Deterministic Scripts | 负责扫描、importMap、batch、结构抽取、fingerprint 等可复现计算 | [UA-006][UA-007][UA-008][UA-009][UA-012] |
| Core | 定义图谱类型、schema、Tree-sitter plugin、registry、GraphBuilder、search、staleness | [UA-004][UA-010] |
| Dashboard | 加载图谱、校验、建立索引、展示结构/领域/知识图、受控读取源码 | [UA-013][UA-014] |

## 3. 依赖方向

```text
Platform manifests / install.sh
        ↓
Skills and hooks
        ↓
Deterministic scripts + LLM agents
        ↓
@understand-anything/core
        ↓
.understand-anything/knowledge-graph.json
        ↓
Dashboard + chat/diff/explain/onboard/domain/knowledge consumers
```

关键点是：Dashboard 不直接重新分析源码，辅助命令也不直接扫全项目；它们优先消费图谱，再做搜索、1-hop 展开、layer 查找或 diff 叠加。[UA-015]

## 4. 主流程架构

`/understand` 是一个“流程说明型 Skill”，不是单一 JS 入口。它先解决项目根目录、worktree redirect、插件根目录、core build、config 和语言偏好；再进入 scan、batch、analyze、merge、review、architecture、tour、validation、save。中间结果都写入 `.understand-anything/intermediate/`，最终产物写入 `.understand-anything/knowledge-graph.json`。[UA-005]

这个设计把复杂度分散到三类对象：

- 确定性脚本：低成本、可重试、可测试。
- LLM Agent：读取有限上下文，写 batch JSON。
- 合并/校验脚本：吸收 LLM 输出不稳定性，统一成 schema。

## 5. 图谱契约层

`KnowledgeGraph` 覆盖代码、非代码、领域和知识库四类场景。节点类型包括 file/function/class/module/concept、config/document/service/table/endpoint/pipeline/schema/resource、domain/flow/step、article/entity/topic/claim/source；边类型覆盖 structural、behavioral、data flow、dependencies、semantic、infra/schema、domain、knowledge。这个模型解释了为什么 `/understand-domain` 和 `/understand-knowledge` 不需要独立格式。[UA-010][UA-016]

schema 层进一步承认 LLM 输出会不稳定，所以提供 alias、sanitize、autoFix 和 validate。它不是简单“严格失败”，而是先尽量修正，再把 fatal、auto-corrected、dropped 问题反馈给 Dashboard 或 reviewer。[UA-010]

## 6. 静态分析与 LLM 边界

确定性阶段承担这些事实：

- 文件枚举、ignore、语言/类别和行数统计。
- Tree-sitter 结构抽取：函数、类、imports、exports、callGraph。
- importMap 预解析。
- Louvain batching 和 cross-batch neighborMap。
- fingerprint 和 changed-file 分类。

LLM 阶段承担这些语义：

- 文件/函数/类摘要。
- 语义 tags、业务语义、layer 归属。
- guided tour。
- domain/knowledge implicit relationships。

这说明项目的核心思想不是“让 LLM 全读源码”，而是先把可确定事实压缩成结构化上下文，再让 LLM 在受限边界内补充语义。[INF-001]

## 7. Dashboard 架构

Dashboard 是一个本地 Vite 数据服务 + React 图谱工作台。Vite 侧通过 `GRAPH_DIR` 或当前路径寻找 `.understand-anything/*.json`，为 graph、domain、diff、meta、config 和 file content 提供受 token 保护的端点。React 侧加载图谱后使用 core schema 校验，再在 Zustand store 中建立节点索引、layer 索引、search engine、view mode、diff 和 focus 状态。[UA-013][UA-014]

源码读取有明确边界：

- 所有数据端点需要一次性 token。
- `file-content.json` 拒绝绝对路径和路径逃逸。
- 只能读取已经存在于 knowledge graph 的文件。
- 拒绝超过 1MB 的文件和二进制文件。
- 返回 graph JSON 时会把绝对 filePath 脱敏成相对路径。

## 8. 关键推断

- `KnowledgeGraph` 是 Understand Anything 的“中间表示 IR”：生产端把源码/文档压缩成 IR，消费端围绕 IR 提供交互、问答、导览和增量影响分析。[INF-002]
- 通过 batch + intermediate files 协调多 Agent，是为了降低上下文压力和并发风险，同时保留可恢复性；但代价是流程依赖文件命名契约，`SKILL.md` 对 batch 文件名约束很重。[INF-004]
- 多平台安装复用同一技能目录，说明项目更像“portable AI coding skill package”，不是只绑定 Claude Code 的插件。[INF-005]

