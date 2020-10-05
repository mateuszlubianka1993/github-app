<template>
  <v-footer v-bind="localAttrs" class="pa-0" fixed>
    <v-card flat tile width="100%" class="orange lighten-1 text-center">
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Github App</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
    items: ["default", "absolute", "fixed"],
    padless: false,
    variant: "default"
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    }
  }
};
</script>
