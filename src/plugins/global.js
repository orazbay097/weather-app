import { getImageFromAssets } from "../utils";

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

    Vue.prototype.getWeatherStateImage = weatherState => {
      try {
        return getImageFromAssets(`${weatherState.replace(" ", "")}.png`);
      } catch (e) {
        return getImageFromAssets("Clear.png");
      }
    };
  },
};
