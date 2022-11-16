import styled from "styled-components";
import { SharedButton } from "../../../../../style/shared";
import { SharedKeyframes } from "../../../../../style/shared";

export const PaymentMethod = styled.div`
  width: 35%;
  height: 100%;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    text-align: center;
    font-style: italic;
    color: var(--primary-grey-clr);
    -webkit-animation: ${(props) => props.isShakeMsg && SharedKeyframes.shake};
    -moz-animation: ${(props) => props.isShakeMsg && SharedKeyframes.shake};
    -o-animation: ${(props) => props.isShakeMsg && SharedKeyframes.shake};
    animation: ${(props) => props.isShakeMsg && SharedKeyframes.shake};
    animation-duration: 5.72s;
  }

  .summary-payment-method {
    width: 100%;
    height: 60%;
    display: grid;
    grid-template-columns: repeat(2, 48%);
    grid-template-rows: repeat(2, 48%);
    justify-content: space-between;
    gap: 0.5rem;

    div {
      border: 1px solid var(--primary-grey-clr);
      border-radius: 0.3rem;
      background-color: rgba(255, 255, 255, 0.1);
      transition: 0.3s linear;
      opacity: 0.7;
      cursor: pointer;

      &:hover {
        opacity: 1;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      &.active {
        opacity: 1;
        border: 1px solid var(--primary-white-clr);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      img {
        width: 100%;
        height: 100%;
        padding: 0.8rem;
        object-fit: contain;
        color: transparent;
      }
    }
  }

  a {
    width: 100%;
  }
`;

export const Button = styled(SharedButton)`
  position: relative;
  width: 100%;

  &:active {
    transform: scale(0.9);
  }
`;
