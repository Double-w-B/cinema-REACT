import React from "react";
import StyledSchedule from "./style";
import { BsPlayCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import * as modalsSlice from "../../../../redux/features/modals/modalsSlice";

const Poster = (props) => {
  const dispatch = useDispatch();
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { singleMovieVideo } = useSelector((store) => store.singleMovie);
  const { imgLowResUrl, imgHiResUrl } = useSelector((store) => store.movies);
  const { windowWidth } = useSelector((store) => store.app);
  const { poster_path, genres, backdrop_path } = props;
  const { key } = singleMovieVideo;

  const posterImage = imgLowResUrl + (storedData?.poster_path || poster_path);
  const backdropImage = imgHiResUrl + backdrop_path;
  const movieGenres = storedData?.genres || genres;
  const movieTrailer = storedData?.trailer?.key || key;

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
        {windowWidth <= 900 ? (
          <img src={backdropImage} alt="" />
        ) : (
          <img src={posterImage} alt="" />
        )}
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
