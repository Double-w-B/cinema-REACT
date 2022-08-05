import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://api.themoviedb.org/3/movie/";
const api = `?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

const initialState = {
  singleMovieInfo: {},
  singleMovieVideo: {},
  singleMovieReviews: [],
};

export const getSingleMovieInfo = createAsyncThunk(
  "movies/getSingleMovieInfo",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(url + id + api);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "smth went wrong with getSingleMovieInfo"
      );
    }
  }
);

export const getSingleMovieVideos = createAsyncThunk(
  "movies/getSingleMovieVideos",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(url + id + "/videos" + api);
      const data = await response.json();
      const trailer = data.results.find((video) => video.type === "Trailer");
      const teaser = data.results.find((video) => video.type === "Teaser");
      return trailer ? trailer : teaser;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "smth went wrong with getSingleMovieVideos"
      );
    }
  }
);

export const getSingleMovieReviews = createAsyncThunk(
  "movies/getSingleMovieReviews",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(url + id + "/reviews" + api + "&page=1");
      const data = await response.json();
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "smth went wrong with getSingleMovieReviews"
      );
    }
  }
);

const singleMovieSlice = createSlice({
  name: "singleMovie",
  initialState,
  reducers: {
    removeSingleMovieData: (state, action) => {
      state.singleMovieInfo = {};
      state.singleMovieVideo = {};
    },
  },
  extraReducers: {
    [getSingleMovieInfo.pending]: (state) => {
      //   state.nowPlayingIsLoading = true;
    },
    [getSingleMovieInfo.fulfilled]: (state, action) => {
      state.singleMovieInfo = action.payload;
      //   console.log(state.singleMovieInfo);
      //   state.nowPlayingIsLoading = false;
    },
    [getSingleMovieVideos.fulfilled]: (state, action) => {
      state.singleMovieVideo = action.payload;
      //   console.log(state.singleMovieVideos);
      //   state.nowPlayingIsLoading = false;
    },
    [getSingleMovieReviews.fulfilled]: (state, action) => {
      state.singleMovieReviews = action.payload;
      console.log(state.singleMovieReviews);
      //   state.nowPlayingIsLoading = false;
    },
  },
});

export const { removeSingleMovieData } = singleMovieSlice.actions;

export default singleMovieSlice.reducer;
