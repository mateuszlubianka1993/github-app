<template>
  <div class="overflow-hidden">
    <v-app-bar color="orange lighten-1" dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Github App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon to="/search-user">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <span>Search Github users</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon to="/about">
            <v-icon>mdi-information</v-icon>
          </v-btn>
        </template>
        <span>Go to About page</span>
      </v-tooltip>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="orange--text lighten-1--text"
        >
          <v-list-item to="/" link>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about" link>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/search-user" link>
            <v-list-item-title>Search user</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>
