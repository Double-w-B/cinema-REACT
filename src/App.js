import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import * as Pages from "./Components/Pages";
import * as Modals from "./Components/Modal";
import * as moviesSlice from "./redux/features/movies/allMoviesSlice";

function App() {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [isMovieTrailer, setIsMovieTrailer] = React.useState(false);
  const [isAuthModal, setIsAuthModal] = React.useState(false);
  const [isCardPaymentModal, setIsCardPaymentModal] = React.useState(false);
  const [isLoadingModal, setIsLoadingModal] = React.useState(false);
  const [isBookingSummaryModal, setIsBookingSummaryModal] =
    React.useState(false);
  const [isBookingExpiredModal, setIsBookingExpiredModal] =
    React.useState(false);

  const nowPlayingContainer = React.useRef(null);
  const FAQsTickets = React.useRef(null);
  const FAQsMovie = React.useRef(null);
  const FAQsCovid = React.useRef(null);

  React.useEffect(() => {
    dispatch(moviesSlice.getMoviesNowPlaying());
    dispatch(moviesSlice.getMoviesComingSoon());
  });

  const refs = {
    nowPlayingContainer,
    FAQsTickets,
    FAQsMovie,
    FAQsCovid,
  };

  const modalsInitialState = {
    setIsModal,
    setIsFormValid,
    isAuthModal,
    setIsAuthModal,
    isMovieTrailer,
    setIsMovieTrailer,
    setIsCardPaymentModal,
    setIsLoadingModal,
    isBookingSummaryModal,
    setIsBookingSummaryModal,
    setIsBookingExpiredModal,
  };

  isModal
    ? document.body.classList.add("no-scrolling")
    : document.body.classList.remove("no-scrolling");

  return (
    <Router>
      {/* Modals */}

      {isModal && isFormValid && (
        <Modals.ContactUsModal {...modalsInitialState} />
      )}
      {isModal && isMovieTrailer && (
        <Modals.MovieTrailerModal {...modalsInitialState} />
      )}
      {isModal && isAuthModal && <Modals.AuthModal {...modalsInitialState} />}
      {isModal && isCardPaymentModal && (
        <Modals.CardPaymentModal {...modalsInitialState} />
      )}
      {isModal && isLoadingModal && (
        <Modals.LoadingModal {...modalsInitialState} />
      )}
      {isModal && isBookingSummaryModal && (
        <Modals.BookingSummaryModal {...modalsInitialState} />
      )}
      {isModal && isBookingExpiredModal && (
        <Modals.BookingExpiredModal {...modalsInitialState} />
      )}

      <Navbar {...refs} {...modalsInitialState} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Pages.HomePage nowPlayingContainer={nowPlayingContainer} />}
        />
        <Route
          exact
          path="/nowPlaying/:title"
          element={<Pages.SingleMoviePage />}
        />
        <Route
          exact
          path="/nowPlaying/:title/booking"
          element={<Pages.BookingPage {...modalsInitialState} />}
        />
        <Route exact path="/comingSoon" element={<Pages.ComingSoonPage />} />
        <Route
          exact
          path="/comingSoon/:title"
          element={<Pages.SingleMoviePage />}
        />
        <Route exact path="/about" element={<Pages.AboutPage />} />
        <Route
          exact
          path="/contact_us"
          element={<Pages.ContactUsPage {...refs} {...modalsInitialState} />}
        />
        <Route
          exact
          path="/help/faq"
          element={
            <Pages.FAQpage
              refTickets={FAQsTickets}
              refMovie={FAQsMovie}
              refCovid={FAQsCovid}
            />
          }
        />
        <Route exact path="/unlimited" element={<Pages.UnlimitedPage />} />
        <Route
          exact
          path="/myAccount"
          element={<Pages.UserAccountPage {...modalsInitialState} />}
        />
        <Route exact path="/cinema_cafe" element={<Pages.CinemaCafePage />} />
        <Route path="*" element={<Pages.Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
