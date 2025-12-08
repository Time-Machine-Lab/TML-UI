# Project Context

## Purpose

TmlUI 是一个现代化的 Vue 3 组件库，旨在提供高质量、可复用的 UI 组件，帮助开发者快速构建美观且功能强大的 Web 应用。

## Tech Stack

- **Vue 3.3+** - 使用 Composition API 和 `<script setup>` 语法
- **TypeScript 5+** - 提供类型安全和智能提示
- **Vite 5+** - 快速的开发和构建工具
- **Tailwind CSS 3+** - 原子化 CSS 框架，用于快速构建样式
- **SCSS** - CSS 预处理器，用于复杂样式（如栅格系统）
- **PostCSS** - CSS 处理工具，配合 Tailwind CSS 和 Autoprefixer
- **Vitepress** - 组件文档系统
- **Vitest** - 单元测试框架
- **Vue Test Utils** - 组件测试工具
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化

## Project Conventions

### Code Style

- **组件命名**：使用 PascalCase (如 `TmlButton`)
- **文件命名**：使用 kebab-case (如 `tml-button.vue`)
- **Props 命名**：使用 camelCase
- **事件命名**：使用 kebab-case
- **缩进**：2 个空格
- **引号**：单引号优先
- **分号**：不使用分号（按 Prettier 默认配置）

### Architecture Patterns

- **组件结构**：每个组件独立目录，包含 `.vue` 文件和 `index.ts` 导出文件
- **样式方案**：
  - 优先使用 Tailwind CSS 工具类进行样式开发
  - 使用 Scoped CSS 处理组件特定样式
  - 通过 CSS 变量（`--tml-*`）支持主题定制，已与 Tailwind 配置集成
  - 使用 SCSS 处理复杂的样式生成（如栅格系统的循环生成）
- **类型定义**：组件 props 和 emits 必须有完整的 TypeScript 类型定义
- **组件注册**：支持全局注册和按需引入

### Testing Strategy

- **单元测试**：使用 Vitest + Vue Test Utils
- **测试覆盖率**：目标至少 80%
- **测试内容**：
  - 组件渲染
  - Props 传递和验证
  - 事件触发
  - 插槽功能
  - 边界条件和错误处理

### Git Workflow

- **分支策略**：使用 feature 分支开发，合并到 main 分支
- **提交规范**：遵循 Conventional Commits
  - `feat:` 新功能
  - `fix:` 修复
  - `docs:` 文档更新
  - `style:` 代码格式（不影响功能）
  - `refactor:` 重构
  - `test:` 测试相关
  - `chore:` 构建/工具相关

## Domain Context

这是一个 UI 组件库项目，核心关注点：
- **组件可复用性**：组件应该独立、可组合
- **API 一致性**：相似组件应该有一致的 API 设计
- **可访问性**：组件应该符合 WCAG 可访问性标准
- **性能优化**：组件应该高效，避免不必要的重渲染
- **文档完整性**：每个组件都需要完整的文档和示例

## Important Constraints

- **浏览器兼容性**：支持现代浏览器（Chrome、Firefox、Safari、Edge 最新两个版本）
- **Vue 版本**：仅支持 Vue 3.3+
- **Node.js 版本**：>=18.0.0
- **样式方案**：
  - 主要使用 Tailwind CSS 原子化工具类
  - 必要时使用 SCSS 处理复杂样式（如循环生成的栅格类）
  - 支持通过 CSS 变量进行主题定制
- **打包格式**：提供 ES Module 和 UMD 两种格式

## External Dependencies

- **核心依赖**：Vue 3 (peer dependency)
- **开发工具**：Vite, TypeScript, Vitest
- **样式工具**：Tailwind CSS, PostCSS, Autoprefixer, SCSS
- **文档工具**：Vitepress
- **代码质量**：ESLint, Prettier
