import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";

import { routers } from "./router";

/**
 * Add Bootstrap
 */
import "@popperjs/core/dist/umd/popper";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.use(VueRouter);
const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: routers
});

Vue.config.productionTip = false;

/**
 * Global register components
 */
// Vue.component("cp-items", {
//   template: `<div>CP ITEM</div>`
// });

new Vue({
  el: "#app",
  router: router,
  render: (h) => h(App)
}).$mount("#app");
