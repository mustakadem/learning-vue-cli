import Vue from 'vue'
import App from './App.vue'

Vue.directive('fijar', {
  bind(el,binding){
    console.log(el,binding);
    el.style.position =  'fixed';

    if (binding.expression){
      el.style.top = binding.expression + 'px';
    }

    if (binding.arg){
      let color = 'goldenrod';
      if (binding.modifiers){
        color = Object.keys(binding.modifiers)[0];
      }

      el.style.backgroundColor= color;
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
