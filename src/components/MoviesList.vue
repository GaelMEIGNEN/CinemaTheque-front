<template>
  <div class="movies-list">
    <div v-if="isLoading"><loading></loading></div>
    <div v-else>
      <ul>
        <li v-for="movie in moviesList" v-bind:key="movie.id">
          <a @click="setDisplayedMovie(movie)">
            <div class="movie">
              <h2>{{ movie.title }}</h2>
              <br />
              <img v-if="movie.posterPath" v-bind:src="movie.posterPath" />
              <!-- Actors:
            <actor-list v-bind:actorsList="movie.actorsStarring"> </actor-list> -->
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Movie from "../types/Movie";
import ActorsList from "./ActorsList.vue";
import Loading from "./Loading.vue";
import axios from "axios";

@Options({
  name: "movieList",
  components: {
    ActorsList,
    Loading,
  },
  methods: {
    setDisplayedMovie(movie: Movie) {
      this.$store.commit("setDisplayedMovie", movie);
    },
  },
})
export default class MoviesList extends Vue {
  moviesList: Movie[] = [];
  isLoading = true;
  created() {
    axios
      .get("http://localhost:3000/movies/")
      .then((response) => {
        this.moviesList = response.data as Movie[];
        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
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
