import React from "react";
import styled from "styled-components";
import { StyledUnderline } from "../../../Movies/MoviesNowPlaying";
import RSingleReview from "./RSingleReview";

const SMPReviews = () => {
  return (
    <StyledWrapper>
      <h1>Reviews (number)</h1>
      <StyledUnderline />
      <RSingleReview />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  width: 100%;
  margin: 2rem auto;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  h1 {
    text-transform: capitalize;
    letter-spacing: 1px;
    color: #fff;
  }
`;
export default SMPReviews;
