## 其他与开发相关

### 命令 代理
`
alias proxyon="export http_proxy=http://127.0.0.1:1087;export https_proxy=http://127.0.0.1:1087;"
`
### 设置 github 代理
`
git config --global http.https://github.com.proxy http://127.0.0.1:1087
`

### 清除缓存
```
yarn cache clean
```
### 本地跑 npm 包
```
yarn link

-- 取消本地使用 yarn unlink

-- 使用 yarn link 'xxx'
```
