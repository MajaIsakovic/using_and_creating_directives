import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// create directive:
// first param: name of the directive
// second param: object configuring the directive
Vue.directive('highlight', {
    bind(el, binding){
      // el.style.backgroundColor = 'gray';
      // el.style.backgroundColor = binding.value;
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }

});

new Vue({
  render: h => h(App),
}).$mount('#app')
