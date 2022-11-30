import React from "react";
import StyledSingleMovie from "./style";
import { useSelector } from "react-redux";
import spinnerImg from "../../../assets/spinner.gif";

const Trailer = ({ title }) => {
  const [showLoadingImg, setShowLoadingImg] = React.useState(true);
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));

  const { singleMovieVideo, isMovieTrailerLoading } = useSelector(
    (store) => store.singleMovie
  );

  const trailerKey = storedData?.trailer?.key || singleMovieVideo?.key;
  const trailerTitle = storedData?.title || title;

  const handleOnLoad = () => {
    const timeout = setTimeout(() => {
      setShowLoadingImg(false);
      return () => clearTimeout(timeout);
    }, 400);
  };

  return (
    <StyledSingleMovie.Trailer>
      <StyledSingleMovie.Layer
        showLoadingImg={showLoadingImg}
        isTrailer={trailerKey}
      >
        <img src={spinnerImg} alt="" draggable="false" />
        {!isMovieTrailerLoading && (
          <p>Sorry, the movie trailer is currently unavailable</p>
        )}
      </StyledSingleMovie.Layer>
      {trailerKey && (
        <iframe
          width="100%"
          height="100%"
          style={{
            border: "solid 4px #37474f",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            zIndex: "1",
            position: "relative",
          }}
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=0&controls=1&modestbranding=1`}
          title={`${trailerTitle} trailer`}
          frameBorder="0"
          allowFullScreen
          onLoad={handleOnLoad}
        ></iframe>
      )}
    </StyledSingleMovie.Trailer>
  );
};

export default Trailer;
