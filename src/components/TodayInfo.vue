<template>
  <div class="today-info">
    <transition name="fade">
      <template v-if="isSearching">
        <SearchLocation
          @close="isSearching = false"
          @selected="handleSelected"
        />
      </template>
      <template v-else>
        <div>
          <div class="bg"></div>
          <div class="pt-3 pt-sm-10 mx-5">
            <v-btn color="#6E707A" @click="isSearching = true"
              >Seach for places</v-btn
            >
            <v-btn
              @click="$emit('gpsClicked')"
              class="float-right"
              small
              color="#6E707A"
              fab
              ><v-icon>gps_fixed</v-icon></v-btn
            >
          </div>

          <div class="top half d-flex align-center justify-center">
            <img
              v-if="locationWeatherInfo"
              :src="getWeatherStateImage(weatherState)"
              width="45%"
            />
          </div>
          <div
            class="bottom half d-flex flex-column align-center justify-space-between"
          >
            <span>
              <span class="temperature">{{
                processTemperature(todayWeather.the_temp)
              }}</span>
              <span class="unit">{{ $global.unit }}</span>
            </span>
            <span class="weather-state-name py-3 px-1">
              {{ weatherState }}
            </span>
            <div class="footer d-inline-block py-5 py-sm-10 px-1">
              <p class="mb-4 mb-sm-8">
                Today<span class="mx-4">•</span
                >{{ todayWeather.applicable_date | formatDate }}
              </p>
              <p class="mb-1 mb-sm-3">
                <v-icon color="#88869d">location_on</v-icon
                >{{ locationWeatherInfo.title }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </transition>
  </div>
</template>

<script>
import SearchLocation from "./SearchLocation";

export default {
  name: "TodayInfo",
  components: {
    SearchLocation,
  },
  props: ["locationWeatherInfo"],
  data: () => ({
    isSearching: false,
  }),
  computed: {
    todayWeather() {
      return this.locationWeatherInfo.consolidated_weather[0];
    },
    weatherState() {
      return this.todayWeather.weather_state_name;
    },
  },
  methods: {
    handleSelected(location) {
      this.isSearching = false;
      this.$emit("selected", location);
    },
  },
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/styles.sass";
.today-info {
  height: 100vh;
  top: 0px;
  max-height: calc(100% - 0px);
  transform: translateX(0%);
  background-color: var(--v-primary-base);
  overflow: hidden !important;
  position: sticky;
  .v-btn,
  .v-input {
    z-index: 1;
  }
  .bg {
    background: no-repeat center 78px/147% url("~@/assets/Cloud-background.png");
    opacity: 0.1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .v-navigation-drawer__border {
    display: none;
  }
  .half {
    position: absolute;
    left: 0;
    right: 0;
  }
  .top {
    top: 80px;
    bottom: 55%;
  }
  .bottom {
    height: 55%;
    bottom: 0;
    .temperature {
      font-weight: 500;
      font-size: 144px;
      line-height: 169px;
    }
    .unit {
      font-weight: 100;
      font-size: 48px;
      line-height: 56.35px;
      color: #9f9fb1;
    }
    .weather-state-name {
      font-weight: 600;
      font-size: 36px;
      line-height: 42px;
      text-align: center;
      color: #a09fb1;
    }
    .footer {
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
      color: #88869d;
      text-align: center;
    }
  }
  @media #{map-get($display-breakpoints, 'xs-only')} {
    .top {
      top: 52px;
      bottom: 65%;
    }
    .bottom {
      height: 65%;
    }
  }
}
</style>
