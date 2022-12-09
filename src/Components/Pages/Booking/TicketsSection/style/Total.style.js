import styled from "styled-components";

export const Total = styled.div`
  width: 35%;
  height: 100%;
  padding-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 1.3rem;
    font-weight: bold;

    &:last-child {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 1150px) {
    padding-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    padding-right: 1.5rem;
    margin-top: 2rem;
    align-self: end;

    p {
      font-size: 1.2rem;
      &:last-child {
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    p {
      font-size: 1.1rem;

      &:last-child {
        font-size: 1.05rem;
      }
    }
  }

  @media screen and (max-width: 550px) {
    width: 38%;
    padding-right: 0;
  }
`;
