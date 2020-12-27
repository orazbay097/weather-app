<template>
  <v-row dense class="next-days-info" justify-md="space-between">
    <v-col v-for="(info, i) in nextDaysInfo" :key="i" cols="auto">
      <v-card
        min-width="120"
        class="pa-4 d-flex flex-column align-center"
        color="primary"
      >
        <p class="label">
          <template v-if="i == 0">Tommorrow</template>
          <template v-else>{{ info.applicable_date | formatDate }}</template>
        </p>
        <img
          :src="getWeatherStateImage(info.weather_state_name)"
          width="56.44px"
          height="62px"
        />
        <div class="mt-8">
          <span class="max temp"
            >{{ processTemperature(info.max_temp)
            }}<span class="unit">{{ $global.unit }}</span></span
          >
          <span class="min temp ml-4"
            >{{ processTemperature(info.min_temp)
            }}<span class="unit">{{ $global.unit }}</span></span
          >
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "NextDaysInfo",
  props: ["nextDaysInfo"],
};
</script>
<style lang="scss">
@import "~vuetify/src/styles/styles.sass";

.next-days-info {
  .label {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #e7e7eb;
    margin-bottom: 10px;
  }
  img {
    object-fit: contain;
  }
  .temp {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  .max {
    color: #e7e7eb;
  }
  .min {
    color: #a09fb1;
  }
}
</style>
