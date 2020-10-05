<template>
  <div class="container">
    <v-form v-model="valid" @submit.prevent="searchUser">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="username"
              :rules="userRules"
              :counter="10"
              label="Type user name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn rounded color="orange lighten-1" dark type="submit">
          Search
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "SearchUser",
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
  }
};
</script>
