import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const url = "https://api.themoviedb.org/3/movie/";
const api = `?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

const initialState = {
  singleMovieInfo: {},
  singleMovieVideo: "",
  isMovieTrailerLoading: false,
  singleMovieReviews: [],
  userReviews: [],
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
      return trailer ? trailer : teaser || "";
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

const saveDataToStorage = (section, data) => {
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  let storageData = {};

  if (section) {
    if (section === "trailer") {
      storageData = { ...storedData, [section]: { ...data } };
    } else {
      storageData = { ...storedData, [section]: [...data] };
    }
    return sessionStorage.setItem("single_movie", JSON.stringify(storageData));
  }

  sessionStorage.setItem("single_movie", JSON.stringify(data));
};

const singleMovieSlice = createSlice({
  name: "singleMovie",
  initialState,
  reducers: {
    removeSingleMovieData: (state) => {
      state.singleMovieInfo = {};
      state.singleMovieVideo = {};
    },
    setSingleMovieVideoKey: (state, action) => {
      state.singleMovieVideo = action.payload;
    },

    addUserReview: (state, action) => {
      const currentState = current(state);

      state.userReviews = [...currentState.userReviews, action.payload];
      saveDataToStorage("userReviews", state.userReviews);

      state.singleMovieReviews = [
        ...currentState.singleMovieReviews,
        action.payload,
      ];
      saveDataToStorage("reviews", state.singleMovieReviews);
    },

    removeUserReview: (state) => {
      const currentState = current(state);
      const filteredReviews = (state) =>
        state.filter((review) => review.id !== currentState.singleMovieInfo.id);

      state.userReviews = filteredReviews(state.userReviews);
      saveDataToStorage("userReviews", state.userReviews);

      state.singleMovieReviews = filteredReviews(state.singleMovieReviews);
      saveDataToStorage("reviews", state.singleMovieReviews);
    },
  },
  extraReducers: {
    [getSingleMovieInfo.pending]: (state) => {},
    [getSingleMovieInfo.fulfilled]: (state, action) => {
      state.singleMovieInfo = action.payload;
      saveDataToStorage("", action.payload);
    },

    [getSingleMovieVideos.pending]: (state) => {
      state.isMovieTrailerLoading = true;
    },

    [getSingleMovieVideos.fulfilled]: (state, action) => {
      state.singleMovieVideo = action.payload;
      state.isMovieTrailerLoading = false;
      saveDataToStorage("trailer", action.payload);
    },

    [getSingleMovieReviews.fulfilled]: (state, action) => {
      state.singleMovieReviews = action.payload;
      const currentState = current(state);

      const userReview = state.userReviews.find(
        (review) => review.id === state.singleMovieInfo.id
      );

      if (userReview) {
        state.singleMovieReviews = [
          ...currentState.singleMovieReviews,
          userReview,
        ];
      }
      saveDataToStorage("reviews", state.singleMovieReviews);
    },
  },
});

export const {
  removeSingleMovieData,
  addUserReview,
  removeUserReview,
  setSingleMovieVideoKey,
} = singleMovieSlice.actions;

export default singleMovieSlice.reducer;
