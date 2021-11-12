import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import routes from "./routes";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from "./store";

Vue.use(VueRouter);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 

const router = new VueRouter({
  routes : routes,
  mode : 'history'  
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
