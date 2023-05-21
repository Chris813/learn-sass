# Complete SASS Tutorial 课程笔记

课程连接：https://www.bilibili.com/video/BV1fq4y1w7Rs/?p=10&spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=60ed0390d3a527bb9ff0d36377c0d7c3

再+一点 webpack 练习，主要是用 webpack 编译 scss 文件

`npm run watch`

课程目录（从 p2 开始）：

- 编译
- 变量
- 拆分&@import
- 项目结构
- 嵌套规则
- 使用 math
- maps
- loops
- @if
- &
- @mixin 混入/@include
- @function
- 创建 utilities 实用类
- 媒体查询
- grid
- @extent

# SASS 笔记

# Sass

# @Rule

## 引入模块

### @use

一种新的导入方式，用于导入其他 Sass 模块。相比于旧的 `@import` 指令，`@use` 具有以下优点：

- `@use`  指令会自动创建一个新的命名空间，避免了变量和混合器之间的命名冲突。
- `@use`  指令支持从其他模块中选择性地导入变量、混合器和函数，减少了不必要的代码和样式表的大小。
- `@use`  指令支持别名，可以将导入的模块重命名为其他名称，提高了代码的可读性和灵活性。

```sass
@use 'uses/global' as g1;// 别名
@use 'path/to/module'; // 创建了一个新的命名空间module，默认为文件名

//使用module里的混入
@include module.mixin();
```

## @forward

将另一个 Sass 模块中的变量、混合器和函数导出到当前模块中，使其可以在当前模块中使用。

转发

## @import

打印出值

## 混入指令

混合指令（Mixin）用于定义可重复使用的样式。

@mixin 定义混合指令

@include 引用混合样式

@content mixin 内的内容占位符

### 参数

`@mixin sexy-border($color,` `$width: 1in)` 还可以设置默认值（使用参数时，建议加上默认值）

`@include sexy-border($color:blue, 1in);` 还可以使用关键字参数

…类 js spread/rest 语法

## 函数

@function 一定要定义返回值

`@function <name>(<arguments...>) { ... }`

## 继承 extend

@extend 表示语义上的关系，让选择器继承另一个选择器的样式。也可结合%占位符，可以不输出。

📣 和 mixin 区别，mixin 在使用的选择器内复制混入片段；extend 将自己的类名复制到继承的选择器那

## @debug

打印表达式或变量值

## 流程控制

### @if

`@if <expression>`

`@else`

`@else if`

### @for

`@for <variable> from <expression> to <expression> { ... }` 使用 to，不包含最后一个值
\*\*\*\*`@for <variable> from <expression> through <expression> { ... }` 使用 through，包含最后一个值

### @each

遍历 list 或 map。

- `@each <variable> in <expression>` list
- `@each <variable>, <variable> in <expression> { ... }` map
- 还可以解构

```sass
$icons:
  "eye" "\f112" 12px,
  "start" "\f12e" 16px,
  "stop" "\f12f" 10px;

@each $name, $glyph, $size in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
    font-size: $size;
  }
}
```

### @while

**`@while <expression> { ... }`**

# 变量类型

## Maps

定义：`$font-weights: ("regular"**:** 400**,** "medium"**:** 500**,** "bold"**:** 700);`

操作：内建模块 maps

# 内建模块

## color

**`color.complement**($color)` 返回 RGB 补色（每个颜色通道剪去 255）

# CSS 功能扩展

选择器嵌套

&

属性嵌套

## 占位符选择器%

一种只能被扩展的选择器，包含占位符的选择器不会出现在 CSS 输出中，但扩展它们的选择器会。定义一套通用 css 规则，用@extend 使用，%被使用的选择器替代。

```sass
%box {
  padding: 10px;
  border: 1px solid #ccc;
}

.box {
  @extend %box;
  background-color: #f1f1f1;
}
```

# 变量

`$width:5rem`

嵌套规则内定义的变量只能在嵌套规则内使用（局部变量），不在嵌套规则内定义的变量则可在任何地方使用（全局变量）。

`!global` 将局部变量转换为全局变量

### 数据类型

- 数字
- 字符串
- 颜色
- 布尔
- 空值
- 数组 用逗号或空格值分隔的一系列值
- maps `map-get($map-name,key)` 函数获取

# 运算符

# 插值

`#{}`

# 内建模块

## color

- `rgb($red, $green, $blue)`: 创建一个 RGB 颜色。
- `rgba($red, $green, $blue, $alpha)`: 创建一个带有 alpha 通道的 RGB 颜色。
- `hsl($hue, $saturation, $lightness)`: 创建一个 HSL 颜色。
- `hsla($hue, $saturation, $lightness, $alpha)`: 创建一个带有 alpha 通道的 HSL 颜色。
- `adjust-hue($color, $degrees)`: 改变颜色的色调。
- `lighten($color, $amount)`: 使颜色变亮。
- `darken($color, $amount)`: 使颜色变暗。
- `saturate($color, $amount)`: 使颜色更饱和。
- `desaturate($color, $amount)`: 使颜色更淡。
- `grayscale($color)`: 将颜色转换为灰度。
- `complement($color)`: 计算颜色的补色。

## list

- `length($list)`: 返回列表中项目的数量。
- `nth($list, $n)`: 返回列表中第 $n 个项目。
- `join($list1, $list2, $separator)`: 将两个列表合并为一个列表。
- `append($list1, $val, $separator)`: 将一个值添加到列表的末尾。
- `zip($lists...)`: 将多个列表合并为一个多维列表。
- `index($list, $value)`: 返回值在列表中的位置。
- `slice($list, $start-at, $end-at)`: 返回列表中指定范围内的项目。
- `sort($list, $sort-function)`: 对列表进行排序。
- `map($list, $map-function)`: 对列表中的每个项目应用一个函数，并返回一个新列表。
