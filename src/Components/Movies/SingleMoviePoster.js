import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledButton } from "../Sliders/MoviesNowPlayingSlider";
import { useSelector } from "react-redux";

const SingleMoviePoster = ({ movieInfo, comingSoonClass }) => {
  const { imgLowResUrl } = useSelector((store) => store.movies);
  const urlMovieTitle = movieInfo.title.split(" ").join("_");
  const { poster_path, id, title } = movieInfo;
  
  const setPath = () => {
    if (comingSoonClass) {
      return `/comingSoon/${urlMovieTitle}`;
    } else {
      return `/nowPlaying/${urlMovieTitle}`;
    }
  };

  return (
    <StyledImgContainer comingSoonClass={comingSoonClass}>
      <img src={imgLowResUrl + poster_path} alt="movie poster" />
      <Link to={setPath()} state={{ movieId: id }}>
        <p>{title}</p>
      </Link>
      <StyledLayer>
        <Link to={setPath()} state={{ movieId: id }}>
          <StyledBtn>see more</StyledBtn>
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

  &:last-child {
    margin-right: ${(props) => props.comingSoonClass && "150px"};
  }

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.3s linear;
  }
  &:hover p {
    text-decoration: underline;
  }

  &:hover a ~ div {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }

  p {
    color: #fff;
    text-align: center;
    transition: all 0.3s linear;
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
