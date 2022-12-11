import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

export const Topic = styled.article`
  width: 100%;
  padding-left: 0.5rem;
  margin-top: 3rem;

  h2 {
    color: var(--primary-red-clr);
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 650px) {
    h2 {
      font-size: 1.3rem;
    }
  }
`;
