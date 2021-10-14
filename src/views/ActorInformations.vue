<template>
  <div class="actor-informations">
    <h2>{{ actor.firstName + " " + actor.lastName }}</h2>
    <img v-bind:src="actor.pictureUrl" />
    <ul>
      A joué dans :
      <li v-for="movie in actor.starredIn" v-bind:key="movie.id">
        <movie-list></movie-list>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Actor } from "../classes/Actor";
import MovieList from "../components/MovieList.vue";

@Options({
  name: "actorInformations",
  props: {
    actor: Actor,
  },
  components: {
    MovieList,
  },
})
export default class ActorInformations extends Vue {}
</script>
