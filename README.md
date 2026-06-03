# TML UI

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/%40time-machine-lab%2Ftml-ui.svg)](https://gaq0noe1.cn-nb1.rainapp.top/@time-machine-lab/tml-ui)

一个基于 Vue 3 + TypeScript 构建的现代化组件库。

## ✨ 特性

- 🚀 **现代化技术栈** - 基于 Vue 3、TypeScript 5、Vite 5
- 📦 **开箱即用** - 完整的类型定义和智能提示
- 🎨 **精美设计** - 简洁优雅的设计风格
- 🔧 **灵活定制** - 丰富的配置选项和插槽支持
- 📝 **完善文档** - 详细的 API 文档和示例代码
- ✅ **测试覆盖** - 完整的单元测试保障代码质量

## 📦 安装

```bash
# npm
npm install @time-machine-lab/tml-ui

# yarn
yarn add @time-machine-lab/tml-ui

# pnpm
pnpm add @time-machine-lab/tml-ui
```

### 使用自建源安装

本项目会发布到自建源：`https://gaq0noe1.cn-nb1.rainapp.top/`。

```bash
# npm
npm install @time-machine-lab/tml-ui --registry=https://gaq0noe1.cn-nb1.rainapp.top/

# yarn
yarn add @time-machine-lab/tml-ui --registry=https://gaq0noe1.cn-nb1.rainapp.top/

# pnpm
pnpm add @time-machine-lab/tml-ui --registry=https://gaq0noe1.cn-nb1.rainapp.top/
```

## 🔨 使用

### 完整引入

```ts
// main.ts
import { createApp } from 'vue'
import TmlUI from '@time-machine-lab/tml-ui'
import '@time-machine-lab/tml-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(TmlUI)
app.mount('#app')
```

### 按需引入

```vue
<template>
  <tml-button type="primary">Primary Button</tml-button>
</template>

<script setup>
import { TmlButton } from '@time-machine-lab/tml-ui'
import '@time-machine-lab/tml-ui/dist/style.css'
</script>
```

## 📖 文档

访问 [在线文档](https://time-machine-lab.github.io/TML-UI/) 查看完整的组件文档和示例。

## 📦 组件列表

### 基础组件
- **TmlButton** - 按钮组件

### 布局组件
- **TmlRow** - 栅格行组件
- **TmlCol** - 栅格列组件
- **TmlWaterfall** - 瀑布流布局组件 ✨新增

## 📁 项目结构

```
src/
├── components/           # UI 组件
│   └── button/          # 按钮组件
├── form/                # 表单系统（预留）
├── directives/          # 自定义指令
├── composables/         # 可组合函数
├── utils/               # 工具函数
└── styles/              # 样式文件
    ├── base.css         # 基础样式
    └── variables.css    # CSS 变量

tests/
├── button.spec.ts       # 按钮测试
├── form/                # 表单测试（预留）
├── directives/          # 指令测试（预留）
├── composables/         # Composables 测试（预留）
└── utils/               # 工具函数测试（预留）
```

### 目录说明

- **components/** - 存放所有 UI 组件，每个组件一个独立目录
- **form/** - 表单系统相关组件和验证器（未来扩展）
- **directives/** - Vue 自定义指令，如 v-lazy、v-loading 等
- **composables/** - 可复用的组合式 API 函数
- **utils/** - 通用工具函数
- **styles/** - 全局样式和 CSS 变量定义

### 命名规范

- **组件目录**: `{component-name}/` (kebab-case)
- **组件文件**: `tml-{component-name}.vue`
- **指令目录**: `v-{directive-name}/`
- **Composables**: `use{ComposableName}/` (PascalCase)
- **工具函数**: `{function-name}.ts` (kebab-case)

## 🔧 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build

# 运行测试
npm run test

# 启动文档服务器
npm run docs:dev

# 构建文档
npm run docs:build
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📄 许可证

[MIT](LICENSE) License © 2025-present

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

---

## 📚 实施任务概览

提案包含 7 个主要阶段，共 34 个具体任务：

### Phase 1: 项目基础配置 (6 任务)
- ✅ 创建 package.json
- ✅ 配置 TypeScript
- ✅ 配置 Vite
- ✅ 配置代码规范工具
- ✅ 配置测试框架
- ✅ 创建 .gitignore

### Phase 2: 项目结构搭建 (4 任务)
- ✅ 创建源码目录
- ✅ 创建测试目录
- ✅ 创建文档目录
- ✅ 创建公共样式

### Phase 3: Button 组件开发 (4 任务)
- ✅ 创建组件文件结构
- ✅ 实现组件功能
- ✅ 编写组件样式
- ✅ 创建组件入口

### Phase 4: 测试编写 (2 任务)
- ✅ 编写单元测试
- ⏳ 确保测试覆盖率

### Phase 5: 文档系统搭建 (4 任务)
- ✅ 配置 Vitepress
- ✅ 创建首页文档
- ✅ 创建组件文档
- ✅ 配置组件预览

### Phase 6: 项目文档 (3 任务)
- ✅ 创建 README
- ✅ 创建 CHANGELOG
- ✅ 创建 LICENSE

### Phase 7: 验证和测试 (6 任务)
- 安装依赖
- 验证开发环境
- 验证构建流程
- 验证文档系统
- 验证测试
- 验证代码规范

## 📝 验收标准

- ✅ 项目可以成功安装依赖
- ✅ 开发服务器可以正常启动
- ✅ 组件库可以成功构建
- ✅ 文档可以正常访问
- ✅ Button 组件可以正常渲染
- ✅ 所有测试用例通过
- ✅ 代码符合规范
- ✅ TypeScript 类型检查通过

## 🔗 相关链接

- [Vue 3 官方文档](https://vuejs.org/)
- [Vite 官方文档](https://vitejs.dev/)
- [Vitepress 官方文档](https://vitepress.dev/)
- [Vitest 文档](https://vitest.dev/)
- [Vue Test Utils 文档](https://test-utils.vuejs.org/)

---

**注意**: 这是一个使用 OpenSpec 管理的项目。所有重大变更都需要先创建提案，经过审批后再实施。
