import React from 'react'
import styled from 'styled-components'

const RNoReviews = () => {
  return (
    <StyledInfoContainer>
      <p>No reviews yet. Be the first to add a review.</p>
    </StyledInfoContainer>
  );
}
const StyledInfoContainer = styled.div`
  width: 96%;
  margin: 1rem auto;

  p {
    font-size: 1.2rem;
    text-align: center;
    font-style: italic;
    color: rgba(255, 255, 255, 0.3);
  }
`;

export default RNoReviews