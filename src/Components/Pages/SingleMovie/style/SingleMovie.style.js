import styled from "styled-components";

export const InfoContainer = styled.section`
  width: 100%;
  min-height: 550px;
  margin: 2rem auto 4rem auto;
  display: flex;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 940px) {
    flex-direction: column;
  }
`;

export const ReviewTitle = styled.div`
  width: 100%;

  h1 {
    text-transform: capitalize;
    letter-spacing: 1px;
    color: #fff;

    span {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.3);
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 650px) {
    h1,
    h1 span {
      font-size: 1.3rem;
    }
  }
`;
