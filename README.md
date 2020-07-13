# Node.js + Vue.js 全栈开发王者荣耀手机端官网和管理后台
> 本项目是 [Bilibili 全栈之巅](https://space.bilibili.com/341919508) 视频教程相关源码


## 一、 简介
本项目是一个移动端的仿王者荣耀手机端官网和后台管理系统（pc端）的全栈开源项目，基于 vue + node (Express + ElementUI) +mongodb实现。部署在阿里云服务器，本项目使用了最新的Vue全家桶技术栈，后台数据通过node+mongodb搭建。


## 二、 管理后台
> 基于Element UI的后台管理基础界面搭建


后台管理系统主要有以下功能：

- 分类管理（无限级数），新增vue-table-with-tree-grid美化管理分类
- 装备管理
- 英雄管理
- 文章管理（其中编辑器使用的是富文本编辑器 (vue2-editor)）
- 广告管理
- 管理员账号管理 (bcrypt散列加密)
- 本地图片上传 (multer)和视频上传
- 列表分页功能及模糊查询登录模块使用接口 (jwt,jsonwebtoken)进行服务端登录校验
- 客户端路由限制 (beforeEach, meta)
- 上传文件的登录校验 (el-upload, headers)


## 三、移动端网站

- 使用SASS (SCSS)进行base样式预定义（网站常用色彩、字体和边距定义 (colors, font,margin,padding)；
- 页面整体框架使用flex布局，新增媒体查询；
- 轮播图使用的是vue-awesome-swiper插件；
- 项目中一部分图标是扣取官方精灵图片 (sprite)，剩余部分使用字体图标 (阿里巴巴iconfont)；
- 实现通用列表卡片组件card，几乎可以用于除详情页外的所有tab展示，有良好的的复用性及拓展性，方便快捷。






