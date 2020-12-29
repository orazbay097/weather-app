<template>
  <div class="search-location px-10 pt-5 d-flex flex-column">
    <v-btn class="ml-auto mb-10" icon
      ><v-icon @click="$emit('close')">close</v-icon></v-btn
    >
    <v-form
      style="min-height:66px;"
      class="d-flex"
      ref="form"
      @submit="handleSubmit"
      onsubmit="return false;"
    >
      <v-text-field
        v-model="searchQuery"
        :rules="[checkIfEmpty]"
        color="#E7E7EB"
        outlined
        dense
        placeholder="search location"
        prepend-inner-icon="search"
        class="mr-3"
      ></v-text-field>
      <v-btn color="#3C47E9" :loading="loading" type="submit">Search</v-btn>
    </v-form>
    <div class="list mx-n5 px-5">
      <div
        @click="$emit('selected', location)"
        class="item py-3 py-md-6 px-3"
        v-for="(location, i) in locations"
        :key="i"
      >
        {{ location.title }}
        <v-icon class="float-right" color="#616475"
          >keyboard_arrow_right</v-icon
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ApiService } from "../api.service";
export default {
  name: "SearchLocation",
  data: () => ({
    loading: false,
    searchQuery: "",
    locations: [],
  }),
  methods: {
    async handleSubmit() {
      if (this.loading || !this.$refs.form.validate()) return;
      this.loading = true;
      this.locations =
        (await ApiService.searchLocation(this.searchQuery)) || [];
      this.loading = false;
    },
    checkIfEmpty(value) {
      return typeof value === "boolean" || typeof value === "number"
        ? true
        : !!value || "required";
    },
  },
};
</script>

<style lang="scss">
.search-location {
  max-height: 100%;
  .list {
    overflow: auto;
    .item {
      cursor: pointer;
      i {
        display: none;
      }
      &:hover {
        border: 1px solid #616475;
        i {
          display: inline-flex;
        }
      }
    }
  }
}
</style>
