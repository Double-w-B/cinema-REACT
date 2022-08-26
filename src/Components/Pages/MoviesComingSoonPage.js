import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StyledMoviesContainer } from "../Movies/MoviesNowPlaying";
import SingleMoviePoster from "../Movies/SingleMoviePoster";
import Navigation from "../Navigation";
import { StyledMainContainer } from "./SingleMoviePage/SingleMoviePage";

const MoviesComingSoonPage = () => {
  const { moviesComingSoon } = useSelector((store) => store.movies);
  console.log(moviesComingSoon);
  return (
    <StyledMain>
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
    </StyledMain>
  );
};

const StyledMain = styled(StyledMainContainer)``;

export default MoviesComingSoonPage;
