import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Footer";
import * as PagesModule from "./Components/Pages";
import { useDispatch } from "react-redux";
import { getMovies } from "./features/moviesSlice";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMovies());
  });

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PagesModule.HomePage />} />
        <Route
          exact
          path="/playingNow"
          element={<PagesModule.MoviesNowPlayingPage />}
        />
        <Route
          exact
          path="/playingNow/:title"
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
          path="/unlimited"
          element={<PagesModule.UnlimitedPage />}
        />
        <Route exact path="/giftCard" element={<PagesModule.GiftCardPage />} />
        <Route
          exact
          path="/cinemaBar"
          element={<PagesModule.CinemaBarPage />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
