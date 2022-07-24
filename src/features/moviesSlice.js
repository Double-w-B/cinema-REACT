import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=18f24bc2d57d05d27034e7869d945e9f&language=en-US&page=1";

const initialState = {
  movies: [],
  isLoading: true,
};

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (name, thunkAPI) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue("smth went wrong");
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      console.log(state.movies);
      state.isLoading = false;
    },
  },
});

export default moviesSlice.reducer;
