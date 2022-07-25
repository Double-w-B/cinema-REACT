import React from "react";
import styled from "styled-components";
import { StyledButton } from "../Sliders/MoviesNowPlayingSlider";

const SingleMovie = ({ movieInfo }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500`;

  console.log(movieInfo);
  return (
    <StyledContainer>
      <img src={imgUrl + movieInfo.poster_path} alt="" />
      <p>{movieInfo.original_title}</p>
      <StyledLayer>
        <StyledBtn>see more</StyledBtn>
      </StyledLayer>
    </StyledContainer>
  );
};

const StyledContainer = styled.article`
  position: relative;

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

  &:hover p ~ div {
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
export default SingleMovie;
