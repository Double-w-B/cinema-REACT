import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { StyledUnderline } from "../../Movies/MoviesNowPlaying";
import * as SingleMovie from "./index";
import Navigation from "../../Navigation";

const SingleMoviePage = () => {
  const location = useLocation();

  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { singleMovieInfo, singleMovieReviews, singleMovieVideo } = useSelector(
    (store) => store.singleMovie
  );
  const { title } = singleMovieInfo;
  const pageTitle = location.state?.pageTitle;
  const movieTitle = storedData?.title || title;

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <StyledMainContainer>
      <Navigation
        title={movieTitle}
        pageTitle={pageTitle ? pageTitle : undefined}
      />
      <SingleMovie.MainTitle />
      {singleMovieVideo && <SingleMovie.Trailer title={title} />}
      <StyledMovieInfo trailer={singleMovieVideo}>
        <SingleMovie.MovieInfo />
        <SingleMovie.Poster />
      </StyledMovieInfo>
      <StyledReviewTitle>
        <h1>
          Reviews <span>({singleMovieReviews.length})</span>
        </h1>
        <StyledUnderline />
      </StyledReviewTitle>
      <SingleMovie.Reviews />
    </StyledMainContainer>
  );
};

export const StyledMainContainer = styled.main`
  width: 70%;
  margin: 2rem auto;
  color: var(--primary-white-clr);
  cursor: default;
`;

const StyledMovieInfo = styled.section`
  width: 100%;
  min-height: 500px;
  margin: ${(props) =>
    props.trailer ? "2rem auto 4rem auto" : "0 auto 4rem auto"};
  display: flex;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledReviewTitle = styled.div`
  width: 100%;

  h1 {
    text-transform: capitalize;
    letter-spacing: 1px;
    color: #fff;

    span {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.3);
    }
  }
`;

export default SingleMoviePage;
