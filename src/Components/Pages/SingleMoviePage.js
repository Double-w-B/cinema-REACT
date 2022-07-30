import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeSingleMovieData } from "../../features/singleMovieSlice";

const SingleMoviePage = () => {
  const location = useLocation();
  const [showTrailerImg, setShowTrailerImg] = React.useState(true);

  const { singleMovieVideo } = useSelector((store) => store.singleMovie);
  const { key } = singleMovieVideo;
  console.log(singleMovieVideo);
  const yt = React.useRef();
  // console.log(yt);
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.onpopstate = () => {
      dispatch(removeSingleMovieData());
    };
  });

  return (
    <main>
      <StyledTrailerContainer>
        <iframe
          ref={yt}
          width="100%"
          height="100%"
          style={{
            border: "solid 4px #37474f",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            backgroundColor: "#000",
          }}
          src={`https://www.youtube.com/embed/${key}?autoplay=0&showinfo=0&controls=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
          onLoad={() => setShowTrailerImg(false)}
        ></iframe>
        {showTrailerImg && (
          <StyledLayer>
            <img
              src={`https://img.youtube.com//vi/${key}/maxresdefault.jpg`}
              alt=""
            />
          </StyledLayer>
        )}
      </StyledTrailerContainer>
    </main>
  );
};

const StyledTrailerContainer = styled.section`
  width: 40%;
  height: 40vh;
  min-hight: 10vh;
  margin: 5rem auto 5rem auto;
  background: #c3c3c3;
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
    object-fit: cover;
    background-color: #000;
    border: solid 4px #37474f;
    border-image: linear-gradient(to right, #080c13, #2b3444, #080c13) 1;
  }
`;

export default SingleMoviePage;
