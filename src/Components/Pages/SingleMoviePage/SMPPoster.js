import React from "react";
import styled from "styled-components";
import spinnerImg from "../../../Images/spinner.gif";
import { useSelector } from "react-redux";

const SMPPoster = () => {
  const [imgSrc, setImgSrc] = React.useState(spinnerImg);
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { release_date, runtime, poster_path } = singleMovieInfo;

  const posterUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  const onLoad = React.useCallback(() => {
    setTimeout(() => {
      setImgSrc(posterUrl);
    }, 1000);
  }, [posterUrl]);

  React.useEffect(() => {
    const img = new Image();
    img.src = posterUrl;
    img.onload = onLoad();
  }, [posterUrl, onLoad]);

  return (
    <StyledPosterContainer>
      <div className="date-time">
        <div className="date">
          <p>Release date:</p>
          <p>{release_date}</p>
        </div>
        <div className="time">
          <p>Running time:</p>
          <p>{runtime} min</p>
        </div>
      </div>

      <img
        src={imgSrc}
        // src={spinnerImg}
        // src={`https://image.tmdb.org/t/p/original${poster_path}`}
        // src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt="poster"
      />
    </StyledPosterContainer>
  );
};

const StyledPosterContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 0.5rem;

  img {
    width: 100%;
    height: 90%;
    display: block;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .date-time {
    height: 10%;
    color: #fff;
    display: flex;
    justify-content: space-between;

    .date,
    .time {
      p:last-child {
        color: #f12535;
      }
    }
    .time p {
      text-align: right;
    }
  }
`;

export default SMPPoster;
