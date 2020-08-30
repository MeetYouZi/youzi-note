# vue

## 动态指令参数
指令参数动态传递给组件
```vue
<template>
  <aButton @[someEvent]="handleSomeEvent()" />...
</template>
<script>
export default {
  data () {
    return {
      someEvent: someCondition ? "click" : "dbclick"
    }
  },
  methods: {
    handleSomeEvent(){
      // handle some event
    }
  } 
}
</script>
```


## $on侦听子组件的生命周期钩子
```vue
<template>
  <child @hook:mounted="onChildMounted"></child>
</template>
<script>
export default {
  methods: {
    onChildMounted() {}
  }
}
</script>


<!-- 在Vue组件中，可以用过$on,$once去监听所有的生命周期钩子函数，如监听组件的updated钩子函数可以写成
this.$on('hook:updated', () => {})-->
```

## 依赖注入 provide 和 inject
```javascript
// 父组件
function provide () {
  return {
    getMap: this.getMap
  }
}
// 后代组件
inject: ['getMap']
```

## 过滤器
```vue
<div>{{name | filters}}</div>
```


