# 常用 css 宏

## 显示省略号

```stylus
// 单行省略号
ellipsis()
  overflow hidden
  text-overflow ellipsis
  white-space nowrap

// 多行省略号
ellipsis-multi($line)
  overflow hidden
  -webkit-line-clamp $nummber
  text-overflow ellipsis
  display -webkit-box
  -webkit-box-orient vertical
```

## 背景图片

```stylus
// 背景图片
bg-image($url)
  background-image url($url + "@2x.png")
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
    background-image url($url + "@3x.png")
```

## 实现移动端border-1px

```stylus
border-1px($color = #ccc, $radius = 2PX, $style = solid)
  position relative
  &::after
    content ""
    pointer-events none
    display block
    position absolute
    left 0
    top 0
    transform-origin 0 0
    border: 1PX $style $color
    border-radius $radius
    box-sizing border-box
    width 100%
    height 100%
    @media (min-resolution: 2dppx)
      width 200%
      height 200%
      border-radius $radius * 2
      transform scale(.5)
    @media (min-resolution: 3dppx)
      width 300%
      height 300%
      border-radius $radius * 3
      transform scale(.333)
```

## 扩展点击区域

```stylus
// 扩展点击区域
extend-click()
  position relative
  &:before
    content ''
    position absolute
    top -10px
    left -10px
    right -10px
    bottom -10px
```

## 实现起泡三角形

```stylus
// 三角形
:before
  content ""
  position absolute
  bottom 5px
  left 20%
  border-style solid
  border-width 0 1px 1px 0
  width 3px
  height 3px
  background #fff
  transform translate(-50%, 8px) rotate(45deg)
```

## 多边框

```stylus
// 多边框 规定边框边缘之外 15 像素处的轮廓：
div
  border 2px solid black
  outline 2px solid red
  outline-offset 15px
```

## 滚动

```scss
@mixin scroll($type: 'y') {
  @if $type == 'x' {
    overflow-x: auto;
    overflow-y: hidden;
  } @else if $type == 'y' {
    overflow-x: hidden;
    overflow-y: auto;
  } @else {
    overflow: auto;
  }
  -webkit-overflow-scrolling: touch;
}
```
