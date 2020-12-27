import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import globalPlugin from "./plugins/global";
import { formatDate } from "./utils";

Vue.use(globalPlugin);

Vue.filter("formatDate", formatDate);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
}).$mount("#app");
