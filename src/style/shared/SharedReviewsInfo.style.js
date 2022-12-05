import styled from "styled-components";

export const SharedReviewsInfo = styled.div`
  width: 96%;
  margin: 1rem auto;

  p {
    font-size: 1.2rem;
    text-align: center;
    font-style: italic;
    color: rgba(255, 255, 255, 0.3);
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 1.1rem;
    }
  }
`;
