<template>
  <div class="container">
    <h2 class="text-center">
      <v-icon style="font-size: 100px">mdi-altimeter</v-icon>
      {{ user }} repositories list
    </h2>
  </div>
</template>

<script>
export default {
  name: "UserRepos",
  props: ["user"]
};
</script>
