import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../Sliders/MoviesNowPlayingSlider";
import * as SingleMovieModule from "../../features/movies/singleMovieSlice";
import spinnerImg from "../../Images/spinner.gif";

const SingleMoviePoster = ({
  movieInfo,
  comingSoonClass,
  mouseActive,
  movieRelease,
  pageTitle,
}) => {
  const [imgLoaded, setImgLoaded] = React.useState(false);
  const { imgLowResUrl } = useSelector((store) => store.movies);
  const { poster_path, id, title } = movieInfo;
  const dispatch = useDispatch();

  const setPath = () => {
    const urlMovieTitle = title.split(" ").join("_");
    if (movieRelease === "playing") {
      return `/nowPlaying/${urlMovieTitle}`;
    } else {
      return `/comingSoon/${urlMovieTitle}`;
    }
  };

  const getSingleMovieData = () => {
    dispatch(SingleMovieModule.removeSingleMovieData());
    dispatch(SingleMovieModule.getSingleMovieInfo(id));
    dispatch(SingleMovieModule.getSingleMovieVideos(id));
    dispatch(SingleMovieModule.getSingleMovieReviews(id));
  };

  return (
    <StyledImgContainer
      comingSoonClass={comingSoonClass}
      mouseActive={mouseActive}
    >
      <StyledImgLayer imgLoaded={imgLoaded}>
        <img
          src={spinnerImg}
          alt="loading spinner"
          onLoad={() => setImgLoaded(true)}
        />
      </StyledImgLayer>
      <img src={imgLowResUrl + poster_path} alt="movie poster" />
      <Link to={setPath()} state={{ pageTitle }} draggable="false">
        <p onClick={getSingleMovieData}>{title}</p>
      </Link>

      {imgLoaded && (
        <StyledBtnLayer>
          <Link to={setPath()} state={{ pageTitle }} draggable="false">
            <StyledBtn onClick={getSingleMovieData}>see more</StyledBtn>
          </Link>
        </StyledBtnLayer>
      )}
    </StyledImgContainer>
  );
};

const StyledImgContainer = styled.article`
  position: relative;
  width: ${(props) => props.comingSoonClass && "200px"};
  height: ${(props) => props.comingSoonClass && "95%"};
  min-height: 300px;
  flex: ${(props) => props.comingSoonClass && "0 0 auto"};
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    margin-right: ${(props) => props.comingSoonClass && "150px"};
  }

  img {
    width: 100%;
    min-height: 90%;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.2s linear;
    color: transparent;
    z-index: 1;
  }

  div:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    cursor: ${(props) => props.comingSoonClass && !props.mouseActive && "grab"};
  }
  div:active {
    cursor: ${(props) => props.comingSoonClass && "grabbing"};
  }

  &:hover a p {
    text-decoration: underline;
    text-decoration-color: #f12535;
  }

  a {
    margin-top: 0.3rem;
    min-height: 10%;
    display: flex;
    align-self: center;

    &:hover ~ div {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.8);
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
  }

  p {
    color: #fff;
    text-align: center;
    z-index: 1;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #f12535;
    }
  }
`;

const StyledImgLayer = styled.div`
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
    object-fit: contain;
    width: 80%;
    height: 80%;
  }
`;

const StyledBtnLayer = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s linear;
  background-color: transparent;
  opacity: 0;
  z-index: 1;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.8);
  }

  a {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledBtn = styled(StyledButton)`
  width: 100%;
  font-size: 1.2rem;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:active {
    transform: translate(-50%, -50%) scale(0.9);
  }
`;
export default SingleMoviePoster;
