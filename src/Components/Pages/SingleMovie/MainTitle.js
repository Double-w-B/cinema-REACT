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

  const movieTitleLength = movieTitle?.length;

  const abbreviation = (title) => {
    if (title === "Science Fiction") return "Sci-Fi";
    return title;
  };

  return (
    <StyledSingleMovie.MainTitle
      trailer={isTrailer}
      titleLength={movieTitleLength}
    >
      {isTrailer && <h1>{movieTitle}</h1>}
      <div className="genres no-select">
        {movieGenres?.slice(0, 3).map((genre, index) => {
          return <div key={index}>{abbreviation(genre.name)}</div>;
        })}
      </div>
    </StyledSingleMovie.MainTitle>
  );
};

export default MainTitle;
