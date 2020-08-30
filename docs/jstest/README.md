# 前端面试汇总

### 细说浏览器输入URL后发生了什么

1.DNS域名解析

2.建立TCP连接(进行三次握手，建立TCP连接)

3.发送HTTP请求，服务器处理请求，返回响应结果

4.关闭TCP连接

5.浏览器渲染,构建 DOM 树

6.样式计算,生成分层树

### new被调用后做了什么

1.让实例可以访问到私有属性

2.让实例可以访问构造函数原型(constructor.prototype)所在原型链上的属性

3.如果构造函数返回的结果不是引用数据类型

```javascript
function newFactory(ctor, ...args) {
    if(typeof ctor !== 'function'){
      throw 'newOperator function the first param must be a function';
    }
    let obj = new Object();
    obj.__proto__ = Object.create(ctor.prototype);
    let res = ctor.apply(obj, ...args);
    
    let isObject = typeof res === 'object' && typeof res !== null;
    let isFunction = typoof res === 'function';
    return isObect || isFunction ? res : obj;
};
```
