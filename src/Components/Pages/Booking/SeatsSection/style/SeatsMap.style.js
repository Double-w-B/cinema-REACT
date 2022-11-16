import styled from "styled-components";

export const SeatsMap = styled.div`
  width: 55vw;
  height: 70vh;
  margin: 0 auto;
`;

export const Screen = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .screen {
    width: 80%;
    height: 60%;
    margin: 0 auto;
    border-radius: 0.3rem;
    transform: perspective(30px) rotateX(-4deg);
    background-color: #c3c3c3;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    position: relative;
  }

  .shadow {
    width: 100%;
    height: 10%;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    position: absolute;
    top: -0.3rem;
    left: 0;
    background-color: #afafaf;
  }

  p {
    color: var(--primary-red-clr);
    opacity: 0.5;
  }
`;

export const Seats = styled.div`
  width: 100%;
  height: 70%;
  padding: 2rem 1.5rem 0.5rem 1.5rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-rows: repeat(8, 1fr);

  .row {
    display: flex;
    gap: 0.5rem;
    position: relative;

    .letter {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: var(--primary-red-clr);
      opacity: 0.4;

      &.left {
        left: -1.5rem;
      }

      &.right {
        right: -1.5rem;
      }
    }

    .seat {
      width: calc(100% / 8);
      height: 100%;
      display: grid;
      place-items: center;
      border-radius: 0.3rem;
      background-color: var(--primary-grey-clr);
      opacity: 0.7;
      cursor: pointer;
      transition: 0.3s linear;

      &:hover {
        opacity: 1;
        .exit {
          opacity: 0.7;
        }
      }

      &.active {
        background-color: var(--primary-red-clr);
        opacity: 0.7;
      }

      &.reserved {
        background-color: #343c4a;
        color: transparent;
        pointer-events: none;
      }

      &.stairs {
        width: calc(100% / 35);
        visibility: hidden;
        background-color: transparent;
        pointer-events: none;
      }

      &.exit {
        visibility: hidden;
        pointer-events: none;
        position: relative;

        .direction {
          width: 70%;
          color: var(--primary-red-clr);
          text-transform: uppercase;
          font-size: 0.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-bottom: 1px solid var(--primary-red-clr);
          bottom: 20%;
          left: 50%;
          position: absolute;
          transform: translateX(-50%);
          transition: 0.3s linear;
          opacity: 0.7;
          visibility: visible;

          svg {
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
`;
