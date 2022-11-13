import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import * as Components from "./index";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledInfoContainer } from "./NoReviews";

const Reviews = () => {
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));

  const { singleMovieReviews, singleMovieInfo } = useSelector(
    (store) => store.singleMovie
  );

  const movieId = storedData?.id || singleMovieInfo.id;
  const movieReviews = storedData?.reviews || singleMovieReviews;

  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  const isUser = isAuthenticated && user;

  return (
    <StyledWrapper>
      {!isUser && (
        <StyledLogInInfo className="no-select">
          <p>
            Only logged users could add reviews. Please{" "}
            <button onClick={loginWithRedirect}>Log in</button> or{" "}
            <button onClick={loginWithRedirect}>Sign up</button>.
          </p>
        </StyledLogInInfo>
      )}
      {isUser && !movieReviews.some((review) => review.id === movieId) && (
        <Components.UserReview />
      )}
      {movieReviews.length > 0 &&
        movieReviews.map((rev, index) => (
          <Components.SingleReview key={index} {...rev} />
        ))}
      {movieReviews.length === 0 && <Components.NoReviews />}
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

const StyledLogInInfo = styled(StyledInfoContainer)`
  margin: 2rem auto;

  button {
    color: var(--primary-white-clr);
    background-color: transparent;
    border: none;
    font-size: inherit;
    font-style: inherit;
    cursor: pointer;
    transition: 0.3s linear;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
    &:active {
      transform: scale(0.8);
    }
  }
`;
export default Reviews;
