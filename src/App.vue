<template>
  <v-app>
    <AppNav />
    <v-main>
      <HelloWorld :msg="'Hello World!'" />
    </v-main>
  </v-app>
</template>

<script>
import AppNav from "./components/AppNav";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    AppNav,
    HelloWorld
  }
};
</script>
