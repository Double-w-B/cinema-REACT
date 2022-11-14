import React from "react";
import styled from "styled-components";
import spinnerImg from "../../../Images/spinner.gif";
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
    <StyledPosterContainer>
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

      <StyledImgContainer imgLoaded={imgLoaded}>
        <div>
          <img src={spinnerImg} alt="" />
        </div>
        <img
          src={posterUrl}
          alt="poster"
          onLoad={() => setTimeout(() => setImgLoaded(true), 500)}
        />
      </StyledImgContainer>
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

const StyledImgContainer = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
  background-color: #000;

  div {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: ${(props) => (props.imgLoaded ? "0" : "1")};
    z-index: ${(props) => (props.imgLoaded ? "0" : "2")};

    img {
      width: 30%;
      height: 30%;
    }
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    z-index: 1;
    filter: drop-shadow(0px 3px 10px #0a0f18);
  }
`;

export default Poster;
