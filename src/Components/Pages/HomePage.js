import React from "react";
import MoviesNowPlayingSlider from "../Sliders/MoviesNowPlayingSlider";
import MoviesComingSoonSlider from "../Sliders/MoviesComingSoonSlider";
import MoviesNowPlaying from "../Movies/MoviesNowPlaying";

const HomePage = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <MoviesNowPlayingSlider />
      <MoviesNowPlaying nowPlayingContainer={props.nowPlayingContainer} />
      <MoviesComingSoonSlider />
    </main>
  );
};

export default HomePage;
