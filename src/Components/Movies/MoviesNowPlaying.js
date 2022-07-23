import React from "react";
import styled from "styled-components";
import SingleMovie from "./SingleMovie";

const MoviesNowPlaying = () => {
  return (
    <StyledWrapper>
      <h1>moviesNowPlaying</h1>
      <StyledUnderline />
      <StyledMoviesContainer>
        <SingleMovie />
        <SingleMovie />
        <SingleMovie />
      </StyledMoviesContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  width: 90%;
  margin: 2rem auto;
  background-color: #f0f0f0;

  h1 {
    text-transform: capitalize;
  }
`;
export const StyledUnderline = styled.div`
  width: 20%;
  height: 5px;
  margin-top: 0.5rem;
  background-color: #000;
`;

const StyledMoviesContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

export default MoviesNowPlaying;
