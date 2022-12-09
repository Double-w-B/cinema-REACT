import styled from "styled-components";

export const SeatsInfo = styled.div`
  width: 80%;
  height: 70px;
  margin: 3rem auto 0 auto;
  padding: 0 1.5em;
  display: flex;
  justify-content: center;

  .example {
    width: calc(100% / 11);
    height: 50%;
    margin: 0 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 0.3rem;
    background-color: var(--primary-grey-clr);
    opacity: 0.7;
    box-shadow: 0px 0px 8px #0a0f18;

    &:nth-child(2) {
      background-color: var(--primary-red-clr);
      opacity: 0.7;
    }
    &:last-child {
      background-color: #343c4a;
    }

    p {
      color: var(--primary-white-clr);
      &:last-child {
        position: absolute;
        bottom: -1.8rem;
        left: 50%;
        transform: translateX(-50%);
        color: var(--primary-grey-clr);
      }
    }
  }

  @media screen and (max-width: 1150px) {
    .example {
      font-size: 0.95rem;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 650px) {
    height: 60px;
    margin-bottom: 1rem;

    .example {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 550px) {
    height: 50px;

    .example {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: 480px) {
    height: 45px;
  }
`;
