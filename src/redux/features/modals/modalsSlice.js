import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
  isMenuModal: false,
  isAuthModal: false,
  isContactUsModal: false,
  isMovieTrailerModal: false,
  isCardPaymentModal: false,
  isLoadingModal: false,
  isBookingSummaryModal: false,
  isBookingExpiredModal: false,
};

const modalsSLice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    handleIsModal: (state, action) => {
      state.isModal = action.payload;
    },
    handleIsMenuModal: (state, action) => {
      state.isMenuModal = action.payload;
    },
    handleIsAuthModal: (state, action) => {
      state.isAuthModal = action.payload;
    },
    handleIsContactUsModal: (state, action) => {
      state.isContactUsModal = action.payload;
    },
    handleIsMovieTrailerModal: (state, action) => {
      state.isMovieTrailerModal = action.payload;
    },
    handleIsCardPaymentModal: (state, action) => {
      state.isCardPaymentModal = action.payload;
    },
    handleIsLoadingModal: (state, action) => {
      state.isLoadingModal = action.payload;
    },
    handleIsBookingSummaryModal: (state, action) => {
      state.isBookingSummaryModal = action.payload;
    },
    handleIsBookingExpiredModal: (state, action) => {
      state.isBookingExpiredModal = action.payload;
    },
    hideAllModals: (state) => {
      state.isModal = false;
      state.isMenuModal = false;
      state.isAuthModal = false;
      state.isContactUsModal = false;
      state.isMovieTrailerModal = false;
      state.isCardPaymentModal = false;
      state.isLoadingModal = false;
      state.isBookingSummaryModal = false;
      state.isBookingExpiredModal = false;
    },
  },
});

export const {
  handleIsModal,
  handleIsMenuModal,
  handleIsAuthModal,
  handleIsContactUsModal,
  handleIsMovieTrailerModal,
  handleIsCardPaymentModal,
  handleIsLoadingModal,
  handleIsBookingSummaryModal,
  handleIsBookingExpiredModal,
  hideAllModals,
} = modalsSLice.actions;

export default modalsSLice.reducer;
