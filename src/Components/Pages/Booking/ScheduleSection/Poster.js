import React from "react";
import StyledSchedule from "./style";
import { BsPlayCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import * as modalsSlice from "../../../../redux/features/modals/modalsSlice";

const Poster = (props) => {
  const dispatch = useDispatch();
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { singleMovieVideo } = useSelector((store) => store.singleMovie);
  const { imgLowResUrl } = useSelector((store) => store.movies);
  const { poster_path, genres } = props;
  const { key } = singleMovieVideo;

  const movieGenres = storedData?.genres || genres;
  const moviePoster = storedData?.poster_path || poster_path;
  const movieTrailer = storedData?.trailer?.key || key;
  const isTrailer = Object.keys(movieTrailer).length > 0;

  const abbreviation = (title) => {
    if (title === "Science Fiction") return "Sci-Fi";
    return title;
  };

  const handleClick = () => {
    dispatch(modalsSlice.handleIsModal(true));
    dispatch(modalsSlice.handleIsMovieTrailerModal(true));
  };

  return (
    <StyledSchedule.Poster className="no-select">
      <div className="poster">
        <img src={`${imgLowResUrl}${moviePoster}`} alt="" />
        {isTrailer && <BsPlayCircle onClick={handleClick} />}
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
