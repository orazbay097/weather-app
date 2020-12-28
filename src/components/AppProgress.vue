<template>
  <v-overlay z-index="201" :value="progress">
    <v-dialog v-model="progress" hide-overlay persistent width="400">
      <v-card style="text-align:center;" color="primary">
        <v-progress-linear
          class="ma-0"
          height="20"
          indeterminate
          color="#3C47E9"
        ></v-progress-linear>
        <p
          class="ma-0"
          style="font-size: 20px; padding: 20px"
          v-html="waitText"
        ></p>
      </v-card>
    </v-dialog>
  </v-overlay>
</template>

<script>
export default {
  name: "AppProgress",
  props: ["progress", "waitText"],
};
</script>

<style></style>
