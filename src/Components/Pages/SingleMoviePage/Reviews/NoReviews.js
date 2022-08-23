import React from "react";
import styled from "styled-components";

const NoReviews = () => {
  return (
    <StyledInfoContainer>
      <p>No reviews yet. Be the first to add a review.</p>
    </StyledInfoContainer>
  );
};
export const StyledInfoContainer = styled.div`
  width: 96%;
  margin: 1rem auto;

  p {
    font-size: 1.2rem;
    text-align: center;
    font-style: italic;
    color: rgba(255, 255, 255, 0.3);
  }
`;

export { NoReviews };
