import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
const urlComingSoon = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

const initialState = {
  moviesNowPlaying: [],
  moviesComingSoon: [],
  nowPlayingIsLoading: true,
  comingSoonIsLoading: true,
  imgHiResUrl: "https://image.tmdb.org/t/p/original",
  imgLowResUrl: "https://image.tmdb.org/t/p/w500",
};

export const getMoviesNowPlaying = createAsyncThunk(
  "movies/getMoviesNowPlaying",
  async (name, thunkAPI) => {
    try {
      const response = await fetch(urlNowPlaying);
      const data = await response.json();
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue("smth went wrong");
    }
  }
);

export const getMoviesComingSoon = createAsyncThunk(
  "movies/getMoviesComingSoon",
  async (name, thunkAPI) => {
    try {
      const response = await fetch(urlComingSoon);
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
    [getMoviesNowPlaying.pending]: (state) => {},
    [getMoviesNowPlaying.fulfilled]: (state, action) => {
      state.moviesNowPlaying = action.payload;
      state.nowPlayingIsLoading = false;
    },
    [getMoviesComingSoon.pending]: (state) => {},
    [getMoviesComingSoon.fulfilled]: (state, action) => {
      state.moviesComingSoon = action.payload;
      state.comingSoonIsLoading = false;
    },
  },
});

export default moviesSlice.reducer;
