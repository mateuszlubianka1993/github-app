<template>
  <div class="container">
    <v-form v-model="valid" @submit.prevent="searchUser">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" lg="6" class="mr-auto ml-auto">
            <v-text-field
              v-model="username"
              :rules="userRules"
              :counter="99"
              label="Type user name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8" lg="6" class="mr-auto ml-auto">
            <v-btn
          color="orange lighten-1"
          dark
          type="submit"
          block
          depressed
          elevation="12"
          outlined
          raised
          rounded
        >
          Search
        </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-divider class="mt-6"></v-divider>
    <div class="container" v-if="user.length > 0">
      <UserCard :user="user[0]"></UserCard>
    </div>
    <div class="container" v-else>
      <h2 class="text-center">
        <v-icon style="font-size: 128px">mdi-account-search</v-icon>
      </h2>
      <h2 class="text-center">Serch user by login.</h2>
    </div>
  </div>
</template>

<script>
import UserCard from "../components/UserCard";
import { mapGetters } from "vuex";

export default {
  name: "SearchUser",
  components: {
    UserCard
  },
  data: () => ({
    valid: false,
    username: "",
    userRules: [
      v => !!v || "Username is required",
      v => v.length <= 99 || "Name must be less than 99 characters"
    ]
  }),
  methods: {
    searchUser() {
      this.$store.dispatch("getUser", this.username);
    }
  },
  computed: {
    ...mapGetters(["user"])
  }
};
</script>
