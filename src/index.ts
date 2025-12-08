import { App } from 'vue'
import TmlButton from './components/button'
import { TmlRow, TmlCol } from './components/grid'
import TmlWaterfall from './components/list/waterfall'
import './styles/variables.css'
import './styles/base.css'

// 所有组件列表
const components = [TmlButton, TmlRow, TmlCol, TmlWaterfall]

// 全局安装方法
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name || 'TmlButton', component)
  })
}

// 导出单个组件
export { TmlButton, TmlRow, TmlCol, TmlWaterfall }

// 导出类型
export type { ButtonProps, ButtonEmits } from './components/button/tml-button.vue'
export type { RowProps } from './components/grid/tml-row.vue'
export type { ColProps, ColConfig } from './components/grid/tml-col.vue'

// 默认导出，用于全局注册
export default {
  install
}
