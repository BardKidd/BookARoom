import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import 'bootstrap'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuex)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
