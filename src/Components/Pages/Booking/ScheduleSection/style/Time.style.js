import styled from "styled-components";

export const TimeContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    text-align: center;
    margin: 0 auto;
    font-weight: bold;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 650px) {
    p {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 600px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const Screenings = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    width: calc(100% / 5);
    height: 80px;
    width: 80px;
    display: grid;
    place-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 0.3rem;
    color: var(--primary-grey-clr);
    border: 1px solid var(--primary-grey-clr);
    transition: 0.3s linear;
    cursor: pointer;
    opacity: 0.65;

    &:hover {
      opacity: 1;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
    }

    &.active {
      color: var(--primary-white-clr);
      border: 1px solid var(--primary-white-clr);
      box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 15px;
      opacity: 1;
    }

    &.inactive {
      opacity: 0.4;
      pointer-events: none;
    }
  }

  @media screen and (max-width: 1150px) {
    div {
      width: 70px;
      height: 70px;

      p {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 900px) {
    div {
      width: 80px;
      height: 80px;

      p {
        font-size: 1.3rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    div {
      width: 70px;
      height: 70px;

      p {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    div {
      width: 65px;
      height: 65px;

      p {
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    div {
      width: 55px;
      height: 55px;

      p {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      width: 45px;
      height: 45px;

      p {
        font-size: 0.9rem;
      }
    }
  }
`;
