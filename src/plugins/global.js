export default {
  install(Vue) {
    Vue.prototype.$global = Vue.observable({ unit: "℃" });
    Vue.prototype.processTemperature = temperature => {
      return Math.ceil(
        Vue.prototype.$global.unit === "℃" ? temperature : temperature + 32,
      );
    };
    Vue.prototype.setUnit = unit => {
      Vue.prototype.$global.unit = unit;
    };
  },
};
