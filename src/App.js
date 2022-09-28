import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import * as Pages from "./Components/Pages";
import * as moviesSliceModule from "./features/moviesSlice";

function App() {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [isMovieTrailer, setIsMovieTrailer] = React.useState(false);
  const nowPlayingContainer = React.useRef();
  const FAQsTickets = React.useRef();
  const FAQsMovie = React.useRef();
  const FAQsCovid = React.useRef();

  React.useEffect(() => {
    dispatch(moviesSliceModule.getMoviesNowPlaying());
    dispatch(moviesSliceModule.getMoviesComingSoon());
  });

  isModal
    ? document.body.classList.add("no-scrolling")
    : document.body.classList.remove("no-scrolling");

  return (
    <Router>
      {isModal && isFormValid && (
        <Pages.ContactUsModal
          setIsModal={setIsModal}
          setIsFormValid={setIsFormValid}
        />
      )}
      {isModal && isMovieTrailer && (
        <Pages.MovieTrailerModal
          setIsModal={setIsModal}
          setIsMovieTrailer={setIsMovieTrailer}
          isMovieTrailer={isMovieTrailer}
        />
      )}
      <Navbar nowPlayingContainer={nowPlayingContainer} />
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
          element={
            <Pages.BookingPage
              setIsModal={setIsModal}
              setIsMovieTrailer={setIsMovieTrailer}
            />
          }
        />
        <Route
          exact
          path="/comingSoon"
          element={<Pages.MoviesComingSoonPage />}
        />
        <Route
          exact
          path="/comingSoon/:title"
          element={<Pages.SingleMoviePage />}
        />
        <Route exact path="/about" element={<Pages.AboutPage />} />
        <Route
          exact
          path="/contact_us"
          element={
            <Pages.ContactUsPage
              refTickets={FAQsTickets}
              refMovie={FAQsMovie}
              refCovid={FAQsCovid}
              setIsModal={setIsModal}
              setIsFormValid={setIsFormValid}
            />
          }
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
        <Route exact path="/giftCard" element={<Pages.GiftCardPage />} />
        <Route exact path="/cinema_cafe" element={<Pages.CinemaCafePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
