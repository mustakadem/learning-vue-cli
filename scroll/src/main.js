import Vue from 'vue'
import App from './App.vue'
import Info from './components/Info';
import Bio from './components/Bio';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes =[
  {path: '/', component:Info},
  {path: '/bio', component:Bio},
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    const position={};
    if(to.hash){
      position.selector = to.hash;
    }else{
      position.x =200;
      position.y=100;
    }


    return position;
  }

});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
