import React from "react";

import MoviesNowPlayingSlider from "../Sliders/MoviesNowPlayingSlider";
import MoviesComingSoonSlider from "../Sliders/MoviesComingSoonSlider";
import MoviesNowPlaying from "../Movies/MoviesNowPlaying";

const HomePage = () => {
  return (
    <main>
      <MoviesNowPlayingSlider />
      <MoviesNowPlaying />
      <MoviesComingSoonSlider />
    </main>
  );
};

export default HomePage;
