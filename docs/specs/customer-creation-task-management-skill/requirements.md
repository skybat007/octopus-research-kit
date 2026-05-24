# Requirements

## 1. 目标

建设新的任务类 Skill `customer-creation-task-management`，统一支持客创单元任务查询与任务下能力替换。

系统应在用户表达以下意图时触发本 Skill：

- 查询当前客创单元有哪些任务。
- 查看某个任务的详情或当前绑定能力。
- 找到某阶段、某供能力、某创值事项下的任务。
- 把某个任务下的能力替换成用户指定的新能力。
- 用户先查询任务，再基于查询结果选择任务并替换能力。

## 2. 动作模型

本 Skill 使用显式动作模型，避免把所有请求都解释成替换。

| Action | 说明 | 是否写入 |
| --- | --- | --- |
| `query_tasks` | 查询任务列表，支持过滤、排序、分页摘要 | 否 |
| `get_task_detail` | 查看单个任务详情和当前能力绑定 | 否 |
| `match_task_capability` | 为指定任务匹配候选能力，但不替换 | 否 |
| `replace_task_capability` | 确认后替换指定任务下的能力绑定 | 是 |

动作识别优先级：

1. 用户明确说“查询/列出/查看/有哪些任务”时为 `query_tasks`。
2. 用户明确说“查看某任务详情/当前能力/绑定能力”时为 `get_task_detail`。
3. 用户明确说“给某任务匹配能力/看看能换成哪些能力”时为 `match_task_capability`。
4. 用户明确说“替换/换成/改成/绑定到某能力”时为 `replace_task_capability`。
5. 如果动作不明确，默认先查询或返回候选任务，不执行写入。

## 3. 触发范围

应触发本 Skill 的表达：

- “查一下当前客创单元的任务”
- “当前有哪些任务”
- “查看规划供给的能力这个任务”
- “这个任务现在绑定了什么能力”
- “列出供能力规划阶段下的任务”
- “把规划供给的能力任务下的能力换成合同合规性审核”
- “给第 2 个任务匹配方案设计能力”
- “确认替换成第 1 个能力”

不应触发本 Skill 的表达：

- “匹配客创元模型”
- “生成客创能力结构”
- “我要创建客创单元”
- “帮我执行合同审核”
- “帮我写解决方案”
- “帮我打造一个能力/智能/工具”

## 4. 槽位模型

通用运行态槽位：

| 槽位 | 必填 | 来源 |
| --- | --- | --- |
| `action` | 是 | 自然语言、input JSON、续接 pendingResult |
| `cvUnitId/currentCvOrgId` | 是 | 当前会话上下文、input JSON、CUI context bridge |
| `tenantId` | 是 | 当前会话上下文、input JSON、默认租户兜底 |
| `userId` | 写入时建议 | 当前会话上下文、input JSON |
| `env` | 是 | `--env`、运行态上下文、CUI 探测、配置默认值 |

任务过滤槽位：

| 槽位 | 说明 |
| --- | --- |
| `taskId/taskSopId` | 精确定位任务 |
| `taskName` | 按任务名称精确或模糊匹配 |
| `stageName/stageId` | 按阶段过滤 |
| `supplyCapacityName/supplyCapacityId` | 按供能力过滤 |
| `businessSopName/businessSopId` | 按创值事项过滤 |
| `currentCapabilityName/currentCapabilityId` | 按当前绑定能力反查任务 |
| `taskStatus` | 按任务状态过滤 |

能力槽位：

| 槽位 | 说明 |
| --- | --- |
| `capabilityName` | 用户希望匹配或替换的新能力名称 |
| `capabilityDesc` | 能力描述，默认取用户原文或能力名称 |
| `matchSelection` | 用户选择的候选能力序号、名称、spuCode 或 skuCode |

## 5. 查询需求

`query_tasks` 必须满足：

- 查询已保存服务端结构，而不是依赖本地 artifact。
- 默认返回精简任务列表，避免将全量 role stage 返回给主会话。
- 每个任务摘要至少包含 `index`、`taskSopId`、`taskName`、`stageName`、`supplyCapacityName`、`businessSopName`、`taskStatus`、`currentCapabilities`。
- 支持按任务名称、阶段、供能力、创值事项、当前能力过滤。
- 没有匹配任务时返回 `status=success`、`tasks=[]` 和 `message`，不得伪造任务。
- 多候选时保持稳定序号，便于用户下一轮说“第 2 个”。

## 6. 详情需求

`get_task_detail` 必须满足：

- 如果任务唯一，返回任务完整上下文字段和当前能力详情。
- 如果任务槽位缺失或多候选，返回 `status=needs_confirmation` 和 `candidateTaskSummary`。
- 当前能力详情至少包含 `name`、`capacityDesc`、`agentId`、`spuCode`、`skuCode`、`source`、`recordId`。
- 不因为查看详情而调用能力匹配或替换接口。

## 7. 替换需求

`replace_task_capability` 必须满足：

- 写入前必须唯一定位任务。
- 写入前必须拿到能力候选并展示给用户确认。
- 候选能力默认展示字段必须包含能力类型、能力名称、能力描述；可额外展示 `spuCode/skuCode/agentId`。
- 脚本输出应提供 `matchedCapabilityCandidateSummary`，供主会话稳定展示候选能力，避免从原始候选里漏字段。
- 用户确认时必须复用上一轮 `pendingResult/previousResult`，不能只把“确认/继续/1”当作新请求解析。
- 用户直接回复候选序号时，应等价于 `confirmMatch=true + matchSelection=<序号>`，并直接进入确认替换。
- 未获得用户明确确认前，不得调用替换接口。
- 替换接口使用现有服务端专用接口，`businessSopId` 字段实际传任务 SOP ID。
- 替换后返回旧能力、新能力、目标任务、接口响应摘要和 run identity。
- `--dry-run` 只生成 payload，不调用写入接口。

## 8. 输出协议

任务查询成功：

```json
{
  "status": "success",
  "action": "query_tasks",
  "cvUnitId": "443802647720415232",
  "total": 2,
  "tasks": [
    {
      "index": 1,
      "taskSopId": "1817991639583424512",
      "taskName": "规划供给的能力",
      "stageName": "供能力规划阶段",
      "supplyCapacityName": "供给规划",
      "businessSopName": "规划供给的能力事项",
      "currentCapabilities": ["单节点生成供能力"]
    }
  ]
}
```

需要确认任务：

```json
{
  "status": "needs_confirmation",
  "action": "get_task_detail",
  "reason": "ambiguous_task_name",
  "candidateTaskSummary": []
}
```

需要确认能力替换：

```json
{
  "status": "needs_confirmation",
  "action": "replace_task_capability",
  "reason": "matched_capability_confirmation_required",
  "task": {},
  "oldCapabilities": [],
  "matchedCapabilityCandidates": [],
  "replacePayload": {}
}
```

替换成功：

```json
{
  "status": "success",
  "action": "replace_task_capability",
  "message": "任务能力替换完成",
  "task": {},
  "oldCapabilities": [],
  "matchedCapability": {},
  "replaceApiResult": {}
}
```

失败：

```json
{
  "status": "failed",
  "reason": "missing_cv_unit_id",
  "missing_fields": ["cvUnitId", "currentCvOrgId"],
  "contextDiagnostics": []
}
```

## 9. 验收标准

- “查一下当前任务”只查询，不触发能力匹配和替换。
- “这个任务现在绑定了什么能力”返回任务详情和当前能力。
- “把某任务能力换成某能力”先返回候选能力确认态，不直接写入。
- 用户确认候选能力后才调用替换接口。
- 第一次查询返回的任务序号可被下一轮“第 N 个”稳定引用。
- 任务同名多候选时返回候选列表，不自动替换。
- 缺少 `cvUnitId/currentCvOrgId` 时返回诊断，不要求用户手填内部 ID。
- 所有输出文件按 session/run 隔离，不扫描固定 `output/` 目录。
