# 微信踩坑日记

## 微信授权
1，微信授权重定向会清空ios缓存操作，所以授权携带参数请使用微信使用的state，用window.btoa加密

## 微信分享
微信分享获取微信签名数据 域名后面必须带/；
例：http://www.abc.com/

### 微信小程序踩坑记录
解决文本 /n 换行 `style="white-space:pre-wrap"`
