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
1，回退版本 git reset --hard xxxx ;
2，强制提交 git push -u origin master -f



