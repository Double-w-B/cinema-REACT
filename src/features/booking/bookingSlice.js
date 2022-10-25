import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingMovieId: "",
  bookingMovieTitle: "",
  bookingDay: "",
  bookingTime: "",
  bookingNumberOfTickets: 0,
  bookingAdultTickets: 0,
  bookingChildTickets: 0,
  bookingSeniorTickets: 0,
  bookingTotalPrice: 0,
  bookingSeats: [],
  bookingEmail: "",
};

const bookingTicketsSlice = createSlice({
  name: "bookingMovie",
  initialState,
  reducers: {
    addBookingMovieId: (state, action) => {
      state.bookingMovieId = action.payload;
    },
    addBookingMovieTitle: (state, action) => {
      state.bookingMovieTitle = action.payload;
    },
    addBookingDay: (state, action) => {
      state.bookingDay = action.payload;
    },
    addBookingTime: (state, action) => {
      state.bookingTime = action.payload;
    },
    addBookingNumberOfTickets: (state, action) => {
      state.bookingNumberOfTickets = action.payload;
    },
    addBookingAdultTicketsNumber: (state, action) => {
      state.bookingAdultTickets = action.payload;
    },
    addBookingChildTicketsNumber: (state, action) => {
      state.bookingChildTickets = action.payload;
    },
    addBookingSeniorTicketsNumber: (state, action) => {
      state.bookingSeniorTickets = action.payload;
    },
    addBookingSeats: (state, action) => {
      state.bookingSeats = [action.payload, ...state.bookingSeats];
    },
    replaceBookingSeat: (state, action) => {
      const allSeatsCopy = [...state.bookingSeats];
      allSeatsCopy.pop();
      allSeatsCopy.unshift(action.payload);
      state.bookingSeats = allSeatsCopy;
    },
    removeBookingSeats: (state, action) => {
      state.bookingSeats = [];
    },
    addBookingTotalPrice: (state, action) => {
      state.bookingTotalPrice = action.payload;
    },
    addBookingEmail: (state, action) => {
      state.bookingEmail = action.payload;
    },
  },
});

export const {
  addBookingMovieId,
  addBookingMovieTitle,
  addBookingDay,
  addBookingTime,
  addBookingNumberOfTickets,
  addBookingTotalPrice,
  addBookingSeats,
  replaceBookingSeat,
  removeBookingSeats,
  addBookingAdultTicketsNumber,
  addBookingChildTicketsNumber,
  addBookingSeniorTicketsNumber,
  addBookingEmail,
} = bookingTicketsSlice.actions;

export default bookingTicketsSlice.reducer;
