<template>
  <div class="film-list">
    <ul>
      <li v-for="film in filmList" v-bind:key="film.id">
        <div class="film">
          <h2>Title : {{ film.title }}</h2>
          <br />
          <img v-if="film.posterUrl" v-bind:src="film.posterUrl" />
          Actors:
          <actor-list v-bind:actorList="film.actorsStarring"> </actor-list>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Film } from "./../classes/Film";
import ActorList from "./ActorList.vue";
import axios from "axios";

@Options({
  name: "filmList",
  components: {
    ActorList,
  },
})
export default class FilmList extends Vue {
  filmList: Film[] = [];
  // data() {
  //   return {
  //     filmList: new Array(),
  //   };
  // }
  // methods: {
  //   getFilms() {

  //   }
  // }
  created() {
    axios.get("http://localhost:3000/films/").then((response) => {
      this.filmList = response.data as Film[];
    });
  }
}
</script>

<style>
img {
  height: 150px;
  width: 100px;
}

li {
  list-style-type: none;
}

.film-list {
  display: flex;
}
</style>
