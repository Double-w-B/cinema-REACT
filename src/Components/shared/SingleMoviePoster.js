import React from "react";
import StyledSinglePoster from "./style/SingleMoviePoster.style";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as SingleMovieModule from "../../redux/features/movies/singleMovieSlice";
import spinnerImg from "../../assets/spinner.gif";

const SingleMoviePoster = (props) => {
  const [imgLoaded, setImgLoaded] = React.useState(false);
  const { imgLowResUrl } = useSelector((store) => store.movies);

  const { movieInfo, comingSoonClass, mouseActive, movieRelease, pageTitle } =
    props;

  const { poster_path, id, title } = movieInfo;
  const dispatch = useDispatch();

  const setPath = () => {
    const urlMovieTitle = title.split(" ").join("_");
    if (movieRelease === "playing") {
      return `/nowPlaying/${urlMovieTitle}`;
    } else {
      return `/comingSoon/${urlMovieTitle}`;
    }
  };

  const getSingleMovieData = () => {
    sessionStorage.removeItem("single_movie");
    dispatch(SingleMovieModule.removeSingleMovieData());
    dispatch(SingleMovieModule.getSingleMovieInfo(id));
    dispatch(SingleMovieModule.getSingleMovieVideos(id));
    dispatch(SingleMovieModule.getSingleMovieReviews(id));
  };

  return (
    <StyledSinglePoster
      className="no-select"
      comingSoonClass={comingSoonClass}
      mouseActive={mouseActive}
      draggable="false"
    >
      <StyledSinglePoster.ImgLayer imgLoaded={imgLoaded}>
        <img src={spinnerImg} alt="" onLoad={() => setImgLoaded(true)} />
      </StyledSinglePoster.ImgLayer>
      <img src={imgLowResUrl + poster_path} alt="" />
      <Link to={setPath()} state={{ pageTitle }} draggable="false">
        <p onClick={getSingleMovieData}>{title}</p>
      </Link>

      {imgLoaded && (
        <StyledSinglePoster.ButtonLayer>
          <Link to={setPath()} state={{ pageTitle }} draggable="false">
            <StyledSinglePoster.Button onClick={getSingleMovieData}>
              see more
            </StyledSinglePoster.Button>
          </Link>
        </StyledSinglePoster.ButtonLayer>
      )}
    </StyledSinglePoster>
  );
};

export default SingleMoviePoster;
