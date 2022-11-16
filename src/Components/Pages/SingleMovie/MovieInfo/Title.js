import React from "react";
import StyledMovieInfo from "./style";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";

const Title = () => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));

  const { title, vote_average, vote_count } = singleMovieInfo;
  const movieTitle = storedData?.title || title;
  const votesAverage = storedData?.vote_average || vote_average;
  const votesTotal = storedData?.vote_count || vote_count;

  return (
    <StyledMovieInfo.Title>
      <h2>{movieTitle}</h2>
      <div className="rate no-select">
        {votesAverage && votesAverage !== 0 ? (
          <>
            <p>
              <AiFillStar /> {votesAverage?.toFixed(2)}
            </p>
            <p>{votesTotal} votes</p>
          </>
        ) : (
          <p>no votes yet</p>
        )}
      </div>
    </StyledMovieInfo.Title>
  );
};

export default Title;
