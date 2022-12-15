import styled from "styled-components";

export const InfoContainer = styled.article`
  width: 100%;
  padding: 2rem 1rem 1rem 1rem;

  p {
    font-size: 1.1rem;
    text-align: justify;

    &:last-child:not(.benefit p) {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`;
