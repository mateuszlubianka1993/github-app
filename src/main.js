import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo, {
  duration: 800,
  easing: "ease-in-out"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
