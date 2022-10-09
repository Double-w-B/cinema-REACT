import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/allMoviesSlice";
import singleMovieReducer from "./features/movies/singleMovieSlice";
import bookingTicketsReducer from "./features/booking/bookingSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    singleMovie: singleMovieReducer,
    bookingTickets: bookingTicketsReducer,
  },
});
