import Vue from 'vue'
import App from './App.vue'
import CoreuiVue from '@coreui/vue';
import router from './router'

Vue.use(CoreuiVue);
Vue.config.productionTip = false

new Vue({
 
  router:router,
  // store,
  // icons,
  render: h => h(App),
}).$mount('#app')