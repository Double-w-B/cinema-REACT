import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledButton } from "../Sliders/MoviesNowPlayingSlider";
import { useDispatch, useSelector } from "react-redux";
import * as SingleMovieModule from "../../features/singleMovieSlice";

const SingleMoviePoster = ({ movieInfo, comingSoonClass, mouseActive }) => {
  const { imgLowResUrl } = useSelector((store) => store.movies);
  const urlMovieTitle = movieInfo.title.split(" ").join("_");
  const { poster_path, id, title } = movieInfo;
  const dispatch = useDispatch();

  const setPath = () => {
    if (comingSoonClass) {
      return `/comingSoon/${urlMovieTitle}`;
    } else {
      return `/nowPlaying/${urlMovieTitle}`;
    }
  };
  const getSingleMovieData = () => {
    dispatch(SingleMovieModule.getSingleMovieInfo(id));
    dispatch(SingleMovieModule.getSingleMovieVideos(id));
  };

  return (
    <StyledImgContainer
      comingSoonClass={comingSoonClass}
      mouseActive={mouseActive}
    >
      <img src={imgLowResUrl + poster_path} alt="movie poster" />
      <Link to={setPath()} draggable="false">
        <p onClick={getSingleMovieData}>{title}</p>
      </Link>
      <StyledLayer>
        <Link to={setPath()} draggable="false">
          <StyledBtn onClick={getSingleMovieData}>see more</StyledBtn>
        </Link>
      </StyledLayer>
    </StyledImgContainer>
  );
};

const StyledImgContainer = styled.article`
  position: relative;
  width: ${(props) => props.comingSoonClass && "200px"};
  height: ${(props) => props.comingSoonClass && "95%"};
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

    &:hover {
      text-decoration: underline;
      text-decoration-color: #f12535;
    }
  }
`;

const StyledLayer = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s linear;
  background-color: transparent;
  opacity: 0;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const StyledBtn = styled(StyledButton)`
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
