<template>
  <v-app>
    <v-main>
      <HelloWorld :msg="'Hello World!'" />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>
