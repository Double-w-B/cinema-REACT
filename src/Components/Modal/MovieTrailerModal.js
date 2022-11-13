import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import spinnerImg from "../../Images/spinner.gif";
import { AiOutlineCloseCircle } from "react-icons/ai";

const TrailerModal = (props) => {
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
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
    props.setIsModal(false);
    props.setIsMovieTrailer(false);
  };

  return (
    <Modal {...props}>
      <StyledContainer>
        <StyledLayer showLoadingImg={isShowLoadingImg}>
          <img src={spinnerImg} alt="poster" />
        </StyledLayer>
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
      </StyledContainer>
    </Modal>
  );
};

const StyledLayer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #000;
  opacity: ${(props) => (props.showLoadingImg ? "1" : "0")};
  z-index: ${(props) => (props.showLoadingImg ? "2" : "0")};

  img {
    background-color: #000;
  }
`;

const StyledContainer = styled.div`
  width: 60vw;
  height: 70vh;
  background-color: black;
  position: relative;
  &:hover {
    svg {
      top: 2rem;
      &:hover {
        top: -4rem;
      }
    }
  }

  svg {
    font-size: 3rem;
    border-radius: 50%;
    top: -4rem;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    cursor: pointer;
    transition: 0.3s linear;
    color: rgba(255, 255, 255, 0.3);
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }

    &:active {
      font-size: 2rem;
    }
  }
`;

export default TrailerModal;
