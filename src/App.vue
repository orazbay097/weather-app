<template>
  <v-app>
    <v-main></v-main>
  </v-app>
</template>

<script>
import { ApiService } from "./api.service";
import { getCurrentPosition } from "./utils";
export default {
  name: "App",

  components: {},

  data: () => ({
    location: null,
    locationWeatherInfo: null,
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
    await this.getCurrentLocation();
    this.getLocationWeatherInfo();
  },
};
</script>
