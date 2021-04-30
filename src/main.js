import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuex from "vuex";
import "bootstrap";
import store from "./store";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.component("loading", Loading);

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer " + process.env.VUE_APP_TOKEN;
    config.headers.Accept = "application/json";
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
