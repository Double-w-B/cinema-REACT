import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const keyAPI = "18f24bc2d57d05d27034e7869d945e9f";
const urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${keyAPI}&language=en-US&page=1`;
const urlComingSoon = `https://api.themoviedb.org/3/movie/upcoming?api_key=${keyAPI}&language=en-US&page=1`;

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
    [getMoviesNowPlaying.pending]: (state) => {
      state.nowPlayingIsLoading = true;
    },
    [getMoviesNowPlaying.fulfilled]: (state, action) => {
      state.moviesNowPlaying = action.payload;
      console.log(state.moviesNowPlaying);
      state.nowPlayingIsLoading = false;
    },
    [getMoviesComingSoon.pending]: (state) => {
      state.comingSoonIsLoading = true;
    },
    [getMoviesComingSoon.fulfilled]: (state, action) => {
      state.moviesComingSoon = action.payload;
      console.log(state.moviesComingSoon);
      state.comingSoonIsLoading = false;
    },
  },
});

export default moviesSlice.reducer;
