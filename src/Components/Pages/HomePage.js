import React from "react";
import MoviesNowPlayingSlider from "../Sliders/MoviesNowPlayingSlider";
import MoviesComingSoonSlider from "../Sliders/MoviesComingSoonSlider";
import MoviesNowPlaying from "../Movies/MoviesNowPlaying";
import { useSelector } from "react-redux";
import LoadingPage from "./LoadingPage/LoadingPage";

const HomePage = (props) => {
  const { nowPlayingIsLoading } = useSelector((store) => store.movies);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (nowPlayingIsLoading) {
    return <LoadingPage />;
  }

  return (
    <main>
      <MoviesNowPlayingSlider />
      <MoviesNowPlaying {...props} />
      <MoviesComingSoonSlider />
    </main>
  );
};

export default HomePage;
