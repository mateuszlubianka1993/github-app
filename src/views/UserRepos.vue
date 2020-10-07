<template>
  <div class="container">
    <h2 class="text-center">
      <v-icon style="font-size: 100px">mdi-altimeter</v-icon>
      {{ user }} repositories list
    </h2>
    <v-divider class="mt-4 mb-7"></v-divider>
    <div class="list" v-if="repos.length > 0">
      <div class="item" v-for="repo in repos" :key="repo.full_name">
        {{ repo.full_name }}
      </div>
    </div>
    <div v-else class="text-center">
      <v-divider class="mt-4 mb-7"></v-divider>
      <v-progress-circular
        :size="70"
        :width="7"
        color="orange lighten-1"
        indeterminate
      ></v-progress-circular>
      <v-divider class="mt-4 mb-4"></v-divider>
      <h2 class="text-center">Loading, please wait...</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserRepos",
  props: ["user"],
  created() {
    setTimeout(() => {
      this.$store.dispatch("getUserRepos", this.user);
    }, 1000);
  },
  computed: {
    ...mapGetters(["repos"])
  }
};
</script>
