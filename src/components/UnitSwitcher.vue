<template>
  <div class="unit unit-switcher d-inline-block">
    <v-btn
      :light="isActive('℃')"
      @click="setUnit('℃')"
      small
      :color="getColor('℃')"
      fab
      class="mr-3"
    >
      ℃
    </v-btn>
    <v-btn
      :light="isActive('℉')"
      @click="setUnit('℉')"
      small
      :color="getColor('℉')"
      fab
    >
      ℉
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "UnitSwitcher",
  methods: {
    isActive(unit) {
      return unit === this.$global.unit;
    },
    getColor(unit) {
      return this.isActive(unit) ? "#E7E7EB" : "#585676";
    },
  },
};
</script>
<style lang="scss">
.unit-switcher {
  .v-btn__content {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
