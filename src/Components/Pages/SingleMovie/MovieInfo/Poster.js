import React from "react";
import StyledMovieInfo from "./style";
import spinnerImg from "../../../../assets/spinner.gif";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import * as bookingSlice from "../../../../redux/features/booking/bookingSlice";
const Poster = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const nowPlaying = location.pathname.split("/")[1] === "nowPlaying";

  const [imgLoaded, setImgLoaded] = React.useState(false);

  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { windowWidth } = useSelector((store) => store.app);
  const { release_date, runtime, poster_path, backdrop_path, title, id } =
    singleMovieInfo;
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));

  const posterUrl = "https://image.tmdb.org/t/p/original";
  const posterImage = posterUrl + (storedData?.poster_path || poster_path);
  const backdropImage = posterUrl + backdrop_path;

  const date = storedData?.release_date || release_date;
  const time = storedData?.runtime || runtime;
  const movieTitle = storedData?.title || title;
  const movieId = storedData?.id || id;

  const changedTitle = movieTitle?.split(" ").join("_");

  const handleImageOnLoad = () => {
    console.log("load");
    const timer = setTimeout(() => setImgLoaded(true), 500);
    return () => clearTimeout(timer);
  };

  const handleClick = () => {
    dispatch(bookingSlice.addBookingMovieId(movieId));
    dispatch(bookingSlice.addBookingMovieTitle(movieTitle));
  };

  return (
    <StyledMovieInfo.Poster>
      {windowWidth > 940 && (
        <div className="date-time">
          <div className="date">
            <p>Release date:</p>
            <p>{date}</p>
          </div>
          <div className="time">
            <p>Running time:</p>
            <p>{time > 0 ? time + "min" : "unknown"}</p>
          </div>
        </div>
      )}

      <StyledMovieInfo.ImgContainer imgLoaded={imgLoaded}>
        <div>
          <img src={spinnerImg} className="spinner" alt="" />
        </div>
        {windowWidth <= 940 ? (
          <img src={backdropImage} alt="" onLoad={handleImageOnLoad} />
        ) : (
          <img src={posterImage} alt="" onLoad={handleImageOnLoad} />
        )}
      </StyledMovieInfo.ImgContainer>

      {nowPlaying && windowWidth < 940 && (
        <StyledMovieInfo.ButtonContainer>
          <Link
            to={`/nowPlaying/${changedTitle}/booking`}
            onClick={handleClick}
          >
            <StyledMovieInfo.Button>book now</StyledMovieInfo.Button>
          </Link>
        </StyledMovieInfo.ButtonContainer>
      )}
    </StyledMovieInfo.Poster>
  );
};

export default Poster;
