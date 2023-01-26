import React from "react";
import * as Component from "./index";
import * as Shared from "../../shared";
import StyledSingleMovie from "./style";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SharedUnderline } from "../../../style/shared";
import * as singleMovieSlice from "../../../redux/features/movies/singleMovieSlice";

const SingleMoviePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { singleMovieInfo, singleMovieReviews, singleMovieVideo } = useSelector(
    (store) => store.singleMovie
  );
  const {
    moviesNowPlaying,
    nowPlayingIsLoading,
    moviesComingSoon,
    comingSoonIsLoading,
  } = useSelector((store) => store.movies);

  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [pageTitle, setPageTitle] = React.useState(location.state?.pageTitle);
  const { title } = singleMovieInfo;
  const movieTitle = storedData?.title || title;
  const movieReviews = storedData?.reviews || singleMovieReviews;
  const movieTrailer = storedData?.trailer || singleMovieVideo;
  const isTrailer = Object.keys(movieTrailer).length > 0;
  const isMovieData = Object.keys(singleMovieInfo).length > 0;
  const currentRoute = location.pathname;
  const endpoint = currentRoute.split("/").at(-1).split("_").join(" ");

  const checkMoviesNowPlaying = moviesNowPlaying.find(
    (movie) => movie.title === endpoint
  );
  const checkMoviesComingSoon = moviesComingSoon.find(
    (movie) => movie.title === endpoint
  );

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  React.useEffect(() => {
    if (checkMoviesComingSoon && !pageTitle) {
      setPageTitle("Coming Soon");
    }
    // eslint-disable-next-line
  }, [isMovieData]);

  React.useEffect(() => {
    if (nowPlayingIsLoading && comingSoonIsLoading && !isMovieData) {
      setIsLoading(true);
    }
    // eslint-disable-next-line
  }, [nowPlayingIsLoading, comingSoonIsLoading]);

  React.useEffect(() => {
    if (!nowPlayingIsLoading && !comingSoonIsLoading && !isMovieData) {
      const foundMovie = checkMoviesNowPlaying || checkMoviesComingSoon;

      if (foundMovie) {
        dispatch(singleMovieSlice.getSingleMovieInfo(foundMovie.id));
        dispatch(singleMovieSlice.getSingleMovieVideos(foundMovie.id));
        dispatch(singleMovieSlice.getSingleMovieReviews(foundMovie.id));
        setIsLoading(false);
      } else {
        setIsError(true);
        setIsLoading(false);
      }
    }

    // eslint-disable-next-line
  }, [nowPlayingIsLoading, comingSoonIsLoading]);

  if ((nowPlayingIsLoading || isLoading) && !isError) {
    return <Shared.Loading />;
  }

  if (isError) {
    return <Shared.Error />;
  }

  return (
    <StyledSingleMovie>
      <Shared.Navigation
        title={movieTitle}
        pageTitle={pageTitle ? pageTitle : undefined}
      />
      <Component.MainTitle />
      <Component.Trailer title={title} />
      <StyledSingleMovie.InfoContainer trailer={isTrailer}>
        <Component.MovieInfo />
        <Component.Poster />
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
