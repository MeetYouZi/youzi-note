性能优化
讲讲web各个阶段的性能优化？
React 16 加载性能优化指南
https://mp.weixin.qq.com/s/XSvhOF_N0VbuOKStwi0IYw

# React Hook 的 useMemo、useCallback及memo
useMome、useCallback、useEffect 都会在第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行，并且这两个 hooks 都返回缓存的值，useMemo返回缓存的变量，useCallback返回缓存的函数。
```javascript
const value = useMemo(fnM, [a]);

const fnA = useCallback(fnB, [a]);

```

在子组件不需要父组件的值和函数的情况下，只需要使用 memo 函数包裹子组件即可。而在使用值和函数的情况，需要考虑有函数传递给子组件使用 useCallback ，有值依赖项时使用 useMemo 
