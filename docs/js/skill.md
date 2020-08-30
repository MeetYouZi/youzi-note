# 常用笔记

## 在页面拖动小球
@touchmove 的关键词 prevent修饰符
```vue
<template>
  <div id="app" ref='app'>
    <div id="box" ref='box' @touchmove.prevent.stop='touchmove'>
      fix返回  
    </div>
  </div>
</template>

<script>
export default {
  method: {
    touchmove (event) {
      let clientX = event.targetTouches[0].clientX
      let clientY = event.targetTouches[0].clientY
      let screenWid = this.$refs.app.offsetWidth
      let screenHei = this.$refs.app.offsetHeight
      let boxWid = this.$refs.box.offsetWidth
      let boxHei = this.$refs.box.offsetHeight
      let midLeft = clientX - (boxWid / 2)
      let midRight = screenWid - (clientX + (boxWid / 2))
      let midBottom = screenHei - (clientY + (boxWid / 2))
      let midTop = clientY - (boxHei / 2)
      if (midLeft < 2) midLeft = 2
      if (midTop < 2) midTop = 2
      if (midRight < 2) return
      if (midBottom < 2) return
      this.$refs.box.style.left = midLeft + 'px'
      this.$refs.box.style.top = midTop + 'px'
      }
  }
}
</script>
```

## 首次加载完成后移除动画(优化首屏加载)

```javascript
// 首次加载完成后移除动画
    let loadDOM = document.querySelector('#appLoading')
    if (loadDOM) {
      const animationendFunc = function () {
        loadDOM.removeEventListener('animationend', animationendFunc)
        loadDOM.removeEventListener('webkitAnimationEnd', animationendFunc)
        document.body.removeChild(loadDOM)
        loadDOM = null
      }
      loadDOM.addEventListener('animationend', animationendFunc)
      loadDOM.addEventListener('webkitAnimationEnd', animationendFunc)
      loadDOM.classList.add('removeAnimate')
    }
```
