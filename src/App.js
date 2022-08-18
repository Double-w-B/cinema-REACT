import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import * as PagesModule from "./Components/Pages";
import { useDispatch } from "react-redux";
import {
  getMoviesNowPlaying,
  getMoviesComingSoon,
} from "./features/moviesSlice";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMoviesNowPlaying());
    dispatch(getMoviesComingSoon());
  });

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PagesModule.HomePage />} />
        <Route
          exact
          path="/nowPlaying"
          element={<PagesModule.MoviesNowPlayingPage />}
        />
        <Route
          exact
          path="/nowPlaying/:title"
          element={<PagesModule.SingleMoviePage />}
        />
        <Route
          exact
          path="/comingSoon"
          element={<PagesModule.MoviesComingSoonPage />}
        />
        <Route
          exact
          path="/comingSoon/:title"
          element={<PagesModule.SingleMoviePage />}
        />
        <Route
          exact
          path="/about"
          element={<PagesModule.UnlimitedPage />}
        />
        <Route
          exact
          path="/contact_us"
          element={<PagesModule.UnlimitedPage />}
        />
        <Route
          exact
          path="help/faq"
          element={<PagesModule.FAQpage />}
        />
        <Route
          exact
          path="/unlimited"
          element={<PagesModule.UnlimitedPage />}
        />
        <Route exact path="/giftCard" element={<PagesModule.GiftCardPage />} />
        <Route
          exact
          path="/cinema_bar"
          element={<PagesModule.CinemaBarPage />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
