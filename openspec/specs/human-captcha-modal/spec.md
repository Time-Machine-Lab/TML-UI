# human-captcha-modal Specification

## Purpose
提供一个纯前端、可程序化触发的人机校验弹窗能力，用于在无后端校验与无第三方验证码服务的场景下，对明显自动化脚本的批量操作进行“尽力而为”的拦截（提升自动化成本，而非提供强安全保证）。

## Requirements

### Requirement: Programmatic human captcha modal

系统 MUST 提供一个纯前端的人机校验弹窗能力，允许使用方以程序化 API 触发校验，并获得一个异步布尔结果。

**优先级:** P0  
**类型:** 功能性

#### Scenario: Verify resolves with boolean result

**Given** 使用方调用程序化 API 触发人机校验弹窗  
**When** 用户完成挑战并通过校验  
**Then** API SHALL resolve 为 `true`  
**When** 用户取消、关闭或超时  
**Then** API SHALL resolve 为 `false`

### Requirement: Avoid stable selectors (best-effort)

系统 MUST 采取尽力而为措施，避免提供可被脚本轻易稳定选中的选择器（例如固定 id / 固定自定义 class），以提升自动化命中与绕过成本。

**优先级:** P1  
**类型:** 非功能性

#### Scenario: Render inside a closed ShadowRoot

**Given** 弹窗被创建并挂载到页面  
**When** 渲染弹窗 UI  
**Then** 系统 SHOULD 将 UI 渲染在 `closed ShadowRoot` 内  
**And** 系统 SHOULD NOT 使用稳定的 `id`

### Requirement: Visible text is not DOM text nodes

系统 MUST 支持一种默认模式：弹窗可见文案不以 DOM 文本节点形式直接存在于可交互元素中。

**优先级:** P1  
**类型:** 功能性

#### Scenario: Canvas text rendering

**Given** 使用方启用默认文案渲染模式（canvas）  
**When** 弹窗展示标题、说明与按钮标签  
**Then** 系统 SHALL 通过 `canvas` 绘制可见文本  
**And** 交互元素（如按钮）SHALL 可不包含可见文本节点

### Requirement: Randomized near-center position

系统 MUST 支持弹窗随机定位，且定位结果尽量靠近屏幕中间并保证弹窗在视口内。

**优先级:** P2  
**类型:** 功能性

#### Scenario: Position is randomized and clamped

**Given** 使用方启用随机定位  
**When** 弹窗打开  
**Then** 弹窗位置 SHALL 围绕视口中心产生随机偏移  
**And** 位置 SHALL 被夹取（clamp）到视口可见范围内

### Requirement: Pluggable challenges with default click-button

系统 MUST 支持可插拔的挑战类型，并提供一个默认挑战：点击按钮。

**优先级:** P0  
**类型:** 功能性

#### Scenario: Default click-button challenge

**Given** 使用方未指定 challenge 或指定为 click-button  
**When** 弹窗打开  
**Then** 系统 SHALL 提供一个可点击区域作为挑战  
**And** 用户点击满足条件后 SHALL 通过校验

#### Scenario: Custom challenge injection

**Given** 使用方注入一个自定义 challenge 实现  
**When** 弹窗执行校验  
**Then** 系统 SHALL 使用该 challenge 来决定通过/失败

### Requirement: Configurable anti-automation signals (best-effort)

系统 MUST 支持可配置的“尽力而为”反自动化信号，以提高自动化程序通过成本，并允许关闭以满足可访问性或兼容性。

**优先级:** P2  
**类型:** 非功能性

#### Scenario: Minimum solve time gate

**Given** 使用方配置 `minSolveTimeMs` 大于 0  
**When** 用户在弹窗出现后过快触发通过动作  
**Then** 系统 SHOULD 将该次尝试视为未通过

#### Scenario: Pointer travel gate

**Given** 使用方配置 `requirePointerTravelPx` 大于 0  
**When** 用户未满足指针移动距离阈值  
**Then** 系统 SHOULD 将该次尝试视为未通过
