### 记录 git 相关使用记录

#### 查看所在分支
git branch

#### 查看全部分支
git branch -a

#### 新建一个分支，但依然停留在当前分支
git branch 分支名

#### 新建一个空白分支
git checkout --orphan 分支名

#### 切换分支
git checkout -b xxxx

#### 切换回 master 分支
git checkout master

#### 查看远程仓库地址
git remote -v

#### 查看所有提交记录
git log --all --graph

#### 用于显示工作目录和暂存区的状态
git status

#### 回退版本到 f37880c5e4f16ced35e54d807873122d7ce0133d
git reset  f37880c5e4f16ced35e54d807873122d7ce0133d --soft

#### 设置提交代码时的用户名称
git config [--global] user.name "名称"

#### 设置提交代码时的邮箱地址
git config [--global] user.email "邮箱"

#### 显示当前的 Git 配置
git config --list

#### 取回远程仓库的变化，并与本地分支合并
git pull [remote][branch] 
例：git pull origin master

#### 拉取所有分支
git pull

#### 合并指定分支到当前分支 
git merge 分支名 

#### 提交本地指定分支到远程仓库
git push [remote][branch] 
例：git push origin 分支名

#### 强制提交
git push -u origin master -f

### 删除 commit 记录
```shell script
# 1，回退版本
git reset --hard xxxx ;
# 2，强制提交 
git push -u origin master -f
```


### 回退提交
```shell script
# 回滚最新一次的提交记录
git revert HEAD

# 回滚前一次的提交记录
git revert HEAD^
git reset --hard HEAD^ //不会保留更改


# reset
git reset [--soft | --mixed | --hard

--mixed
 会保留源码,只是将git commit和index 信息回退到了某个版本.
 git reset 默认是 --mixed 模式 
 git reset --mixed  等价于  git reset
 
 --soft
 保留源码,只回退到commit 信息到某个版本.不涉及index的回退,如果还需要提交,直接commit即可.
 
 --hard
 源码也会回退到某个版本,commit和index 都回回退到某个版本.(注意,这种方式是改变本地代码仓库源码)

```

### 清空提交记录
```shell script
# 创建 orphan 分支
git checkout --orphan [分支名]

# 添加需要上传文件
git add .

# 提交更改
git commit -m "Initial"

# 删除需要清空提交记录的分支
git branch -D master

# 将当前分支重命名为需要清空提交记录的分支名
git branch -m master

# 强制更新存储库
git push -f origin master
```


