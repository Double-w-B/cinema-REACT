import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StyledButton } from "../../../Sliders/MoviesNowPlayingSlider";
import Title from "./Title";
import ShortInfo from "./ShortInfo";
import { useLocation, Link } from "react-router-dom";

const MovieInfo = () => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { tagline, overview, title } = singleMovieInfo;
  const location = useLocation();
  const nowPlaying = location.pathname.slice(0, 11) === "/nowPlaying";
  const setTitle = () => {
    const urlMovieTitle = title?.split(" ").join("_");
    return urlMovieTitle;
  };

  return (
    <StyledInfoContainer nowPlaying={nowPlaying}>
      <Title />
      <ShortInfo />

      <p className="overview">{overview}</p>

      {tagline && <p className="tagline">"{tagline}"</p>}
      {nowPlaying && (
        <StyledBtnContainer>
          <Link to={`/nowPlaying/${setTitle()}/booking`}>
            <StyledBtn>book now</StyledBtn>
          </Link>
        </StyledBtnContainer>
      )}
    </StyledInfoContainer>
  );
};

const StyledInfoContainer = styled.article`
  width: 65%;
  padding: ${(props) =>
    props.nowPlaying ? "0.5rem 1rem" : "0.5rem 1rem 3rem 1rem"};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .overview {
    text-align: justify;
  }

  .tagline {
    text-align: center;
    font-style: italic;
  }
`;

const StyledBtnContainer = styled.div`
  height: 8%;
  width: 45%;
  margin: 0 auto 0.5rem auto;
`;

const StyledBtn = styled(StyledButton)`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(241, 37, 53, 0.3);
`;

export default MovieInfo;
