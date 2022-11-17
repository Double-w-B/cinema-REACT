import React from "react";
import StyledMovieInfo from "./style";
import spinnerImg from "../../../../assets/spinner.gif";
import { useSelector } from "react-redux";

const Poster = () => {
  const [imgLoaded, setImgLoaded] = React.useState(false);
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { release_date, runtime, poster_path } = singleMovieInfo;
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));

  const posterUrl = `https://image.tmdb.org/t/p/original${
    storedData?.poster_path || poster_path
  }`;

  const date = storedData?.release_date || release_date;
  const time = storedData?.runtime || runtime;

  return (
    <StyledMovieInfo.Poster>
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

      <StyledMovieInfo.ImgContainer imgLoaded={imgLoaded}>
        <div>
          <img src={spinnerImg} alt="" />
        </div>
        <img
          src={posterUrl}
          alt="poster"
          onLoad={() => setTimeout(() => setImgLoaded(true), 500)}
        />
      </StyledMovieInfo.ImgContainer>
    </StyledMovieInfo.Poster>
  );
};

export default Poster;
