import styled from "styled-components";

export const Date = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .days {
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: 80px;
      height: 80px;
      border-radius: 0.3rem;
      display: grid;
      place-items: center;
      cursor: pointer;
      color: var(--primary-grey-clr);
      transition: 0.3s linear;
      opacity: 0.65;
      border: 1px solid var(--primary-grey-clr);

      &:hover {
        opacity: 1;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
      }

      &.active {
        opacity: 1;
        border: 1px solid var(--primary-white-clr);
        color: var(--primary-white-clr);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      p {
        font-size: 1.3rem;
        font-weight: bold;
      }
    }
  }
  p:not(.days p) {
    font-size: 1.3rem;
    font-weight: bold;
    margin-left: 3rem;
    color: var(--primary-red-clr);
  }

  @media screen and (max-width: 1150px) {
    .days div {
      width: 70px;
      height: 70px;

      p {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .days div {
      width: 80px;
      height: 80px;

      p {
        font-size: 1.3rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .days div {
      width: 70px;
      height: 70px;

      p {
        font-size: 1.2rem;
      }
    }
    p:not(.days p) {
      font-size: 1.2rem;
      margin-left: 2rem;
    }
  }

  @media screen and (max-width: 650px) {
    .days div {
      width: 65px;
      height: 65px;

      p {
        font-size: 1.1rem;
      }
    }
    p:not(.days p) {
      font-size: 1.1rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    .days div {
      width: 55px;
      height: 55px;

      p {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .days div {
      width: 45px;
      height: 45px;

      &:first-child {
        p {
          font-size: 0.8rem;
        }
      }

      p {
        font-size: 0.9rem;
      }
    }
  }
`;
