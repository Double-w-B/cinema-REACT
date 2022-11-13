import React from "react";
import styled from "styled-components";
const Overview = (props) => {
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { overview } = props.singleMovieInfo;
  const movieOverview = storedData?.overview || overview;

  return (
    <StyledOverviewContainer>
      <p>{movieOverview}</p>
    </StyledOverviewContainer>
  );
};
const StyledOverviewContainer = styled.article`
  width: 100%;
  height: 35%;
  display: grid;
  place-items: center;

  p {
    text-align: justify;
  }
`;

export default Overview;
