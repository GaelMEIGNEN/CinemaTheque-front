<template>
  <div class="movie-list">
    <ul>
      <li v-for="movie in movieList" v-bind:key="movie.id">
        <div class="movie">
          <h2>Title : {{ movie.title }}</h2>
          <br />
          <img v-if="movie.poster_path" v-bind:src="movie.poster_path" />
          Actors:
          <actor-list v-bind:actorList="movie.actorsStarring"> </actor-list>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Movie } from "../classes/Movie";
import ActorList from "./ActorList.vue";
import axios from "axios";

@Options({
  name: "movieList",
  components: {
    ActorList,
  },
})
export default class movieList extends Vue {
  movieList: Movie[] = [];
  created() {
    axios.get("http://localhost:3000/movies/").then((response) => {
      this.movieList = response.data as Movie[];
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

.movie-list {
  display: flex;
}
</style>
