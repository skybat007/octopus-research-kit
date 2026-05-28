# Security Policy

## Reporting

如果你发现这个仓库中存在敏感信息泄漏、令牌、私钥、本机绝对路径、未脱敏的内部项目内容，或生成脚本可能错误地公开隐私信息，请通过 GitHub Security Advisory 或 Issue 联系维护者。

请不要在公开 Issue 中粘贴真实令牌、私钥、内部代码或个人路径。

## Scope

本仓库关注的是技术调研框架本身的安全和隐私边界，包括：

- 调研产物中的个人本机路径
- Dashboard、visual data 和 evidence data 中的敏感内容
- 误提交的 `.env`、IDE 配置、令牌或私钥
- 脚本生成物中的未脱敏源码路径

本仓库不对被调研的第三方开源项目提供安全承诺。调研文档中的安全相关描述只代表研究结论或源码阅读结果，不构成安全审计报告。

## Release Checks

公开发布前建议运行：

```bash
npm run research:sanitize
npm run research:validate:strict
npm run release:check
```
