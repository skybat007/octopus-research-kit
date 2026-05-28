# 扩展点

## 1. Skill 扩展

Skill 是用户命令入口。当前插件包含：

- `/understand`
- `/understand-dashboard`
- `/understand-chat`
- `/understand-diff`
- `/understand-explain`
- `/understand-onboard`
- `/understand-domain`
- `/understand-knowledge`

每个 Skill 负责定义参数、前置条件、输入输出路径和调度逻辑。`/understand` 是主生产流程，其它 Skill 多数是图谱消费或特定视图生成。[UA-005][UA-015][UA-016]

## 2. Agent 扩展

Agent prompt 文件承担 LLM 语义阶段：

| Agent | 作用 |
|---|---|
| `project-scanner` | 基于 README/manifest 生成项目叙述、语言和框架判断 |
| `file-analyzer` | 从 batch 结构事实生成节点和边 |
| `assemble-reviewer` | 检查合并后的 graph |
| `architecture-analyzer` | 生成 layers |
| `tour-builder` | 生成 guided tour |
| `graph-reviewer` | 可选完整 LLM review |
| `domain-analyzer` | 生成 domain/flow/step 图 |
| `article-analyzer` | 从 wiki 文章提取 entity/claim/implicit edges |

Agent 的输出不是直接展示，而是写入 intermediate JSON，再由脚本合并和校验。[UA-011]

## 3. Analyzer Plugin / Parser Registry

`AnalyzerPlugin` 接口定义了结构抽取能力：`analyzeFile`、`resolveImports`、`extractCallGraph`、`extractReferences`。`PluginRegistry` 用 `LanguageRegistry` 为文件选择 plugin。`registerAllParsers` 让非代码 parser 和 Tree-sitter 同一套接口进入 pipeline。[UA-009]

这是最像“框架扩展点”的地方：新增语言或非代码格式应优先接入 registry，而不是在上层流程里写特殊分支。

## 4. Language / Framework Registry

`languages/` 保存语言配置，`framework-registry.ts` 保存框架识别。`/understand` 的 architecture phase 会按检测到的语言和框架注入对应上下文，让 LLM 分层时带上语言/框架特有模式。[UA-005]

## 5. Dashboard 视图扩展

Dashboard store 明确支持多种视图状态：

- structural graph
- domain graph
- knowledge graph
- diff mode
- focus mode
- tour
- file/code viewer
- fuzzy/semantic search

它的扩展边界不是“新增一个 React 页面”，而是“围绕同一 graph/store 增加新的视图解释”。[UA-013]

## 6. 平台安装扩展

`install.sh` 维护平台表，不同平台使用 per-skill symlink 或 folder symlink。Claude/Copilot/Cursor manifest 指向同一组 skills 和 agents。这个设计把平台差异压缩到安装层，减少业务逻辑分叉。[UA-017]

## 7. Hook 扩展

`hooks/hooks.json` 和 `auto-update-prompt.md` 把 post-commit auto-update 做成内部 hook。它不是用户命令，而是基于 config 和 git commit 触发增量分析。[UA-012]

