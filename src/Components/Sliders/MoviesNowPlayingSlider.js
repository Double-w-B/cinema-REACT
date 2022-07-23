import React from "react";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const MoviesNowPlayingSlider = () => {
  return (
    <StyledSection>
      <div className="arrow left">
        <FaChevronLeft />
      </div>
      <div className="arrow right">
        <FaChevronRight />
      </div>
      MoviesNowPlayingSlider
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  height: 60vh;
  background-color: #f0f0f0;
  position: relative;

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

export default MoviesNowPlayingSlider;
