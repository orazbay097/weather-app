<template>
  <div class="navbar">
    <TodayInfo v-bind="$attrs">
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
    </TodayInfo>
    <transition name="slide">
      <SearchLocation
        v-if="isSearching"
        @close="isSearching = false"
        @selected="handleSelected"
      />
    </transition>
  </div>
</template>

<script>
import TodayInfo from "./TodayInfo";
import SearchLocation from "./SearchLocation";

export default {
  name: "Navbar",
  components: {
    SearchLocation,
    TodayInfo,
  },
  data: () => ({
    isSearching: false,
  }),
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

.navbar {
  height: 100vh;
  top: 0px;
  overflow: hidden !important;
  position: sticky;
  & > div {
    top: 0px;
    height: 100%;
    background-color: var(--v-primary-base);
    width: 100%;
  }
  @media #{map-get($display-breakpoints, 'xs-only')} {
    height: 85vh;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
}
</style>
