<template>
  <v-card color="grey darken-3" dark height="100%">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline">
          {{ organization.login }}
        </v-card-title>
        <v-card-subtitle>{{
          organization.description
            ? organization.description
            : "There is not any description."
        }}</v-card-subtitle>
        <v-card-actions>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                :to="{
                  name: 'OrganizationRepos',
                  params: { organization: organization.login }
                }"
                icon
                color="white"
                outlined
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </template>
            <span>Go to organization repositories page.</span>
          </v-tooltip>
        </v-card-actions>
      </div>
      <v-avatar class="ma-3" size="125" tile>
        <v-img :src="organization.avatar_url"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "OrgCard",
  props: ["organization"]
};
</script>
