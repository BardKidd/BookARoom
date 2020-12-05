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

axios.interceptors.request.use(
  config => {
    config.headers.Authorization = "Bearer " + process.env.VUE_APP_TOKEN;
    config.headers.Accept = "application/json";
    return config
  },
  err => {
    return Promise.reject(err);
  }
)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


