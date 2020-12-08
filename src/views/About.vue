<template>
  <div class="about mb-5">
    <h1 class="text-center pt-5">
      <!-- <v-icon style="font-size: 100px">mdi-github</v-icon> -->
      The Github App
    </h1>
    <v-container class="pb-5">
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-img
            class="p-10"
            src="@/assets/GitHub-Mark.png"
            aspect-ratio="2"
          ></v-img>
          <p class="mt-5">This is my Github App. You can use it to search for Github user profiles. 
            You can see information about the user and his repositories.
            You will also find a list of the top 15 organizations.
          </p>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-img
            class="p-10"
            src="@/assets/GitHub_Logo.png"
            aspect-ratio="2"
          ></v-img>
          <p class="mt-5">The data used in my application is taken from GitHub REST API.
          </p> 
          <p class="mt-5">To learn more about the Github API, click <a href="https://developer.github.com/v3/" target="_blank">here</a>.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
