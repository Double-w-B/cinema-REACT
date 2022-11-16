import React from "react";
import StyledReviews from "./style";
import { useSelector } from "react-redux";
import * as Component from "./index";
import { useAuth0 } from "@auth0/auth0-react";

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
    <StyledReviews>
      {!isUser && (
        <StyledReviews.LogInInfo className="no-select">
          <p>
            Only logged users could add reviews. Please{" "}
            <button onClick={loginWithRedirect}>Log in</button> or{" "}
            <button onClick={loginWithRedirect}>Sign up</button>.
          </p>
        </StyledReviews.LogInInfo>
      )}
      {isUser && !movieReviews.some((review) => review.id === movieId) && (
        <Component.UserReview />
      )}
      {movieReviews.length > 0 &&
        movieReviews.map((rev, index) => (
          <Component.SingleReview key={index} {...rev} />
        ))}
      {movieReviews.length === 0 && <Component.NoReviews />}
    </StyledReviews>
  );
};

export default Reviews;
