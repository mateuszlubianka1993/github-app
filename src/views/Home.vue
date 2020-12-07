<template>
  <div class="home">
    <Header
      titleMsg="Welcome to Github App"
      subtitleMsg="Built for developers!"
    />
    <h2 class="text-center mt-6">List of the first 15 organizations.</h2>
    <v-divider class="mt-4 mb-7"></v-divider>
    <v-container v-if="organizations.length > 0" class="pb-5">
      <v-row dense>
        <v-col
          cols="12"
          md="4"
          lg="3"
          v-for="organization in organizations"
          :key="organization.full_name"
        >
          <OrgCard :organization="organization" />
        </v-col>
      </v-row>
      <v-divider class="mt-4 mb-7"></v-divider>
    </v-container>
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
import Header from "@/components/Header.vue";
import OrgCard from "@/components/OrgCard.vue";

export default {
  name: "Home",
  components: {
    Header,
    OrgCard
  },
  created() {
    this.$store.dispatch("getOrganizations", this.user);
  },
  computed: {
    ...mapGetters(["organizations"])
  }
};
</script>
