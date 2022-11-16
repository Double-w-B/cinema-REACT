import styled from "styled-components";
import { SharedKeyframes } from "../../../../../style/shared";

export const Order = styled.div`
  width: 45%;
  min-width: 450px;
  height: 100%;
  padding: 0 0 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-bottom: 1rem;
  }

  .info {
    width: 100%;
    height: calc(100% - 32px);
    font-size: 1.1rem;
    display: flex;

    .info__labels,
    .info__details {
      width: 100px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      p {
        color: var(--primary-grey-clr);
      }
    }

    .info__details {
      width: 250px;
      padding-left: 0.5rem;

      p {
        color: var(--primary-white-clr);
      }

      input {
        width: 100%;
        border: none;
        outline: none;
        padding-left: 0.5rem;
        font-size: 1.05rem;
        border-radius: 2px;
        text-transform: lowercase;
        background-color: transparent;
        border: ${(props) =>
          /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(props.userEmail)
            ? "1px solid transparent"
            : "1px solid var(--primary-grey-clr)"};
        color: var(--primary-white-clr);

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

  .info__labels p:last-child,
  .info__details input {
    -webkit-animation: ${(props) => props.shakeEmail && SharedKeyframes.shake};
    -moz-animation: ${(props) => props.shakeEmail && SharedKeyframes.shake};
    -o-animation: ${(props) => props.shakeEmail && SharedKeyframes.shake};
    animation: ${(props) => props.shakeEmail && SharedKeyframes.shake};
    animation-duration: 5.72s;
  }
  .info__labels p:nth-child(3),
  .info__labels p:nth-child(5),
  .info__details p:nth-child(3),
  .info__details p:nth-child(5) {
    -webkit-animation: ${(props) =>
      props.shakeSeatsAndTickets && SharedKeyframes.shake};
    -moz-animation: ${(props) =>
      props.shakeSeatsAndTickets && SharedKeyframes.shake};
    -o-animation: ${(props) =>
      props.shakeSeatsAndTickets && SharedKeyframes.shake};
    animation: ${(props) =>
      props.shakeSeatsAndTickets && SharedKeyframes.shake};
    animation-duration: 5.72s;
  }
`;
