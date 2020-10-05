<template>
  <div class="container">
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="username"
            :rules="userRules"
            :counter="10"
            label="Type user name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
      rounded
      color="orange lighten-1"
      dark
    >
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
      username: '',
      userRules: [
        v => !!v || 'Username is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ]
    })
};
</script>
