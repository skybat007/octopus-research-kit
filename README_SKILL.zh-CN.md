> **说明：** 本仓库包含 Anthropic 为 Claude 提供的 skills 实现。关于 Agent Skills 标准，请查看 [agentskills.io](http://agentskills.io)。

# Skills（技能）
Skill 是由说明文档、脚本和资源组成的文件夹，Claude 会按需动态加载，以提升其在特定任务上的表现。Skill 可以教会 Claude 以可复用的方式完成具体工作，例如按你公司的品牌规范创建文档、按你组织的流程分析数据，或自动化个人任务。

更多信息请参考：
- [What are skills?](https://support.claude.com/en/articles/12512176-what-are-skills)
- [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
- [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)
- [Equipping agents for the real world with Agent Skills](https://anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

# 关于本仓库

本仓库包含一组技能示例，用于展示 Claude 技能系统的能力边界。这些技能覆盖从创意类应用（艺术、音乐、设计）到技术任务（Web 应用测试、MCP 服务器生成），以及企业工作流（沟通、品牌等）的多个场景。

每个技能都封装在独立目录中，并包含一个 `SKILL.md` 文件，内含 Claude 使用的说明与元数据。你可以浏览这些技能来获取灵感，或了解不同的设计模式与实现方式。

本仓库中的许多技能是开源的（Apache 2.0）。我们还提供了驱动 [Claude 文档能力](https://www.anthropic.com/news/create-files) 的文档创建与编辑技能源码，位于 [`skills/docx`](./skills/docx)、[`skills/pdf`](./skills/pdf)、[`skills/pptx`](./skills/pptx) 与 [`skills/xlsx`](./skills/xlsx) 子目录。这些内容是 source-available（源代码可见）而非开源；我们仍将其开放给开发者，作为在生产级 AI 应用中实际使用的复杂技能参考。

## 免责声明

**这些技能仅用于演示和教育目的。** 尽管其中一些能力可能在 Claude 中可用，但 Claude 实际提供的实现和行为可能与此处展示不同。这些技能旨在展示模式与可能性。将其用于关键任务前，请务必在你的环境中充分测试。

# 技能集合
- [./skills](./skills)：创意与设计、开发与技术、企业与沟通、文档类技能示例
- [./spec](./spec)：Agent Skills 规范
- [./template](./template)：技能模板

# 在 Claude Code、Claude.ai 和 API 中体验

## Claude Code
你可以在 Claude Code 中运行以下命令，将本仓库注册为 Claude Code 的插件市场：
```
/plugin marketplace add anthropics/skills
```

然后安装指定技能集合：
1. 选择 `Browse and install plugins`
2. 选择 `anthropic-agent-skills`
3. 选择 `document-skills` 或 `example-skills`
4. 选择 `Install now`

你也可以直接通过以下命令安装任一插件：
```
/plugin install document-skills@anthropic-agent-skills
/plugin install example-skills@anthropic-agent-skills
```

安装插件后，只要在对话中提到该技能即可使用。例如，如果你从市场安装了 `document-skills` 插件，可以让 Claude Code 执行类似任务：“Use the PDF skill to extract the form fields from `path/to/some-file.pdf`”。

## Claude.ai

这些示例技能已经向 Claude.ai 的付费套餐用户提供。

如需使用本仓库中的任意技能或上传自定义技能，请参阅 [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude#h_a4222fa77b)。

## Claude API

你可以通过 Claude API 使用 Anthropic 预构建技能，并上传自定义技能。详见 [Skills API Quickstart](https://docs.claude.com/en/api/skills-guide#creating-a-skill)。

# 创建一个基础 Skill

Skill 的创建很简单：一个包含 `SKILL.md` 的文件夹即可，其中 `SKILL.md` 包含 YAML frontmatter 和指令内容。你可以用本仓库中的 **template-skill** 作为起点：

```markdown
---
name: my-skill-name
description: A clear description of what this skill does and when to use it
---

# My Skill Name

[Add your instructions here that Claude will follow when this skill is active]

## Examples
- Example usage 1
- Example usage 2

## Guidelines
- Guideline 1
- Guideline 2
```

frontmatter 仅要求两个字段：
- `name`：技能的唯一标识符（小写，空格用连字符）
- `description`：完整描述该技能的作用及使用时机

其下方的 Markdown 内容包含 Claude 在技能激活时会遵循的指令、示例与规范。更多细节参见 [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)。

# 合作伙伴技能

Skill 是让 Claude 更擅长使用特定软件的高效方式。随着我们看到合作伙伴提供的优秀技能示例，未来可能会在这里重点展示其中一部分：

- **Notion** - [Notion Skills for Claude](https://www.notion.so/notiondevs/Notion-Skills-for-Claude-28da4445d27180c7af1df7d8615723d0)
