// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"

Vue.config.productionTip = false
//自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
