import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SingleReview from "./SingleReview";
import NoReviews from "./NoReviews";
import UserReview from "./UserReview";

const Reviews = () => {
  const { singleMovieReviews } = useSelector((store) => store.singleMovie);

  return (
    <StyledWrapper>
      <UserReview/>
      {singleMovieReviews.length > 0 &&
        singleMovieReviews.map((rev, index) => (
          <SingleReview key={index} {...rev} />
        ))}
      {singleMovieReviews.length === 0 && <NoReviews/>}
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
export default Reviews;
