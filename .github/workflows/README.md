# GitHub Actions Workflows 配置说明

本项目包含以下 GitHub Actions 工作流配置，用于自动化构建、测试、发布和部署流程。

## 📋 工作流列表

### 1. CI/CD 持续集成 (`.github/workflows/ci.yml`)

**触发条件：**
- `main` 和 `develop` 分支的 push
- 针对 `main` 和 `develop` 分支的 Pull Request

**功能：**
- ✅ 多 Node.js 版本测试（18.x, 20.x）
- ✅ TypeScript 类型检查
- ✅ 代码格式检查（Prettier）
- ✅ 代码规范检查（ESLint）
- ✅ 单元测试（Vitest）
- ✅ 构建验证
- ✅ 上传构建产物

**无需配置 Secrets**

---

### 2. NPM 自动发布 (`.github/workflows/publish.yml`)

**触发条件：**
- 推送带有 `v*` 前缀的标签（如 `v1.0.0`）

**功能：**
- 📦 运行完整测试
- 📦 构建生产包
- 📦 发布到 NPM（支持私有仓库）
- 📝 自动创建 GitHub Release

**需要配置的 Secrets：**

| Secret 名称 | 是否必需 | 说明 | 示例值 |
|------------|---------|------|--------|
| `NPM_TOKEN` | ✅ 必需 | NPM 认证 Token | `npm_xxxxxxxxxxxx` |
| `NPM_REGISTRY_URL` | ⚠️ 可选 | NPM 仓库地址（默认：`https://registry.npmjs.org/`） | `https://npm.company.com/` |
| `NPM_REGISTRY_HOST` | ⚠️ 可选 | NPM 仓库主机（默认：`registry.npmjs.org`） | `npm.company.com` |

**使用示例：**
```bash
# 发布新版本
git tag v1.0.0
git push origin v1.0.0
```

---

### 3. 文档自动部署 (`.github/workflows/deploy-docs.yml`)

**触发条件：**
- `main` 分支的 push
- 手动触发（workflow_dispatch）

**功能：**
- 📚 构建 VitePress 文档
- 🚀 部署到 GitHub Pages

**需要配置：**
1. 在仓库设置中启用 GitHub Pages
2. 设置 Pages 源为 "GitHub Actions"

**无需配置 Secrets**（使用自动生成的 `GITHUB_TOKEN`）

---

### 4. 自动化发布流程 (`.github/workflows/release-drafter.yml`)

**触发条件：**
- `main` 分支的 push
- Pull Request 的打开、重新打开或同步

**功能：**
- 📋 自动生成 Release Notes
- 🏷️ 根据 PR 标签自动分类变更
- 🔖 自动计算语义化版本号

**配置文件：** `.github/release-drafter.yml`

**支持的 PR 标签：**
- `feature`, `enhancement` → 🚀 Features
- `fix`, `bugfix`, `bug` → 🐛 Bug Fixes
- `chore`, `dependencies` → 🧰 Maintenance
- `documentation`, `docs` → 📚 Documentation
- `style` → 🎨 Styling
- `performance` → ⚡ Performance
- `security` → 🔒 Security

**版本号规则：**
- `major`, `breaking` 标签 → 主版本号 +1
- `minor`, `feature` 标签 → 次版本号 +1
- `patch`, `fix`, `bugfix` 标签 → 修订号 +1

**无需配置 Secrets**（使用自动生成的 `GITHUB_TOKEN`）

---

## 🔧 配置步骤

### 1. 配置 NPM 发布（支持私有仓库）

#### 公共 NPM 仓库
在仓库的 **Settings → Secrets and variables → Actions** 中添加：

```
NPM_TOKEN = npm_xxxxxxxxxxxxxxxxxxxx
```

获取 NPM Token：
```bash
npm login
npm token create
```

#### 私有 NPM 仓库
除了 `NPM_TOKEN`，还需添加：

```
NPM_REGISTRY_URL = https://npm.company.com/
NPM_REGISTRY_HOST = npm.company.com
```

### 2. 配置 GitHub Pages

1. 进入仓库 **Settings → Pages**
2. Source 选择 **GitHub Actions**
3. 保存后，推送到 `main` 分支即可自动部署

### 3. 使用 Release Drafter

1. 创建 PR 时添加合适的标签（如 `feature`、`fix`）
2. 合并 PR 后，Release Draft 会自动更新
3. 在 Releases 页面编辑 Draft 并发布
4. 或者直接推送 tag 触发自动发布

---

## 🚀 发布流程示例

### 完整发布流程

```bash
# 1. 开发完成后，创建 PR 并添加标签（如 feature）
git checkout -b feat/new-feature
# ... 开发 ...
git push origin feat/new-feature
# 在 GitHub 创建 PR，添加 "feature" 标签

# 2. PR 合并到 main 后，Release Drafter 自动更新草稿

# 3. 本地拉取最新代码
git checkout main
git pull origin main

# 4. 创建并推送 tag
git tag v1.0.0
git push origin v1.0.0

# 5. 自动触发：
#    - NPM 发布
#    - GitHub Release 创建
#    - 文档部署
```

---

## 📝 注意事项

1. **首次使用前**，确保所有必需的 Secrets 已配置
2. **私有 NPM 仓库**需要同时配置 `NPM_REGISTRY_URL` 和 `NPM_REGISTRY_HOST`
3. **GitHub Pages** 需要在仓库设置中手动启用
4. **标签格式**必须为 `v*`（如 `v1.0.0`、`v2.1.0-beta.1`）
5. **PR 标签**影响版本号计算和 Release Notes 分类

---

## 🔍 故障排查

### NPM 发布失败
- 检查 `NPM_TOKEN` 是否有效
- 确认私有仓库地址配置正确
- 查看 Actions 日志中的详细错误信息

### 文档部署失败
- 确认 GitHub Pages 已启用
- 检查 VitePress 构建是否成功
- 查看 `docs:build` 命令是否正常

### Release Drafter 未更新
- 确认 PR 已合并到 `main` 分支
- 检查工作流权限是否正确

---

## 📚 相关链接

- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Release Drafter](https://github.com/release-drafter/release-drafter)
- [NPM Publishing](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [GitHub Pages](https://docs.github.com/en/pages)
