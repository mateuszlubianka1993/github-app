<template>
  <v-parallax dark src="@/assets/header-bg.jpg">
    <v-overlay absolute color="#000">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-bold mb-4">
            {{ titleMsg }}
          </h1>
          <h4 class="subheading orange--text lighten-1--text">
            {{ subtitleMsg }}
          </h4>
          <v-btn
            class="mt-5"
            color="orange lighten-1"
            elevation="2"
            fab
            icon
            large
            outlined
            href="#" v-scroll-to="'#organizations'"
            ><v-icon dark>
              mdi-arrow-down
            </v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-overlay>
  </v-parallax>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["titleMsg", "subtitleMsg"]
};
</script>
