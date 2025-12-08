# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- 🎨 集成 Tailwind CSS v3.4
  - 添加 `tailwindcss`, `postcss`, `autoprefixer` 依赖
  - 创建 `tailwind.config.js` 配置文件，映射 CSS 变量到 Tailwind 主题
  - 创建 `postcss.config.js` 配置文件
  - 在 `src/styles/base.css` 中集成 Tailwind directives
  - 支持 utility-first CSS 开发方式
  - 保持与现有 CSS 变量系统的完全兼容
- 📝 新增 Tailwind CSS 使用指南文档
  - 基础使用方法
  - 响应式设计
  - 混合使用策略（Tailwind + CSS 变量）
  - 自定义主题扩展
  - 生产优化建议
  - 最佳实践和常见问题
- 📝 更新快速开始文档，说明样式系统选择

### Changed

- 🔧 样式系统现在支持两种方案：Tailwind CSS（推荐）和 CSS 变量

## [0.1.0] - 2025-12-08

### Added

- 🎉 初始版本发布
- ✨ Button 组件
  - 支持 5 种类型: default, primary, success, warning, danger
  - 支持 3 种尺寸: small, medium, large
  - 支持禁用状态
  - 支持加载状态
  - 支持点击事件
  - 支持默认插槽和图标插槽
- 📝 完整的文档系统
  - 使用指南
  - 组件 API 文档
  - 交互式示例
- 🧪 单元测试覆盖
- 🛠️ 开发工具配置
  - TypeScript 支持
  - ESLint 代码规范
  - Prettier 代码格式化
  - Vitest 测试框架
- 📦 构建系统
  - Vite 构建配置
  - 类型声明文件生成
  - ES Module 和 UMD 格式输出

[0.1.0]: https://github.com/yourusername/tml-ui/releases/tag/v0.1.0
