<template>
  <v-app>
    <AppNav />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import AppNav from "./components/AppNav";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    AppNav,
    Footer
  }
};
</script>
