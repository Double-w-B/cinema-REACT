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
  const { moviesNowPlaying, nowPlayingIsLoading } = useSelector(
    (store) => store.movies
  );

  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const { title } = singleMovieInfo;
  const pageTitle = location.state?.pageTitle;
  const movieTitle = storedData?.title || title;
  const movieReviews = storedData?.reviews || singleMovieReviews;
  const movieTrailer = storedData?.trailer || singleMovieVideo;
  const isTrailer = Object.keys(movieTrailer).length > 0;
  const isMovieData = Object.keys(singleMovieInfo).length > 0;

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  React.useEffect(() => {
    if (nowPlayingIsLoading && !isMovieData) {
      setIsLoading(true);
    }

    if (!nowPlayingIsLoading && !isMovieData) {
      const currentRoute = location.pathname;
      const endpoint = currentRoute.split("/").at(-1).split("_").join(" ");
      const foundMovie = moviesNowPlaying.find(
        (movie) => movie.title === endpoint
      );
      if (foundMovie) {
        dispatch(singleMovieSlice.getSingleMovieInfo(foundMovie.id));
        dispatch(singleMovieSlice.getSingleMovieVideos(foundMovie.id));
        dispatch(singleMovieSlice.getSingleMovieReviews(foundMovie.id));
        setIsLoading(false);
        console.log(singleMovieInfo);
      } else {
        setIsError(true);
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
    // eslint-disable-next-line
  }, [nowPlayingIsLoading]);

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
