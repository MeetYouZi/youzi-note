# 微信小程序

## promis 微信api
```javascript
const promisic = (func) => {
  return (params={}) => {
    return new Promise((resolve, reject)=>{
    const args = Object.assign(params, {
      success:(res)=>{
        resolve(res)
      },
      fail:(error)=>{
        reject(error)
      }
    })
    func(args)
    })
  }
}

// 例
promisic(wx.getSetting)()
  .then(data => {
    if (data.authSetting['scope.userInfo']) {
      return promisic(wx.getUserInfo)()
    }
    return false
  })
  .then(data => {
    console.log(data)
    })
```
