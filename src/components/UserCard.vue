<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-img height="250" :src="user.avatar_url"></v-img>
    <v-badge bordered overlap :content="user.type" color="orange lighten-1">
      <v-card-title>
        {{ user.login }}
        <v-tooltip bottom v-if="user.hireable">
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="green darken-1" v-bind="attrs" v-on="on"
              >mdi-check-circle</v-icon
            >
          </template>
          <span>Hireable</span>
        </v-tooltip>
        <v-tooltip bottom v-else>
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="red darken-4" v-bind="attrs" v-on="on"
              >mdi-close-circle</v-icon
            >
          </template>
          <span>Not-hireable</span>
        </v-tooltip>
      </v-card-title>
    </v-badge>

    <div class="container">
      <div class="row">
        <div class="col-6">
          <v-subheader
            >Created at:
            {{ new Date(user.created_at).toLocaleDateString() }}</v-subheader
          >
        </div>
        <div class="col-3">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on">mdi-account-heart</v-icon>
            </template>
            <span>Followers</span>
          </v-tooltip>
          {{ user.followers }}
        </div>
        <div class="col-3">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on">mdi-account-heart</v-icon>
            </template>
            <span>Following</span>
          </v-tooltip>
          {{ user.following }}
        </div>
      </div>
    </div>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="col-6">
          <div class="d-flex">
            <v-progress-circular
              class="ml-auto mr-auto"
              :rotate="360"
              :size="100"
              :width="15"
              :value="user.public_repos + 30"
              color="orange lighten-1"
            >
              {{ user.public_repos }}
            </v-progress-circular>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <h4 class="text-center">Public repos</h4>
        </div>

        <div class="col-6">
          <div class="d-flex">
            <v-progress-circular
              class="ml-auto mr-auto"
              :rotate="360"
              :size="100"
              :width="15"
              :value="user.public_gists + 10"
              color="orange lighten-1"
            >
              {{ user.public_gists }}
            </v-progress-circular>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <h4 class="text-center">Public gists</h4>
        </div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <div class="my-2 col">
        <v-btn
          small
          color="orange lighten-1"
          dark
          :to="{ name: 'UserRepos', params: { user: user.login } }"
        >
          See User repos
        </v-btn>
      </div>
      <div class="my-2 col">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              :href="user.html_url"
              target="_blank"
              icon
              color="grey darken-4"
              outlined
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </template>
          <span>Go to github user page.</span>
        </v-tooltip>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1
  }),
  props: ["user"],
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>
