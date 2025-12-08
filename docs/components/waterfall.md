# TmlWaterfall 瀑布流组件

瀑布流布局组件，用于展示不同高度的内容项，自动计算最优布局。

## 基础用法

```vue
<template>
  <TmlWaterfall :columns="3" :gap="16">
    <div v-for="item in items" :key="item.id" class="waterfall-item">
      <img :src="item.image" :alt="item.title" />
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </TmlWaterfall>
</template>

<script setup lang="ts">
import { TmlWaterfall } from 'tml-ui'

const items = [
  { id: 1, image: '/img1.jpg', title: '标题 1', description: '描述...' },
  { id: 2, image: '/img2.jpg', title: '标题 2', description: '描述...' },
  // ...更多项
]
</script>

<style scoped>
.waterfall-item {
  background: #fff;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.waterfall-item img {
  width: 100%;
  border-radius: 4px;
}
</style>
```

## 自适应列数

不设置 `columns` 属性，组件会根据容器宽度和项的最小/最大宽度自动计算列数：

```vue
<template>
  <TmlWaterfall 
    :min-item-width="200" 
    :max-item-width="400" 
    :gap="20"
  >
    <div v-for="item in items" :key="item.id" class="item">
      {{ item.content }}
    </div>
  </TmlWaterfall>
</template>
```

## 滚动加载更多

监听 `reach-bottom` 事件实现无限滚动：

```vue
<template>
  <TmlWaterfall 
    :columns="4" 
    :trigger-distance="200"
    @reach-bottom="handleReachBottom"
  >
    <div v-for="item in items" :key="item.id" class="item">
      {{ item.content }}
    </div>
  </TmlWaterfall>
  <div v-if="loading" class="loading">加载中...</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TmlWaterfall } from 'tml-ui'

const items = ref([...Array(20).keys()].map(i => ({ id: i, content: `Item ${i}` })))
const loading = ref(false)

const handleReachBottom = async ({ atBottom }: { atBottom: boolean }) => {
  if (atBottom && !loading.value) {
    loading.value = true
    // 模拟加载更多数据
    await new Promise(resolve => setTimeout(resolve, 1000))
    const newItems = [...Array(10).keys()].map(i => ({
      id: items.value.length + i,
      content: `Item ${items.value.length + i}`
    }))
    items.value.push(...newItems)
    loading.value = false
  }
}
</script>
```

## 动态内容

组件会自动监听子元素的增删和尺寸变化：

```vue
<template>
  <button @click="addItem">添加项</button>
  <button @click="removeItem">删除最后一项</button>
  
  <TmlWaterfall :columns="3">
    <div 
      v-for="item in items" 
      :key="item.id" 
      class="item"
      :style="{ height: item.height + 'px' }"
    >
      {{ item.content }}
    </div>
  </TmlWaterfall>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TmlWaterfall } from 'tml-ui'

const items = ref([
  { id: 1, content: 'Item 1', height: 150 },
  { id: 2, content: 'Item 2', height: 200 }
])

const addItem = () => {
  const newId = items.value.length + 1
  items.value.push({
    id: newId,
    content: `Item ${newId}`,
    height: 100 + Math.random() * 200
  })
}

const removeItem = () => {
  if (items.value.length > 0) {
    items.value.pop()
  }
}
</script>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| columns | `number` | `5` | 列数，设置为 0 或不设置则自动计算 |
| gap | `number` | `16` | 列间距和行间距，单位 px |
| maxItemWidth | `number` | `320` | 自动计算列数时的最大项宽度，单位 px |
| minItemWidth | `number` | `160` | 自动计算列数时的最小项宽度，单位 px |
| observeMutations | `boolean` | `true` | 是否监听子元素的增删 |
| observeResizes | `boolean` | `true` | 是否监听子元素的尺寸变化 |
| triggerDistance | `number` | `200` | 触发底部事件的距离阈值，单位 px |

## Events

### reach-bottom

滚动到页面底部时触发。

**类型：** `(payload: ReachBottomPayload) => void`

**Payload：**
```typescript
interface ReachBottomPayload {
  atBottom: boolean    // 是否到达底部
  scrollY: number      // 当前滚动位置
  innerHeight: number  // 视口高度
  scrollHeight: number // 文档总高度
}
```

## Exposed Methods

### checkBottom

手动检查当前是否到达页面底部。

```vue
<template>
  <TmlWaterfall ref="waterfallRef" @reach-bottom="handleReachBottom">
    <!-- 内容 -->
  </TmlWaterfall>
  <button @click="checkManually">手动检查</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TmlWaterfall } from 'tml-ui'

const waterfallRef = ref()

const checkManually = () => {
  waterfallRef.value?.checkBottom()
}

const handleReachBottom = (payload) => {
  console.log('到达底部:', payload)
}
</script>
```

## 插槽

### 默认插槽

放置任意需要进行瀑布流布局的元素。

```vue
<TmlWaterfall>
  <div>项 1</div>
  <img src="..." />
  <CustomComponent />
  <!-- 支持任意类型的子元素 -->
</TmlWaterfall>
```

## 性能优化建议

1. **图片懒加载**：结合图片懒加载库，避免一次性加载大量图片
2. **虚拟滚动**：对于超大数据集，考虑结合虚拟滚动技术
3. **禁用监听**：如果内容是静态的，可以设置 `observe-mutations` 和 `observe-resizes` 为 `false` 以提升性能
4. **合理的触发距离**：根据实际需求调整 `trigger-distance`，避免过于频繁的加载

## 注意事项

1. 子元素会被设置为 `position: absolute`，因此不要依赖其默认的文档流位置
2. 组件使用 `transform` 进行定位以获得更好的性能
3. 滚动事件会被节流（300ms），不会影响页面性能
4. 容器会自动设置为 `position: relative`
5. 建议为子元素设置 `transition` 以获得平滑的动画效果（组件会自动添加 `transform` 的过渡）
