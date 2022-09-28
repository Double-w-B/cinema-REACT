import React from "react";
import styled from "styled-components";
import Modal from "../../Modal/Modal";
import { useSelector } from "react-redux";
import spinnerImg from "../../../Images/spinner.gif";

const TrailerModal = (props) => {
  const [isShowLoadingImg, setIsShowLoadingImg] = React.useState(true);
  const { singleMovieVideo, singleMovieInfo } = useSelector(
    (store) => store.singleMovie
  );
  const { key } = singleMovieVideo;
  const { title } = singleMovieInfo;

  const handleClick = () => {
    props.setIsModal(false);
    props.setIsMovieTrailer(false);
  };

  const handleOnLoad = () => {
    const timeout = setTimeout(() => setIsShowLoadingImg(false), 400);
    return () => clearTimeout(timeout);
  };
  return (
    <Modal
      setIsModal={props.setIsModal}
      isMovieTrailer={props.isMovieTrailer}
      setIsMovieTrailer={props.setIsMovieTrailer}
    >
      <StyledContainer>
        <StyledLayer showLoadingImg={isShowLoadingImg}>
          <img src={spinnerImg} alt="poster" />
        </StyledLayer>
        {key && (
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
            src={`https://www.youtube.com/embed/${key}?autoplay=0&controls=1&modestbranding=1`}
            title={`${title} trailer`}
            frameBorder="0"
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
            onLoad={handleOnLoad}
          ></iframe>
        )}
      </StyledContainer>
      {/* <button onClick={handleClick}>close modal</button> */}
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
  color: black;
  position: relative;
`;

export default TrailerModal;
