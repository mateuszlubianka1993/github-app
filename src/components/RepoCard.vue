<template>
  <v-card color="grey darken-3" dark>
    <v-card-title class="headline">
      {{ repo.name }}
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            class="ma-2"
            color="green"
            text-color="white"
            v-bind="attrs"
            v-on="on"
          >
            {{ repo.default_branch }}
          </v-chip>
        </template>
        <span>Default branch</span>
      </v-tooltip>
    </v-card-title>
    <v-card-subtitle>
      ({{ new Date(repo.created_at).toLocaleDateString() }})
    </v-card-subtitle>
    <v-card-subtitle>{{
      repo.description ? repo.description : "There is not any description."
    }}</v-card-subtitle>
    <v-card-text class="pb-0">
      <p class="mb-1">
        Last update: {{ new Date(repo.updated_at).toLocaleDateString() }}
      </p>
      <p class="mb-1">Language: {{ repo.language }}</p>
      <p class="mb-1"></p>
    </v-card-text>
    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            :href="repo.svn_url"
            target="_blank"
            icon
            color="white"
            outlined
            absolute
            bottom
            right
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </template>
        <span>Go to github repository page.</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "RepoCard",
  props: ["repo"]
};
</script>
