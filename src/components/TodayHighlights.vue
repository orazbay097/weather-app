<template>
  <div class="today-highlights">
    <p class="section-label mb-8">Today’s Hightlights</p>
    <v-row>
      <v-col cols="12" md="6">
        <v-card color="primary">
          <p class="label">Wind status</p>
          <p class="indicator">
            <span class="amount">{{ Math.ceil(todayInfo.wind_speed) }}</span>
            <span class="unit">mph</span>
          </p>
          <p>
            <v-icon small>navigation</v-icon
            ><span class="direction">{{
              todayInfo.wind_direction_compass
            }}</span>
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="primary">
          <p class="label">Humidity</p>
          <p class="indicator">
            <span class="amount">{{ Math.ceil(todayInfo.humidity) }}</span>
            <span class="unit">%</span>
          </p>
          <div
            class="d-flex justify-space-between percent"
            style="width:100%;margin-bottom:2px"
          >
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <v-progress-linear
            rounded
            :value="Math.ceil(todayInfo.humidity)"
            color="#FFEC65"
            background-color="#E7E7EB"
            height="8px"
          ></v-progress-linear>
          <span class="ml-auto percent" style="margin-top:2px">%</span>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="primary">
          <p class="label">Visibility</p>
          <p class="indicator">
            <span class="amount">{{ Math.ceil(todayInfo.visibility) }}</span>
            <span class="unit">miles</span>
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card color="primary">
          <p class="label">Air Pressure</p>
          <p class="indicator">
            <span class="amount">{{ Math.ceil(todayInfo.air_pressure) }}</span>
            <span class="unit">mb</span>
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "TodayHighlights",
  props: ["todayInfo"],
};
</script>

<style lang="scss">
.today-highlights {
  color: #e7e7eb;
  .section-label {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }
  .v-card {
    height: 100%;
    padding: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .label {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 6px;
    }
    .indicator {
      font-style: normal;
      color: #e7e7eb;
      margin-bottom: 18px;
      .amount {
        font-weight: 700;
        font-size: 64px;
        line-height: 75px;
      }
      .unit {
        font-family: Raleway;
        font-weight: 500;
        font-size: 36px;
        line-height: 42px;
        margin-left: 2px;
      }
    }
    i {
      background: #616375;
      border-radius: 50%;
      padding: 5px;
      transform: rotate(-150deg);
    }
    .direction {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      margin-left: 6px;
    }
    .percent {
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      color: #a09fb1;
    }
  }
}
</style>
