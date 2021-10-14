<template>
  <div id="home">
    <h1>Bienvenue dans la CinémaThèque !</h1>
    <film-list></film-list>
  </div>
</template>

<script lang="ts">
import FilmList from "@/components/FilmList.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  name: "home",
  components: {
    FilmList,
  },
})
export default class Home extends Vue {}
</script>
