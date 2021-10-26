<template>
  <div class="movie-informations">
    <h1>{{ movie.title }}</h1>
    <img v-if="movie.posterPath" v-bind:src="movie.posterPath" />
    <div v-if="isLoading"><loading></loading></div>
    <div v-else>
      <h2>Date de sortie : {{ this.releaseDateToText() }}</h2>
      Acteurs :
      <actors-list v-bind:actorsList="movie.actorsStarring"> </actors-list>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ActorsList from "../components/ActorsList.vue";
import Loading from "../components/Loading.vue";
import Movie from "../types/Movie";
import axios from "axios";

@Options({
  name: "movieInformations",
  data() {
    return {
      movie: undefined || Movie,
      isLoading: true,
    };
  },
  components: {
    ActorsList,
    Loading,
  },
  created() {
    this.movie = this.$store.state.displayedMovie;
    console.log(this.$route.params.id);
    axios
      .get(`/api/movies/${this.$route.params.id}`)
      .then((response) => {
        this.movie = response.data as Movie;
        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    releaseDateToText() {
      if (this.movie != undefined && this.movie.releaseDate) {
        return this.movie.releaseDate.value;
      }
    },
  },
})
export default class MovieInformations extends Vue {}
</script>
