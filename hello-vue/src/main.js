import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import {store} from './store/store';
import {routes} from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
