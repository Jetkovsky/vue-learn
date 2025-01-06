import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter) // vueRouter插件初始化

const router = new VueRouter()

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
