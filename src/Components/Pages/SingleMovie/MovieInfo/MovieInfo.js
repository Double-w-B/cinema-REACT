import React from "react";
import StyledMovieInfo from "./style";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import * as Component from "./index";
import * as bookingSlice from "../../../../redux/features/booking/bookingSlice";

const MovieInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const nowPlaying = location.pathname.split("/")[1] === "nowPlaying";

  const { windowWidth } = useSelector((store) => store.app);
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { tagline, overview, title, id } = singleMovieInfo;

  const slogan = storedData?.tagline || tagline;
  const movieOverview = storedData?.overview || overview;
  const movieTitle = storedData?.title || title;
  const movieId = storedData?.id || id;

  const setTitle = () => {
    const urlMovieTitle = movieTitle?.split(" ").join("_");
    return urlMovieTitle;
  };

  const handleClick = () => {
    dispatch(bookingSlice.addBookingMovieId(movieId));
    dispatch(bookingSlice.addBookingMovieTitle(movieTitle));
  };

  return (
    <StyledMovieInfo nowPlaying={nowPlaying}>
      <Component.Title />
      <Component.ShortInfo />

      <p className="overview">{movieOverview}</p>

      {slogan && <p className="tagline">"{slogan}"</p>}
      {nowPlaying && windowWidth > 940 && (
        <StyledMovieInfo.ButtonContainer>
          <Link to={`/nowPlaying/${setTitle()}/booking`} onClick={handleClick}>
            <StyledMovieInfo.Button>book now</StyledMovieInfo.Button>
          </Link>
        </StyledMovieInfo.ButtonContainer>
      )}
    </StyledMovieInfo>
  );
};

export default MovieInfo;
