import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";

const MITitle = () => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);

  const { title, vote_average, vote_count } = singleMovieInfo;

  return (
    <StyledTitleContainer className="title-rate">
      <h2>{title}</h2>
      <div className="rate no-select">
        {vote_average && vote_average !== 0 ? (
          <>
            <p>
              <AiFillStar /> {vote_average?.toFixed(2)}
            </p>
            <p>{vote_count} votes</p>
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
    margin-left: 0.5rem;
    font-weight: bold;
    font-size: 2rem;
  }

  .rate {
    width: 20%;
    height: 100%;
    padding: 0.3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export default MITitle;
