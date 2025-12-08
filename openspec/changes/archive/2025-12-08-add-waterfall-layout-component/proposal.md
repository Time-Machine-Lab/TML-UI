# Change: 添加瀑布流布局组件 (Waterfall Layout Component)

## Why

需要提供一个高性能的瀑布流布局组件，用于展示不同高度的内容项（如图片、卡片等）。瀑布流布局在展示内容密集型应用中非常常见，如图片画廊、商品列表、社交媒体流等场景。当前组件库缺少这一常用布局组件。

## What Changes

- 添加 `TmlWaterfall` 瀑布流容器组件
- 支持自适应列数和固定列数两种模式
- 支持响应式布局，自动根据容器宽度调整
- 支持动态添加/删除内容项
- 支持滚动到底部事件监听
- 提供高性能的布局算法，避免频繁重排
- 支持自定义列间距、最小/最大项宽度
- 使用 ResizeObserver 和 MutationObserver 监听变化

## Impact

- **新增规范**: `waterfall-component` - 定义瀑布流组件的功能和行为
- **影响代码**:
  - `src/components/list/waterfall/` - 组件实现
  - `src/components/list/waterfall/index.ts` - 组件导出
  - `src/index.ts` - 全局导出配置
  - `tests/waterfall/` - 组件测试
  - `docs/components/waterfall.md` - 组件文档
- **依赖**: 无外部依赖，使用浏览器原生 API
- **破坏性变更**: 无
