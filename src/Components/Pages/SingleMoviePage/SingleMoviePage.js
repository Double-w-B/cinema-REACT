import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SMPNavigation from "./SMPNavigation";
import SMPMainTitle from "./SMPMainTitle";
import SMPTrailer from "./SMPTrailer";
import SMPMovieInfo from "./SMPMovieInfo/SMPMovieInfo";
import SMPPoster from "./SMPPoster";
import SMPReviews from "./SMPReviews/SMPReviews";

const SingleMoviePage = () => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { title } = singleMovieInfo;

  console.log(singleMovieInfo);

  React.useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <StyledMainContainer>
      <SMPNavigation title={title} />
      <SMPMainTitle />
      <SMPTrailer title={title} />
      <StyledMovieInfo>
        <SMPMovieInfo />
        <SMPPoster />
      </StyledMovieInfo>
      <SMPReviews />
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.main`
  width: 70%;
  margin: 2rem auto;
`;

const StyledMovieInfo = styled.section`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default SingleMoviePage;
