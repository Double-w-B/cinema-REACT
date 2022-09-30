import React from "react";
import styled from "styled-components";
const Overview = (props) => {
  const { overview } = props.singleMovieInfo;

  return (
    <StyledOverviewContainer>
      <p>{overview}</p>
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
