import React from "react";
import { useDispatch, useSelector } from "react-redux";
import spinnerImg from "../../assets/spinner.gif";
import { AiOutlineCloseCircle } from "react-icons/ai";
import StyledMovieTrailerModal from "./style/MovieTrailerModal.style";
import * as modalsSlice from "../../redux/features/modals/modalsSlice";
import { setSingleMovieVideoKey } from "../../redux/features/movies/singleMovieSlice";

const TrailerModal = () => {
  const dispatch = useDispatch();

  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));

  const { isMovieTrailerModal } = useSelector((store) => store.modals);

  const [isShowLoadingImg, setIsShowLoadingImg] = React.useState(true);
  const { singleMovieVideo, singleMovieInfo } = useSelector(
    (store) => store.singleMovie
  );

  const { key } = singleMovieVideo;
  const { title } = singleMovieInfo;

  const movieTitle = storedData?.title || title;
  const trailerKey = storedData?.trailer?.key || key;

  const handleOnLoad = () => {
    const timeout = setTimeout(() => setIsShowLoadingImg(false), 400);
    return () => clearTimeout(timeout);
  };

  const handleClick = () => {
    dispatch(modalsSlice.handleIsModal(false));
    dispatch(modalsSlice.handleIsMovieTrailerModal(false));
    dispatch(setSingleMovieVideoKey({}));
  };

  return (
    <StyledMovieTrailerModal showModal={isMovieTrailerModal}>
      <StyledMovieTrailerModal.Layer showLoadingImg={isShowLoadingImg}>
        <img src={spinnerImg} alt="" />
      </StyledMovieTrailerModal.Layer>
      <AiOutlineCloseCircle onClick={handleClick} />
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
          title={`${movieTitle} trailer`}
          frameBorder="0"
          allowFullScreen
          onLoad={handleOnLoad}
        ></iframe>
      )}
    </StyledMovieTrailerModal>
  );
};

export default TrailerModal;
