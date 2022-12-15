import React from "react";
import * as Component from "./index";
import StyledSingleMovie from "./style";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Navigation from "../../shared/Navigation";
import { SharedUnderline } from "../../../style/shared";

const SingleMoviePage = () => {
  const location = useLocation();

  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { singleMovieInfo, singleMovieReviews, singleMovieVideo } = useSelector(
    (store) => store.singleMovie
  );

  const { title } = singleMovieInfo;
  const pageTitle = location.state?.pageTitle;
  const movieTitle = storedData?.title || title;
  const movieReviews = storedData?.reviews || singleMovieReviews;
  const movieTrailer = storedData?.trailer || singleMovieVideo;
  const isTrailer = Object.keys(movieTrailer).length > 0;
  const isMovieDataLoaded = Object.keys(singleMovieInfo).length > 0;

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <StyledSingleMovie>
      <Navigation
        title={movieTitle}
        pageTitle={pageTitle ? pageTitle : undefined}
      />
      <Component.MainTitle />
      <Component.Trailer title={title} />
      <StyledSingleMovie.InfoContainer trailer={isTrailer}>
        {isMovieDataLoaded && <Component.MovieInfo />}
        {isMovieDataLoaded && <Component.Poster />}
      </StyledSingleMovie.InfoContainer>
      <StyledSingleMovie.ReviewTitle>
        <h1>
          Reviews <span>({movieReviews.length})</span>
        </h1>
        <SharedUnderline />
      </StyledSingleMovie.ReviewTitle>
      <Component.Reviews />
    </StyledSingleMovie>
  );
};

export default SingleMoviePage;
