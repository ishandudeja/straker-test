import Vue from 'vue'
import App from './App.vue'
import CoreuiVue from '@coreui/vue';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(CoreuiVue);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
import store from './store'
new Vue({
 
  router:router,
   store,
   render: h => h(App),
}).$mount('#app')