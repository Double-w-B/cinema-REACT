import React from "react";
import styled from "styled-components";
import SingleMoviePoster from "./SingleMoviePoster";
import { useSelector } from "react-redux";

const MoviesNowPlaying = () => {
  const { moviesNowPlaying } = useSelector((store) => store.movies);

  return (
    <StyledWrapper>
      <h1>now playing</h1>
      <StyledUnderline />
      <StyledMoviesContainer>
        {moviesNowPlaying.slice(0, 12).map((movie) => {
          return (
            <SingleMoviePoster
              key={movie.id}
              movieInfo={movie}
              movieRelease={"playing"}
            />
          );
        })}
      </StyledMoviesContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  width: 90%;
  margin: 2rem auto;

  h1 {
    letter-spacing: 1px;
    text-transform: capitalize;
    color: #fff;
  }
`;
export const StyledUnderline = styled.div`
  width: 20%;
  min-width: 200px;
  height: 5px;
  margin-top: 0.5rem;
  background-color: #f12535;
  border-radius: 2px;
`;

export const StyledMoviesContainer = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
`;

export default MoviesNowPlaying;
