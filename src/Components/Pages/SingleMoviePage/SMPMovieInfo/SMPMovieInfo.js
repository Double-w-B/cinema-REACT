import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StyledButton } from "../../../Sliders/MoviesNowPlayingSlider";
import MITitle from "./MITitle";
import MIShortInfo from "./MIShortInfo";

const SMPMovieInfo = () => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { tagline, overview } = singleMovieInfo;

  return (
    <StyledInfoContainer>
      <MITitle />
      <MIShortInfo />

      <p className="overview">{overview}</p>

      {tagline && <p className="tagline">"{tagline}"</p>}
      <StyledBtn>book now</StyledBtn>
    </StyledInfoContainer>
  );
};

const StyledInfoContainer = styled.article`
  width: 65%;
  min-height: 40vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .overview {
    padding: 0 0.5rem;
    text-align: justify;
  }

  .tagline {
    text-align: center;
    font-style: italic;
  }
`;

const StyledBtn = styled(StyledButton)`
  height: 8%;
  width: 50%;
  margin: 0 auto 0.5rem auto;
  position: relative;
  background-color: rgba(241, 37, 53, 0.3);
`;

export default SMPMovieInfo;
