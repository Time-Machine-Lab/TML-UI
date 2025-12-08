# waterfall-component Specification

## Purpose
Waterfall layout component for displaying items of varying heights in a multi-column grid with optimized positioning. Created by archiving change add-waterfall-layout-component.

## Requirements

### Requirement: Basic Waterfall Layout

The Waterfall component MUST be able to arrange items in a multi-column layout where each item is placed in the column with the minimum height.

**优先级:** P0  
**类型:** 功能性

#### Scenario: Render fixed column layout

**Given** TmlWaterfall component with `columns="3"`  
**When** Multiple child elements are provided  
**Then** Items SHALL be arranged in 3 columns  
**And** Each item SHALL be positioned in the column with minimum height  
**And** Items SHALL maintain their natural height

#### Scenario: Render auto-column layout

**Given** TmlWaterfall component without explicit `columns` prop  
**When** Container width is available  
**Then** Column count SHALL be calculated based on `maxItemWidth` and `minItemWidth`  
**And** Items SHALL be distributed across calculated columns

### Requirement: Column Configuration

The Waterfall component MUST support flexible column configuration with automatic and manual modes.

**优先级:** P0  
**类型:** 功能性

#### Scenario: Fixed columns

**Given** Set `columns="4"`  
**When** Render component  
**Then** Exactly 4 columns SHALL be created  
**And** Column width SHALL be calculated based on container width and gap

#### Scenario: Auto columns with constraints

**Given** Set `minItemWidth="200"` and `maxItemWidth="300"`  
**When** Container width is 1000px with gap="20"  
**Then** Column count SHALL be between 3-4 columns  
**And** Item width SHALL be constrained within min/max range

### Requirement: Spacing and Gap

The Waterfall component MUST support configurable spacing between columns and rows.

**优先级:** P1  
**类型:** 功能性

#### Scenario: Custom gap

**Given** Set `gap="20"`  
**When** Render items  
**Then** Horizontal gap between columns SHALL be 20px  
**And** Vertical gap between items in same column SHALL be 20px

#### Scenario: Default gap

**Given** `gap` prop is not set  
**When** Render items  
**Then** Default gap of 16px SHALL be applied

### Requirement: Dynamic Content Handling

The Waterfall component MUST automatically relayout when content changes.

**优先级:** P0  
**类型:** 功能性

#### Scenario: Add items dynamically

**Given** Waterfall component is rendered with initial items  
**When** New items are added to the slot  
**Then** Layout SHALL automatically recalculate  
**And** New items SHALL be positioned optimally

#### Scenario: Remove items dynamically

**Given** Waterfall component with existing items  
**When** Items are removed from the slot  
**Then** Layout SHALL recalculate  
**And** Remaining items SHALL be repositioned

#### Scenario: Item size changes

**Given** `observeResizes="true"`  
**When** An item's height changes  
**Then** Layout SHALL recalculate affected items  
**And** Subsequent items SHALL be repositioned

### Requirement: Responsive Behavior

The Waterfall component MUST adapt to container size changes.

**优先级:** P1  
**类型:** 功能性

#### Scenario: Container resize

**Given** Waterfall component in a resizable container  
**When** Container width changes  
**Then** Column count SHALL recalculate (if auto mode)  
**And** Items SHALL be repositioned  
**And** Layout SHALL remain optimal

#### Scenario: Window resize

**Given** Waterfall component on page  
**When** Browser window is resized  
**Then** Layout SHALL adapt to new dimensions  
**And** Performance SHALL be optimized with debouncing

### Requirement: Scroll Events

The Waterfall component MUST emit events when user scrolls near bottom.

**优先级:** P1  
**类型:** 功能性

#### Scenario: Reach bottom event

**Given** Set `triggerDistance="200"`  
**When** User scrolls within 200px of bottom  
**Then** `reach-bottom` event SHALL be emitted  
**And** Event payload SHALL include scroll position and dimensions

#### Scenario: Custom trigger distance

**Given** Set `triggerDistance="100"`  
**When** User scrolls within 100px of bottom  
**Then** Event SHALL trigger at correct threshold

### Requirement: Performance Optimization

The Waterfall component MUST be optimized for performance with large numbers of items.

**优先级:** P1  
**类型:** 非功能性

#### Scenario: Efficient layout calculation

**Given** Component with 100+ items  
**When** Layout is calculated  
**Then** Calculation SHALL complete within 100ms  
**And** Browser SHALL remain responsive

#### Scenario: Debounced resize handling

**Given** Multiple rapid resize events  
**When** Container or items are resized  
**Then** Layout recalculation SHALL be debounced  
**And** Only final state SHALL trigger full relayout

### Requirement: Mutation Observation

The Waterfall component MUST support toggling automatic detection of DOM changes.

**优先级:** P2  
**类型:** 功能性

#### Scenario: Enable mutation observation

**Given** Set `observeMutations="true"`  
**When** Child elements are added/removed via DOM  
**Then** Changes SHALL be automatically detected  
**And** Layout SHALL update accordingly

#### Scenario: Disable mutation observation

**Given** Set `observeMutations="false"`  
**When** Child elements are modified  
**Then** Automatic detection SHALL be disabled  
**And** Manual `relayout()` call SHALL be required

### Requirement: Exposed Methods

The Waterfall component MUST expose methods for programmatic control.

**优先级:** P2  
**类型:** 功能性

#### Scenario: Manual relayout

**Given** Component ref is available  
**When** Call `relayout()` method  
**Then** Full layout recalculation SHALL be performed  
**And** All items SHALL be repositioned

#### Scenario: Get layout info

**Given** Component ref is available  
**When** Check component state  
**Then** Current column count SHALL be accessible  
**And** Item positions SHALL be queryable

### Requirement: TypeScript Support

The Waterfall component MUST provide comprehensive TypeScript types.

**优先级:** P1  
**类型:** 非功能性

#### Scenario: Props type checking

**Given** Using component with TypeScript  
**When** Set props  
**Then** All props SHALL have correct types  
**And** Invalid values SHALL show type errors

#### Scenario: Event type checking

**Given** Listening to `reach-bottom` event  
**When** Access event payload  
**Then** Payload properties SHALL be properly typed  
**And** IDE SHALL provide autocomplete

### Requirement: Accessibility

The Waterfall component MUST maintain semantic HTML structure.

**优先级:** P2  
**类型:** 非功能性

#### Scenario: Semantic markup

**Given** Component is rendered  
**When** Inspecting DOM structure  
**Then** Container SHALL use semantic HTML  
**And** Child elements SHALL maintain their original markup  
**And** Positioning SHALL not affect accessibility

## Non-Requirements

- Virtual scrolling for extremely large datasets
- Built-in lazy loading of images
- Masonry animations (use CSS transitions on items)
- Server-side rendering optimization
