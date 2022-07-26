import React from "react";
import { Link } from "react-router-dom";
import spinnerImg from "../../assets/spinner.gif";
import { useDispatch, useSelector } from "react-redux";
import StyledSinglePoster from "./style/SingleMoviePoster.style";
import * as singleMovieSlice from "../../redux/features/movies/singleMovieSlice";

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
    dispatch(singleMovieSlice.removeSingleMovieData());
    dispatch(singleMovieSlice.getSingleMovieInfo(id));
    dispatch(singleMovieSlice.getSingleMovieVideos(id));
    dispatch(singleMovieSlice.getSingleMovieReviews(id));
  };

  const checkLength = (title) => {
    if (title.length > 30) return { fontSize: "0.9rem" };
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
        <p onClick={getSingleMovieData} style={checkLength(title)}>
          {title}
        </p>
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
