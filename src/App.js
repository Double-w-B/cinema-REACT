import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import * as Pages from "./Components/Pages";
import * as Modals from "./Components/Modal";
import * as moviesSlice from "./redux/features/movies/allMoviesSlice";
import { changeWindowWidth } from "./redux/features/functional/appSlice";

function App() {
  const dispatch = useDispatch();
  const { isModal } = useSelector((store) => store.modals);

  const nowPlayingContainer = React.useRef(null);
  const FAQsTickets = React.useRef(null);
  const FAQsMovie = React.useRef(null);
  const FAQsCovid = React.useRef(null);

  React.useEffect(() => {
    dispatch(moviesSlice.getMoviesNowPlaying());
    dispatch(moviesSlice.getMoviesComingSoon());
  });

  React.useEffect(() => {
    const setWindowWidth = () => {
      dispatch(changeWindowWidth(window.innerWidth));
    };

    window.addEventListener("resize", setWindowWidth);
    return () => window.removeEventListener("resize", setWindowWidth);
  });

  const refs = {
    nowPlayingContainer,
    FAQsTickets,
    FAQsMovie,
    FAQsCovid,
  };

  isModal
    ? document.body.classList.add("no-scrolling")
    : document.body.classList.remove("no-scrolling");

  return (
    <Router>
      <Modals.ModalOverlay>
        <Modals.Menu nowPlayingContainer={nowPlayingContainer} />
        <Modals.Auth />
        <Modals.ContactUs />
        <Modals.MovieTrailer />
        <Modals.CardPayment />
        <Modals.Loading />
        <Modals.BookingSummary />
        <Modals.BookingExpired />
      </Modals.ModalOverlay>

      <Navbar {...refs} />
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
          element={<Pages.BookingPage />}
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
          element={<Pages.ContactUsPage {...refs} />}
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
        <Route exact path="/myAccount" element={<Pages.UserAccountPage />} />
        <Route exact path="/cinema_cafe" element={<Pages.CinemaCafePage />} />
        <Route path="*" element={<Pages.Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
