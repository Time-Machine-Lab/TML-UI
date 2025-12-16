# 快速开始

本节将介绍如何在项目中使用 TML UI。

## 安装

::: tip 使用自建源安装
本项目会发布到自建源：`https://gaq0noe1.cn-nb1.rainapp.top/`。

如果你的环境需要从自建源安装，可以在安装命令中指定 `--registry`：
:::

::: code-group

```bash [npm]
npm install tml-ui
```

```bash [npm（自建源）]
npm install tml-ui --registry=https://gaq0noe1.cn-nb1.rainapp.top/
```

```bash [yarn]
yarn add tml-ui
```

```bash [yarn（自建源）]
yarn add tml-ui --registry=https://gaq0noe1.cn-nb1.rainapp.top/
```

```bash [pnpm]
pnpm add tml-ui
```

```bash [pnpm（自建源）]
pnpm add tml-ui --registry=https://gaq0noe1.cn-nb1.rainapp.top/
```

:::

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
// main.ts
import { createApp } from 'vue'
import TmlUI from 'tml-ui'
import 'tml-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(TmlUI)
app.mount('#app')
```

## 按需引入

如果你只希望引入部分组件，可以使用按需引入的方式。

```vue
<template>
  <tml-button type="primary">Primary Button</tml-button>
</template>

<script setup>
import { TmlButton } from 'tml-ui'
import 'tml-ui/dist/style.css'
</script>
```

## 开始使用

现在，你可以启动项目并开始使用 TML UI 了！

```vue
<template>
  <div>
    <tml-button type="primary" @click="handleClick">
      点击我
    </tml-button>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

## 样式系统

TML UI 提供两种样式方案，你可以根据项目需求选择：

### 1. Tailwind CSS（推荐）

TML UI 集成了 Tailwind CSS，可以使用 utility-first 类快速构建界面：

```vue
<template>
  <div class="flex gap-4 p-4">
    <tml-button class="px-6 py-3 text-base">
      自定义样式
    </tml-button>
    <div class="bg-primary text-white rounded-base p-4">
      使用主题颜色
    </div>
  </div>
</template>
```

查看 [Tailwind CSS 使用指南](/guide/tailwind) 了解更多。

### 2. CSS 变量

使用 CSS 变量进行主题定制：

```css
:root {
  --tml-color-primary: #409eff;
  --tml-color-success: #67c23a;
  /* 更多变量... */
}
```

两种方案可以混合使用，Tailwind 类会自动使用 CSS 变量的值。

## 下一步

- 查看 [Button 组件](/components/button) 文档
- 查看 [Tailwind CSS 使用指南](/guide/tailwind)
- 探索更多组件
