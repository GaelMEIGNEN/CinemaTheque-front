import { createStore } from "vuex";

export default createStore({
  state: {
    displayedMovie: undefined,
    moviesListDisplay: true,
    movieDisplay: false,
    actorDisplay: false,
  },
  mutations: {
    setDisplayedMovie(state, newMovie) {
      state.displayedMovie = newMovie;
      state.moviesListDisplay = false;
      state.movieDisplay = true;
      state.actorDisplay = false;
    },
  },
});
