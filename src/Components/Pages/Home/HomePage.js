import React from "react";
import StyledHomePage from "./style";
import * as Component from "./index";
import { useSelector } from "react-redux";
import LoadingPage from "../../shared/Loading";

const HomePage = (props) => {
  const { nowPlayingIsLoading } = useSelector((store) => store.movies);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (nowPlayingIsLoading) {
    return <LoadingPage />;
  }

  return (
    <StyledHomePage>
      <Component.NowPlayingSlider />
      <Component.NowPlaying {...props} />
      <Component.ComingSoonSlider />
    </StyledHomePage>
  );
};

export default HomePage;
