import React from "react";
import StyledMovieInfo from "./style";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import spinnerImg from "../../../../assets/spinner.gif";
import * as bookingSlice from "../../../../redux/features/booking/bookingSlice";

const Poster = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const nowPlaying = location.pathname.split("/")[1] === "nowPlaying";

  const [imgLoaded, setImgLoaded] = React.useState(false);

  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { windowWidth } = useSelector((store) => store.app);
  const { imgHiResUrl } = useSelector((store) => store.movies);
  const { release_date, runtime, poster_path, backdrop_path, title, id } =
    singleMovieInfo;
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));

  const posterImage = imgHiResUrl + (storedData?.poster_path || poster_path);
  const backdropImage = imgHiResUrl + backdrop_path;

  const date = storedData?.release_date || release_date;
  const time = storedData?.runtime || runtime;
  const movieTitle = storedData?.title || title;
  const movieId = storedData?.id || id;
  const isMovieDataLoaded = Object.keys(singleMovieInfo).length > 0;
  const changedTitle = movieTitle?.split(" ").join("_");

  const handleImageOnLoad = () => {
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
        {windowWidth <= 940
          ? isMovieDataLoaded && (
              <img src={backdropImage} alt="" onLoad={handleImageOnLoad} />
            )
          : isMovieDataLoaded && (
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
