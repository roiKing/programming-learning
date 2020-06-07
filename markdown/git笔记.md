# git 学习
1. git pull --rebase origin master //远程库同步到本地
出现git failed to push some refs to这个错误使用
2. 设置git名称与邮箱
git config --global user.name "名称"
git config --global user.email "邮箱地址"
3. 生成ssh密匙
ssh-keygen -t rsa -C "邮箱地址"  // 过程中只需要一直回车就行
4. 测试连通性，看本地库和远程库是否连接成功
ssh -T git@github.com
5. 创建git项目
git init
6. 关联本地项目-远程项目
git remote add origin （git@github.com:LiJiangJiangJiang/myGitProjectRemote.git）     注意：（）的是远程项目的唯一标识符
7. 文件-暂存区,add后面是“空格 点”就表示当前目录的所有文件（注意：add和点中间有一个空格！！！大坑）
git add .
8. 注释内容
git commit -m “注释内容”   //暂存区-本地分支（默认master）
9. 将项目推送到远程仓库。第一次推送 加 -u
git push -u origin master
10. 下载项目（远程-本地）
git clone git@XXX
11. 更新项目（远程-本地） 
git pull
git pull origin master

12. 本地更新到github库
  12.1 git add . 添加更新文件
  12.2 git commit -m "本次更新哪些内容"
  12.3 git push origin master 提交更新

