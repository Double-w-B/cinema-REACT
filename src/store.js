import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice";
import singleMovieReducer from "./features/singleMovieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    singleMovie: singleMovieReducer,
  },
});
