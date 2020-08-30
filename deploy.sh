#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m '添加css转换文字大小写'

# 如果发布到 https://<USERNAME>.github.io
 git push -f https://github.com/MeetYouZi/meetyouzi.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:meetyouzi/youzi-note.git master:gh-pages

cd -
