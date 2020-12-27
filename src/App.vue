<template>
  <v-app>
    <AppProgress :progress="initialLoading" />
    <transition name="fade">
      <v-row v-if="!initialLoading" dense style="margin:0;">
        <v-col cols="12" md="4" class="pa-0">
          <TodayInfo :locationWeatherInfo="locationWeatherInfo" />
        </v-col>
        <v-col cols="12" md="8" class="pa-0">
          <v-main>
            <UnitSwitcher />
          </v-main>
        </v-col>
      </v-row>
    </transition>
  </v-app>
</template>
<script>
import { ApiService } from "./api.service";
import { getCurrentPosition } from "./utils";
import TodayInfo from "./components/TodayInfo";
import AppProgress from "./components/AppProgress";
import UnitSwitcher from "./components/UnitSwitcher";
export default {
  name: "App",
  components: {
    TodayInfo,
    AppProgress,
    UnitSwitcher,
  },
  data: () => ({
    location: null,
    locationWeatherInfo: null,
    initialLoading: false,
  }),
  methods: {
    async getCurrentLocation() {
      const currentPosition = await getCurrentPosition();

      const { latitude, longitude } = currentPosition
        ? currentPosition.coords
        : { latitude: 0, longitude: 0 };

      this.location = (
        await ApiService.searchLocation(null, `${latitude},${longitude}`)
      )[0];
    },
    async getLocationWeatherInfo() {
      this.locationWeatherInfo = await ApiService.getLocation(
        this.location.woeid,
      );
    },
  },
  async created() {
    this.initialLoading = true;
    await this.getCurrentLocation();
    await this.getLocationWeatherInfo();
    this.initialLoading = false;
  },
};
</script>
<style lang="scss">
.v-application {
  font-family: "Raleway", sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.unit {
  font-family: -webkit-pictograph;
}
</style>
