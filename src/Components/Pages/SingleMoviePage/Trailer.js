import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import spinnerImg from "../../../Images/spinner.gif";

const Trailer = ({ title }) => {
  const [showLoadingImg, setShowLoadingImg] = React.useState(true);

  const { singleMovieVideo } = useSelector((store) => store.singleMovie);
  const { key } = singleMovieVideo;

  const handleOnLoad = () => {
    const timeout = setTimeout(() => {
      setShowLoadingImg(false);
      return () => clearTimeout(timeout);
    }, 400);
  };

  return (
    <StyledWrapper>
      <StyledLayer showLoadingImg={showLoadingImg}>
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
          allowFullScreen
          onLoad={handleOnLoad}
        ></iframe>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  width: 100%;
  height: 70vh;
  min-height: 10vh;
  margin: 0 auto;
  position: relative;
`;

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

export default Trailer;
