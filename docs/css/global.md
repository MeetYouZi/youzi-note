## css全局配置

### :root 全局
对于 HTML 来说，:root 表示 <html> 元素，除了优先级更高之外，与 html 选择器相同。

```css
  :root {
    --main-color: hotpink;
    --pane-padding: 5px 42px;
  }
```

### var() 函数

```css
body {
  background-color: var(--main-color);
}
```

### min() 

```css
 /* min() 让我们在设置图像的最大宽度时更简单。在小型设备上宽度拉伸为window的一半，但在大型设备上，不超过300px */
.min{
  width: min(50vw, 300px);
}
```

### max() 
max()值视为提供属性可以具有的最小值。
```css
.max{
  /* 最小至少为300px */
  width: max(50vw, 300px);
}
```

### mask-image
 CSS属性用于设置元素上遮罩层的图像。
```css
.div{
  mask-image: linear-gradient(180deg,hsla(0,0%,100%,0) 0,
        hsla(0,0%,100%,1) 15%,#fff 25%,#fff 65%,hsla(0,0%,100%,.8) 100%,hsla(0,0%,100%,0))
}
```
