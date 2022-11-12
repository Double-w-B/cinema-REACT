import React from "react";
import styled from "styled-components";
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
    <StyledTitleContainer>
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
    </StyledTitleContainer>
  );
};

const StyledTitleContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font-weight: bold;
    font-size: 2rem;
    margin-right: 1rem;
  }

  .rate {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;

    p {
      &:first-child {
        display: flex;
        align-items: center;

        font-size: 1.5rem;
        svg {
          color: #f12535;
          margin-right: 0.2rem;
        }
      }
      &:last-child {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }
`;

export default Title;
