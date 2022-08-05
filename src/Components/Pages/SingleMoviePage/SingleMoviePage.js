import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SMPNavigation from "./SMPNavigation";
import SMPMainTitle from "./SMPMainTitle";
import SMPTrailer from "./SMPTrailer";
import SMPPoster from "./SMPPoster";
import SMPMovieInfo from "./SMPMovieInfo/SMPMovieInfo";
import SMPReviews from "./SMPReviews/SMPReviews";
import { StyledUnderline } from "../../Movies/MoviesNowPlaying";

const SingleMoviePage = () => {
  const { singleMovieInfo, singleMovieReviews } = useSelector(
    (store) => store.singleMovie
  );

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
      <StyledReviewTitle>
        <h1>
          Reviews <span>({singleMovieReviews.length})</span>
        </h1>
        <StyledUnderline />
      </StyledReviewTitle>
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
  min-height: 500px;
  margin: 2rem auto 4rem auto;
  display: flex;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledReviewTitle = styled.div`
  width: 100%;

  h1 {
    text-transform: capitalize;
    letter-spacing: 1px;
    color: #fff;

    span {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.3);
    }
  }
`;

export default SingleMoviePage;
