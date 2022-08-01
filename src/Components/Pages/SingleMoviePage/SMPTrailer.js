import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const SMPTrailer = ({ title }) => {
  const [showTrailerImg, setShowTrailerImg] = React.useState(true);

  const { singleMovieVideo } = useSelector((store) => store.singleMovie);
  const { key } = singleMovieVideo;

  return (
    <StyledWrapper>
      {showTrailerImg && (
        <StyledLayer>
          <img
            src={`https:/img.youtube.com/vi/${key}/sddefault.jpg`}
            alt="poster"
          />
        </StyledLayer>
      )}
      <iframe
        width="100%"
        height="100%"
        style={{
          border: "solid 4px #37474f",
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }}
        src={`https://www.youtube.com/embed/${key}?autoplay=0&controls=1&modestbranding=1`}
        title={`${title} trailer`}
        // frameBorder="0"
        // allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        // allowFullScreen
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
        onLoad={() => setTimeout(() => setShowTrailerImg(false), 1800)}
      ></iframe>
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
  top: 0;
  left: 0;
  opacity: 1;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
    min-height: 100px;
    object-fit: cover;
    background-color: #000;
    border-image: linear-gradient(to right, #080c13, #2b3444, #080c13) 1;
    border: solid 4px #37474f;
  }
`;

export default SMPTrailer;
