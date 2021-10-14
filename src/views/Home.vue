<template>
  <div id="home">
    <h1>Bienvenue dans la CinémaThèque !</h1>
    <movie-list></movie-list>
  </div>
</template>

<script lang="ts">
import MovieList from "@/components/MovieList.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  name: "home",
  components: {
    MovieList,
  },
})
export default class Home extends Vue {}
</script>
