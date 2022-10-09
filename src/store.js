import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/allMoviesSlice";
import singleMovieReducer from "./features/movies/singleMovieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    singleMovie: singleMovieReducer,
  },
});
