# Customer Creation Task Management Skill Spec

Status: draft
Owner: 供智 POC

## 背景

现有 `task-capability-replacement` 已经实现了运行态上下文读取、按客创单元查询任务结构、定位任务、匹配集市能力、替换任务下能力绑定等能力。但它的 Skill 定位过窄：触发词、输入槽位、脚本名称和确认流都围绕“替换任务能力”设计，无法自然覆盖“查询任务”“查看任务当前能力”“列出任务候选”“确认某个任务后再替换能力”等更通用的任务类操作。

因此需要重新设计一个任务类 Skill，将“任务查询”和“任务下能力替换”统一到同一运行态能力中。新 Skill 以 `docs/specs/runtime-capability-replacement` 为基础复制和扩展：保留其中的运行态替换语义、槽位确认、服务端现状优先、稳定 ID 和替换接口设计，再新增任务查询、任务详情、任务筛选和任务候选续接能力。

## 建议 Skill 名称

```text
customer-creation-task-management
```

命名理由：

- `customer-creation` 明确业务域是客创单元，而不是通用项目任务。
- `task-management` 覆盖查询、定位、能力绑定管理，不被替换场景限制。
- 保留与现有 `task-capability-replacement` 的清晰迁移关系。

## Skill 定位

职责：

- 识别客创单元任务类意图，包括查询任务、查看任务详情、查看任务当前能力、替换任务下能力。
- 从当前主会话 `sessionKey`、运行态上下文或输入 JSON 中补齐 `cvUnitId/currentCvOrgId`、`tenantId`、`userId`、`env`。
- 调用 `getRoleStageByCvUnitId` 查询已保存客创能力结构，并抽取任务列表、阶段、供能力、创值事项、当前绑定能力。
- 支持按任务 ID、任务名称、阶段、供能力、当前能力名称等条件过滤任务。
- 支持用户确认后调用能力匹配接口，并替换指定任务下的集市能力绑定。
- 输出结构化结果，供主智伴展示任务列表、任务详情、候选能力和替换结果。

非职责：

- 不首次匹配客创元模型。
- 不重新生成完整客创能力结构。
- 不执行合同、方案、报价、文档等任务关联业务能力。
- 不负责创建客创单元。
- 不批量重写整张 role stage 结构，除非未来服务端明确提供批量任务能力接口。

## 基底选择

新 Skill 的 spec 和实现建议从 [../runtime-capability-replacement](../runtime-capability-replacement/README.md) 复制起步，而不是从空目录新建。

复制后需要保留的内容：

- 运行态不依赖首次生成本地 artifact，优先查询服务端现状。
- `task` 与 `capability` 槽位补齐和确认规则。
- 任务 SOP ID 不变、任务状态不重置、旧能力绑定解绑或失效的替换语义。
- 能力匹配接口请求和响应解析。
- 稳定 `market_capacity` 与 `biz_sop_market_capacity` ID 规则。
- 服务端专用替换接口优先，完整 graph 保存只作为兜底。

复制后需要修改和扩展的内容：

- 将单一“替换能力”目标扩展为任务管理 action 模型。
- 新增 `query_tasks` 和 `get_task_detail` 的需求、输入和输出。
- 将任务查询从替换前置步骤提升为独立用户可触发能力。
- 将候选任务确认流扩展为可被查询、详情、匹配、替换共用。
- 将 Skill 名称、入口脚本、输出文件名改为任务管理语义。

## 文件导航

| 文件 | 说明 |
| --- | --- |
| [requirements.md](./requirements.md) | 新任务类 Skill 的需求、触发范围、动作模型和验收标准 |
| [design.md](./design.md) | 脚本设计、接口契约、状态流、数据模型和迁移方案 |
| [tasks.md](./tasks.md) | 从现有替换 Skill 迁移到新 Skill 的实施任务 |

## 关联文件

| 文件 | 作用 |
| --- | --- |
| [../task-capability-replacement-skill/README.md](../task-capability-replacement-skill/README.md) | 现有窄用途替换 Skill spec |
| [../runtime-capability-replacement/README.md](../runtime-capability-replacement/README.md) | 新任务类 Skill 的复制基底和替换语义母版 |
| [../../../skills/task-capability-replacement/SKILL.md](../../../skills/task-capability-replacement/SKILL.md) | 现有运行态说明，可迁移上下文读取和确认流 |
| [../../../skills/task-capability-replacement/scripts/replace_task_capability.py](../../../skills/task-capability-replacement/scripts/replace_task_capability.py) | 现有脚本，可拆分为 query、match、replace 三层能力 |
| [../customer-creation-runtime/design.md](../customer-creation-runtime/design.md) | 客创能力结构和 role stage 数据背景 |
