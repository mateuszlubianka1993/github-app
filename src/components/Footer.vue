<template>
  <v-footer class="pa-0" fixed>
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
    padless: false,
    variant: "default"
  })
};
</script>
