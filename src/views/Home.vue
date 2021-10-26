<template>
  <div id="home">
    <h1>Bienvenue dans la CinémaThèque !</h1>
    <movies-list></movies-list>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MoviesList from "@/components/MoviesList.vue";
import MovieInformations from "@/views/MovieInformations.vue";

@Options({
  name: "home",
  components: {
    MoviesList,
    MovieInformations,
  },
})
export default class Home extends Vue {}
</script>
