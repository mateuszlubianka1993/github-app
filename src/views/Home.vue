<template>
  <div class="home">
    <Header
      titleMsg="Welcome to Github App"
      subtitleMsg="Built for developers!"
    />
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
    <h3>xxx</h3>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header
  },
  created() {
    this.$store.dispatch("getOrganizations", this.user);
  }
};
</script>
