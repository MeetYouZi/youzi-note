## css技巧

### border-radius
斜杠前面的一组四个值分别表示四个角的水平半径；斜杠后面的一组四个值分别表示四个角的垂直半径。
```css
div {
  border-radius:10px 20px 30px 40px/20px 50px 30px 10px;
}
```

### text-transform 文本的大小写
```css
 /*STRING*/
.title{
  text-transform: uppercase;
}

 /*string*/
.title{
  text-transform: lowercase;
}

 /*String*/
.title{
  text-transform: capitalize;
}
```

### 模糊背景
```css

/* <filter-function> 滤镜函数值 */
/* backdrop-filter: blur(2px); */

/* 多重滤镜 */
.backdrop-filter {
    backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);
}

```

### 背景颜色主题修改
使用媒体查询

prefer-color-scheme是浏览器获取系统上用户对颜色主题的倾向性的css api，使用该api我们就可以轻松使得网站的主题跟随系统的颜色设置展示不同的颜色了。

```css
/* css*/
@media (prefers-color-scheme: light) {
  :root{--变量1: 色值1;--变量2: 色值2; ……}
}
@media (prefers-color-scheme: dark) {
  :root{--变量1: 色值3; --变量2: 色值4; ……}
}
```

```javascript
// js脚本
function isDarkSchemePreference(){
  return window.matchMedia('screen and (prefers-color-scheme: dark)').matches;
}
```



