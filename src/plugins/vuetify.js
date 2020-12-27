import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    dark: true,
    themes: {
      dark: {
        primary: "#1E213A",
      },
    },
  },
  icons: {
    iconfont: "md",
  },
});
