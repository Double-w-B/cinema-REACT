import React from "react";
import styled from "styled-components";
import RSingleReview from "./RSingleReview";
import { useSelector } from "react-redux";
import RNoReviews from "./RNoReviews";
import RUserReview from "./RUserReview";

const SMPReviews = () => {
  const { singleMovieReviews } = useSelector((store) => store.singleMovie);

  return (
    <StyledWrapper>
      <RUserReview/>
      {singleMovieReviews.length > 0 &&
        singleMovieReviews.map((rev, index) => (
          <RSingleReview key={index} {...rev} />
        ))}
      {singleMovieReviews.length === 0 && <RNoReviews/>}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  width: 100%;
  margin: 2rem auto;
  padding: 1rem 0 2rem 0;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export default SMPReviews;
