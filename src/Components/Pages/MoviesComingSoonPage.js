import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StyledMoviesContainer } from "../Movies/MoviesNowPlaying";
import SingleMoviePoster from "../Movies/SingleMoviePoster";
import Navigation from "../Navigation";

const MoviesComingSoonPage = () => {
  const { moviesComingSoon } = useSelector((store) => store.movies);
  console.log(moviesComingSoon);
  return (
    <StyledMainContainer>
      <Navigation pageTitle={"Coming Soon"} />
      <StyledMoviesContainer>
        {moviesComingSoon.slice(4).map((movie) => {
          return (
            <SingleMoviePoster
              key={movie.id}
              movieInfo={movie}
              pageTitle={"Coming Soon"}
            />
          );
        })}
      </StyledMoviesContainer>
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.main`
  width: 70%;
  margin: 2rem auto;
`;

export default MoviesComingSoonPage;
