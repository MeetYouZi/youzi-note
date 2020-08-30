# javascript相关

## url加密解密

```javascript
// 方法用于编码使用 base-64 编码的字符串
window.btoa

// 方法用于解码使用 base-64 编码的字符串
window.atob
```

## 获取url上的请求参数

```javascript
getQueryString = (name) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
```

## 防抖

```javascript
function debounce (func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
// 例
debounce(function () {}, 1000)
```

## 节流

```javascript
// fn是我们需要包装的事件回调, interval是时间间隔的阈值
function throttle(fn, interval) {
  // last为上一次触发回调的时间
  let last = 0
  
  // 将throttle处理结果当作函数返回
  return function () {
      // 保留调用时的this上下文
      let context = this
      // 保留调用时传入的参数
      let args = arguments
      // 记录本次触发回调的时间
      let now = +new Date()
      
      // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
      if (now - last >= interval) {
      // 如果时间间隔大于我们设定的时间间隔阈值，则执行回调
          last = now;
          fn.apply(context, args);
      }
    }
}

// 用throttle来包装scroll的回调
const better_scroll = throttle(() => console.log('触发了滚动事件'), 1000)

document.addEventListener('scroll', better_scroll)
```

## 洗牌函数

```javascript
/**
 * 洗牌函数
 * @param {长度} len
 */
randomString = (len) => {
  len = len || 32
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length
  var pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}
```

## 舍入一个仅有s位小数的数字（处理js小数精度问题）

```javascript
/**
 * 舍入一个仅有s位小数的数字
 * @param {数值} num
 * @param {小数点后几位} s
 */
toFixed = (num, s) => {
  var times = Math.pow(10, s)
  var des = num * times + 0.5
  des = parseInt(des, 10) / times
  return des
}
```

## ios处理时间格式问题

```javascript
function _formatDate (date) {
  return new Date(date.replace(/-/g, '/'))
}
```

## 最近num天的日期
```javascript
 Date.prototype.reduce = function (num) { 
     let d = this.getTime() 
     return new Date(this.getTime() - 3600 * 24 * 1000 * num) 
 }
// 例
let d = new Date()
d.reduce(i)
```

## 环境判断

```javascript
const UA = window.navigator.userAgent.toLowerCase()

// Android
const isAndroid = /android/.test(UA)

// IOS
const isIOS = /iphone|ipad|ipod|ios/.test(UA)

// 浏览器环境
const inBrowser = typeof window !== 'undefined'

// IE
const isIE = /msie|trident/.test(UA)

// Edge
const isEdge = UA.indexOf('edge/') > 0

// Chrome
const isChrome = /chrome\/\d+/.test(UA) && !isEdge

// 微信
const isWeChat = /micromessenger/.test(UA)

// 移动端
const isMobile = 'ontouchstart' in window
```





