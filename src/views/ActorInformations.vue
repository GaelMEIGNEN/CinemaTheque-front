<template>
  <div class="actor-informations">
    <h2>{{ actor.firstName + " " + actor.lastName }}</h2>
    <img v-bind:src="actor.pictureUrl" />
    <ul>
      A joué dans :
      <li v-for="movie in actor.starredIn" v-bind:key="movie.id">
        <movies-list></movies-list>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Actor from "../types/Actor";
import MoviesList from "../components/MoviesList.vue";

@Options({
  name: "actorInformations",
  props: {
    actor: Actor,
  },
  components: {
    MoviesList,
  },
})
export default class ActorInformations extends Vue {}
</script>
