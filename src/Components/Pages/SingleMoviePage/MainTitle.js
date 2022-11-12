import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MainTitle = () => {
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { singleMovieInfo, singleMovieVideo } = useSelector(
    (store) => store.singleMovie
  );

  const { title, genres } = singleMovieInfo;

  const movieGenres = storedData?.genres || genres;
  const movieTrailer = storedData?.trailer || singleMovieVideo;
  const movieTitle = storedData?.title || title;

  return (
    <StyledTitleContainer trailer={movieTrailer}>
      {movieTrailer && <h1>{movieTitle}</h1>}
      <div className="genres no-select">
        {movieGenres?.map((genre, index) => {
          return <div key={index}>{genre.name}</div>;
        })}
      </div>
    </StyledTitleContainer>
  );
};

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    letter-spacing: 1px;
    margin-bottom: 1rem;
    color: #fff;
  }

  .genres {
    display: flex;
    margin: ${(props) => !props.trailer && "0 0 0 auto"};
    align-items: flex-end;
    padding-bottom: 0.5rem;

    div {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-top: none;
      border-bottom: none;
      border-right: none;
      padding: 0 0.5rem;

      &:first-child {
        border-left: none;
      }
    }
  }
`;

export default MainTitle;
