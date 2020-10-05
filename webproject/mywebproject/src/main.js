// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router'; // 全局导入路由模块
// 导入创建的路由配置目录
import router from './router';

// 导入ElementUI模块
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter); // 安装路由
// 使用ElementUI模块
Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 配置路由
  router,
  components: { App },
  template: '<App/>',
  // 使用elementui
  render: h => h(App)
});
