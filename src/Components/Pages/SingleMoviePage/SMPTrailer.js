import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import spinnerImg from "../../../Images/spinner.gif";

const SMPTrailer = ({ title }) => {
  const [showTrailerImg, setShowTrailerImg] = React.useState(true);

  const { singleMovieVideo } = useSelector((store) => store.singleMovie);
  const { key } = singleMovieVideo;

  return (
    <StyledWrapper>
      <StyledLayer showTrailerImg={showTrailerImg}>
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
          onLoad={() => setTimeout(() => setShowTrailerImg(false), 400)}
        ></iframe>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  width: 100%;
  height: 70vh;
  min-hight: 10vh;
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
  opacity: ${(props) => (props.showTrailerImg ? "1" : "0")};
  z-index: ${(props) => (props.showTrailerImg ? "2" : "0")};

  img {
    background-color: #000;
  }
`;

export default SMPTrailer;
