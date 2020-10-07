<template>
  <div class="container">
    <h2 class="text-center">
      <v-icon style="font-size: 100px">mdi-altimeter</v-icon>
      {{ user }} repositories list
    </h2>
    <div class="list" v-if="repos.length > 0">
        <div class="item" v-for="repo in repos" :key="repo.full_name">
            {{repo.full_name}}
        </div>
    </div>
    <div v-else>There is nothing here!</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserRepos",
  props: ["user"],
  created() {
      this.$store.dispatch("getUserRepos", this.user);
  },
  computed: {
    ...mapGetters(["repos"])
  }
};
</script>
