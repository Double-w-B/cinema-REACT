import React from "react";
import { useSelector } from "react-redux";
import { BsPlayCircle } from "react-icons/bs";
import StyledSchedule from "./style";

const Poster = (props) => {
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { singleMovieVideo } = useSelector((store) => store.singleMovie);
  const { imgLowResUrl } = useSelector((store) => store.movies);
  const { poster_path, genres } = props;
  const { key } = singleMovieVideo;

  const movieGenres = storedData?.genres || genres;
  const moviePoster = storedData?.poster_path || poster_path;
  const movieTrailer = storedData?.trailer?.key || key;

  const abbreviation = (title) => {
    if (title === "Science Fiction") return "Sci-Fi";
    return title;
  };

  const handleClick = () => {
    props.setIsModal(true);
    props.setIsMovieTrailer(true);
  };

  return (
    <StyledSchedule.Poster className="no-select">
      <div className="poster">
        <img src={`${imgLowResUrl}${moviePoster}`} alt="" />
        {movieTrailer && <BsPlayCircle onClick={handleClick} />}
      </div>
      {movieGenres && (
        <div className="genres no-select">
          {movieGenres.slice(0, 3).map((genre) => {
            return <div key={genre.id}>{abbreviation(genre.name)}</div>;
          })}
        </div>
      )}
    </StyledSchedule.Poster>
  );
};

export default Poster;
