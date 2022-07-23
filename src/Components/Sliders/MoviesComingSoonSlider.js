import React from "react";
import styled from "styled-components";
import { StyledUnderline } from "../Movies/MoviesNowPlaying";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const MoviesComingSoonSlider = () => {
  return (
    <StyledWrapper>
      <h1>moviesComingSoonSlider</h1>
      <StyledUnderline />
      <StyledContainer>
        <div className="arrow left">
          <FaChevronLeft />
        </div>
        <div className="arrow right">
          <FaChevronRight />
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  width: 95%;
  height: 30vh;
  margin: 2rem auto;
  background-color: #f0f0f0;
  position: relative;
  h1 {
    text-transform: capitalize;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;

  .arrow {
    position: absolute;
    font-size: 2rem;
    cursor: pointer;
  }

  .left {
    top: 50%;
    left: 1rem;
    &:hover {
      transform: translateX(-0.1rem);
    }
  }
  .right {
    top: 50%;
    right: 1rem;
    &:hover {
      transform: translateX(0.1rem);
    }
  }
`;

export default MoviesComingSoonSlider;
