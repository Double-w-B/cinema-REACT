import React, { useRef } from "react";
import styled from "styled-components";
import { StyledUnderline } from "../Movies/MoviesNowPlaying";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { StyledArrowContainer } from "./MoviesNowPlayingSlider";
import SingleMoviePoster from "../Movies/SingleMoviePoster";
import { useSelector } from "react-redux";

const MoviesComingSoonSlider = () => {
  const { moviesComingSoon } = useSelector((store) => store.movies);
  const ImgContainer = useRef(null);

  const moveRight = () => {
    ImgContainer.current.scrollBy(216, 0);
  };
  const moveLeft = () => {
    ImgContainer.current.scrollBy(-216, 0);
  };

  return (
    <StyledWrapper>
      <h1>coming soon</h1>
      <StyledUnderline />
      <StyledContainer ref={ImgContainer}>
        <StyledArrowContainer className="left upComing" onClick={moveLeft}>
          <FaChevronLeft />
        </StyledArrowContainer>
        <StyledArrowContainer className="right upComing" onClick={moveRight}>
          <FaChevronRight />
        </StyledArrowContainer>
        {moviesComingSoon.slice(3, -1).map((movie) => {
          return (
            <SingleMoviePoster
              key={movie.id}
              movieInfo={movie}
              comingSoonClass={true}
            />
          );
        })}
      </StyledContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  width: 95%;
  height: 65vh;
  margin: 2rem auto;
  color: #fff;
  position: relative;
  h1 {
    text-transform: capitalize;
    letter-spacing: 1px;
  }
`;

const StyledContainer = styled.div`
  width: 90%;
  height: 80%;
  padding: 1rem 0 0 0;
  margin: 0 auto;
  display: flex;
  gap: 16px;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  // background-color: #c3c3c3;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default MoviesComingSoonSlider;
