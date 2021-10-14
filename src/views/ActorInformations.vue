<template>
  <div class="actor-informations">
    <h2>{{ actor.firstName + " " + actor.lastName }}</h2>
    <img v-bind:src="actor.pictureUrl" />
    <ul>
      A joué dans :
      <li v-for="film in actor.starredIn" v-bind:key="film.id">
        <film-list></film-list>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Actor } from "../classes/Actor";
import FilmList from "../components/FilmList.vue";

@Options({
  name: "actorInformations",
  props: {
    actor: Actor,
  },
  components: {
    FilmList,
  },
})
export default class ActorInformations extends Vue {}
</script>
