import Vue from 'vue'
import App from './App.vue'
import  VueRouter from "vue-router"
import router from './router'
import axios from 'axios'
import store from './store/index'
import VueFlashMessage from 'vue-flash-message';
import VueToast from 'vue-toast-notification';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import 'vue-toast-notification/dist/theme-sugar.css';
import 'animate.css'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter);
Vue.use(VueFlashMessage);
Vue.use(VueToast);
Vue.prototype.$http = axios

new Vue({
  router: router,
  store:store,
  render: h => h(App),
}).$mount('#app')


