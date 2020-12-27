<template>
  <v-app>
    <AppProgress :progress="loading" />
    <transition name="fade">
      <v-row v-if="!loading" dense style="margin:0;">
        <v-col cols="12" md="4" class="pa-0">
          <TodayInfo
            :locationWeatherInfo="locationWeatherInfo"
            @selected="handleSelected"
            @gpsClicked="init"
          />
        </v-col>
        <v-col
          cols="12"
          md="8"
          class="pa-0 d-flex flex-column"
          style="background:#100E1D"
        >
          <div style="position:relative;height:100%;" class="px-7">
            <v-main class="pt-10 mx-auto" style="max-width:704px">
              <UnitSwitcher class="float-right mb-10" />
              <NextDaysInfo
                :nextDaysInfo="
                  locationWeatherInfo.consolidated_weather.slice(1)
                "
              />
              <TodayHighlights
                class="mt-10"
                :todayInfo="locationWeatherInfo.consolidated_weather[0]"
              />
            </v-main>
          </div>
          <v-footer id="footer">Orazbay @ DevChallenges.io</v-footer>
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
import NextDaysInfo from "./components/NextDaysInfo";
import TodayHighlights from "./components/TodayHighlights";

export default {
  name: "App",
  components: {
    TodayInfo,
    AppProgress,
    UnitSwitcher,
    NextDaysInfo,
    TodayHighlights,
  },
  data: () => ({
    location: null,
    locationWeatherInfo: null,
    loading: false,
  }),
  methods: {
    async handleSelected(location) {
      this.location = location;
      this.loading = true;
      await this.getLocationWeatherInfo();
      this.loading = false;
    },
    async init() {
      this.loading = true;
      await this.getCurrentLocation();
      await this.getLocationWeatherInfo();
      this.loading = false;
    },
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
    this.init();
  },
};
</script>
<style lang="scss">
.v-application {
  font-family: "Raleway", sans-serif;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.unit {
  font-family: -webkit-pictograph;
}
#footer {
  padding: 50px 0px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  background: none;
  color: #616475;
  justify-content: center;
}
.next-days-info {
  clear: both;
}
</style>
