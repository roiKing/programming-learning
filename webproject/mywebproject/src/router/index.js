import Vue from 'vue' // 引入vue组件
import Router from 'vue-router' // 引入路由组件

import Login from '../views/Login' // 引入登录页面组件

Vue.use(Router); // 安装路由

// 配置路由
export default new Router({
  routes : [{
    // 路由路径
    path : '/Login',
    // 路由名称
    name : 'Login',
    // 跳转到组件
    component : Login
  }]
});
