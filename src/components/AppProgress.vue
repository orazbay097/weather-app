<template>
  <v-overlay z-index="201" :value="progress">
    <v-dialog v-model="progress" hide-overlay persistent width="150">
      <v-card
        style="height: 150px;border-radius: 50%;"
        color="primary"
        class="d-flex align-center justify-center"
      >
        <v-progress-circular
          class="ma-0"
          size="100"
          indeterminate
          color="white"
        ></v-progress-circular>
      </v-card>
    </v-dialog>
  </v-overlay>
</template>

<script>
export default {
  name: "AppProgress",
  props: ["progress"],
};
</script>

<style></style>
