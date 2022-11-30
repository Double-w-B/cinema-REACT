import React from "react";
import StyledSingleMovie from "./style";
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
  const isTrailer = Object.keys(movieTrailer).length > 0;

  return (
    <StyledSingleMovie.MainTitle trailer={isTrailer}>
      {isTrailer && <h1>{movieTitle}</h1>}
      <div className="genres no-select">
        {movieGenres?.map((genre, index) => {
          return <div key={index}>{genre.name}</div>;
        })}
      </div>
    </StyledSingleMovie.MainTitle>
  );
};

export default MainTitle;
