import styled, { css } from "styled-components";
import { SharedKeyframes } from "../../../../../style/shared";

const shakeInput = css`
  -webkit-animation: ${(props) => props.shakeEmail && SharedKeyframes.shake};
  -moz-animation: ${(props) => props.shakeEmail && SharedKeyframes.shake};
  -o-animation: ${(props) => props.shakeEmail && SharedKeyframes.shake};
  animation: ${(props) => props.shakeEmail && SharedKeyframes.shake};
  animation-duration: 5.72s;
`;

const shakeSeatsAndTickets = css`
  -webkit-animation: ${(props) =>
    props.shakeSeatsAndTickets && SharedKeyframes.shake};
  -moz-animation: ${(props) =>
    props.shakeSeatsAndTickets && SharedKeyframes.shake};
  -o-animation: ${(props) =>
    props.shakeSeatsAndTickets && SharedKeyframes.shake};
  animation: ${(props) => props.shakeSeatsAndTickets && SharedKeyframes.shake};
  animation-duration: 5.72s;
`;

export const Order = styled.div`
  width: 45%;
  min-width: 450px;
  height: 100%;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-bottom: 1rem;
  }

  .info {
    width: 100%;
    height: calc(100% - 32px);
    font-size: 1.1rem;
    color: var(--primary-white-clr);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      width: 80px;
      display: inline-block;
      color: var(--primary-grey-clr);
    }

    p {
      &:nth-child(5) {
        ${shakeSeatsAndTickets}
      }
    }

    .seats-container {
      width: 100%;
      display: flex;
      ${shakeSeatsAndTickets}

      p {
        &:first-child {
          min-width: 80px;
          color: var(--primary-grey-clr);
        }
      }
    }

    .email-container {
      width: 100%;
      display: flex;

      p {
        width: 80px;
        color: var(--primary-grey-clr);
        ${shakeInput}
      }

      input {
        width: calc(100% - 100px);
        border: none;
        outline: none;
        padding-left: ${(props) => (props.isEmail ? "0" : "0.5rem")};
        font-size: 1.05rem;
        border-radius: 2px;
        text-transform: lowercase;
        background-color: transparent;
        border: ${(props) =>
          props.isEmail
            ? "1px solid transparent"
            : "1px solid var(--primary-grey-clr)"};
        color: var(--primary-white-clr);
        ${shakeInput}

        &:hover {
          border: 1px solid var(--primary-white-clr);
        }
        &:focus {
          opacity: 1;
          border: 1px solid var(--primary-white-clr);
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    min-width: 400px;
  }

  @media screen and (max-width: 900px) {
    width: 50%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 60%;
    padding: 0;

    .info {
      padding-left: 1rem;
      .email-container input {
        width: calc(100% - 250px);
      }
    }
  }

  @media screen and (max-width: 650px) {
    .info {
      .email-container input {
        width: calc(100% - 200px);
      }
    }
  }

  @media screen and (max-width: 550px) {
    p {
      font-size: 1rem;
    }
    .info {
      .email-container input {
        width: calc(100% - 175px);
      }
    }
  }
`;
