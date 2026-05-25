# Tasks

## 1. Spec 与命名

- [x] 新建 `docs/specs/customer-creation-task-management-skill/`。
- [x] 明确新 Skill 名称为 `customer-creation-task-management`。
- [x] 明确新 Skill 支持 `query_tasks/get_task_detail/match_task_capability/replace_task_capability`。
- [x] 明确与 `task-capability-replacement` 的迁移和兼容关系。
- [x] 明确以 `docs/specs/runtime-capability-replacement` 作为复制基底。

## 2. 基底复制与 spec 改造

- [ ] 复制 `docs/specs/runtime-capability-replacement/` 的 README、requirements、design、tasks 结构作为任务类 spec 初稿。
- [ ] 将标题、范围和目标从“Runtime Capability Replacement”改为“Customer Creation Task Management”。
- [ ] 保留运行态替换语义、数据来源优先级、稳定 ID、服务端替换约束。
- [ ] 新增 action 模型：`query_tasks/get_task_detail/match_task_capability/replace_task_capability`。
- [ ] 新增任务查询、过滤、详情和候选任务续接的需求。
- [ ] 将原替换测试计划扩展为查询、详情、匹配、替换四类验证。

## 3. Skill 脚手架

- [x] 新建 `skills/customer-creation-task-management/`。
- [x] 新建 `SKILL.md`，frontmatter 使用 `name: customer-creation-task-management`。
- [x] 新建 `scripts/manage_customer_creation_tasks.py`。
- [x] 复制并同步 `scripts/common/runtime_context/context_extractor.py`。
- [x] 复制 `env/config.yaml`，保留 dev/fat/uat/prod endpoint 配置。
- [x] 从 `skills/task-capability-replacement/examples/role_stage_response_sample.json` 复制样例。

## 4. 从现有替换 Skill 迁移

- [x] 迁移 endpoint/env 解析逻辑。
- [x] 迁移 CUI runtime context 解析逻辑。
- [x] 迁移 run scoped output 逻辑，并将默认文件名改为 `task_management_result.json`。
- [x] 迁移 `fetch_role_stage` 和 `flatten_role_stage`。
- [x] 将 `resolve_task` 扩展为支持过滤条件和 `taskSelection`。
- [x] 迁移能力匹配和替换 payload 构造。
- [x] 保持 pendingResult 确认态续接能力。

## 5. 新增查询能力

- [x] 实现 `--action query_tasks`。
- [x] 支持按 `taskName`、`stageName`、`supplyCapacityName`、`businessSopName` 过滤。
- [x] 支持按 `currentCapabilityName` 反查任务。
- [x] 输出稳定 `index` 和精简任务摘要。
- [x] 查询无结果时返回空列表和可读 message。

## 6. 新增详情能力

- [x] 实现 `--action get_task_detail`。
- [x] 唯一任务时返回完整任务上下文和当前能力详情。
- [x] 多候选时返回 `needs_confirmation`。
- [x] 支持用户下一轮通过 `--task-selection` 选择任务。

## 7. 能力匹配与替换

- [x] 实现 `--action match_task_capability`，只返回候选能力，不写入。
- [x] 实现 `--action replace_task_capability`，首轮返回候选能力确认态。
- [x] 候选能力输出 `matchedCapabilityCandidateSummary`，默认包含能力类型、能力名称、能力描述。
- [x] 实现 `--confirm-match` 写入替换接口。
- [x] 校验 `businessSopId` 使用 `taskSopId`。
- [x] 校验 `spuCode/skuCode/agentId` 正确透传到替换 payload。
- [x] 支持 `--dry-run`。

## 8. 兼容旧 Skill

- [ ] 将 `skills/task-capability-replacement/scripts/replace_task_capability.py` 改为调用新脚本，或保留旧脚本但标注 deprecated。
- [ ] 在旧 `SKILL.md` 中说明查询任务类请求不应由旧 Skill 承接。
- [ ] 验证旧替换触发词仍可走通。

## 9. 测试计划

- [x] `查一下当前有哪些任务` -> `status=success/action=query_tasks/tasks[]`。
- [x] `帮我查询当前客创单元下有哪些任务` -> 不生成 `taskName` 过滤，返回任务列表。
- [x] `查看规划供给的能力这个任务` -> `action=get_task_detail/task`。
- [ ] `这个任务现在绑定了什么能力` + pending task -> 返回当前能力。
- [ ] `列出供能力规划阶段下的任务` -> 按阶段过滤。
- [ ] `按单节点生成供能力反查任务` -> 按当前能力过滤。
- [x] `把规划供给的能力任务下的能力换成合同合规性审核` -> 首轮 `needs_confirmation` 或 dry-run payload。
- [x] `确认第 1 个` + pendingResult -> 调用替换接口或 dry-run payload。
- [x] 用户只回复 `1` + pendingResult -> 自动识别为 `confirmMatch=true/matchSelection=1`，不重新解析为普通请求。
- [ ] 同名任务多候选 -> 返回候选任务，不调用替换接口。
- [ ] 缺少 `cvUnitId/currentCvOrgId` -> 返回 `missing_cv_unit_id` 和 contextDiagnostics。

## 10. 发布验证

- [ ] 使用 `openclaw-skill-packaging` 打包新 Skill。
- [ ] 校验 zip 中无 `output/`、`__pycache__/`、`.pyc`、`.DS_Store`。
- [ ] 部署后验证查询召回不会误触发首次生成 Skill。
- [ ] 部署后验证替换召回不会误触发合同/方案执行 Skill。
