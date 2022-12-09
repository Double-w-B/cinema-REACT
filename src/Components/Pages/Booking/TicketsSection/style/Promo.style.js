import styled from "styled-components";
import { SharedButton } from "../../../../../style/shared";

export const Promo = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isPromoCode ? "flex-start" : "center")};
  justify-content: flex-start;

  p {
    padding: 0 0.5rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    color: var(--primary-red-clr);

    span {
      color: var(--primary-white-clr);
      margin-right: 1rem;
      font-size: 1.3rem;
    }

    svg {
      font-size: 1.2rem;
      margin-right: 1rem;
      color: var(--primary-red-clr);
      cursor: pointer;
      transition: 0.3s linear;

      &:active {
        transform: scale(0.8);
      }
    }
  }

  form {
    width: 90%;
    height: 80%;
    display: flex;
    align-items: center;

    input {
      min-width: 250px;
      min-height: 35px;
      margin-right: 1rem;
      outline: none;
      padding-left: 1rem;
      color: var(--primary-white-clr);
      font-size: 1.3rem;
      border: 1px solid var(--primary-grey-clr);
      border-radius: 0.3rem;
      background-color: transparent;
      position: relative;

      &::placeholder {
        opacity: 0.15;
        font-size: 1.2rem;
      }
      &:focus {
        border-color: var(--primary-white-clr);
      }
    }
  }

  @media screen and (max-width: 1000px) {
    p {
      padding: 0 0.5rem 0 0;
    }
  }

  @media screen and (max-width: 768px) {
    align-self: start;
    margin-left: 1rem;

    p {
      font-size: 1.2rem;
      margin-left: 0;
      span {
        font-size: 1.2rem;
      }
    }

    form {
      width: 100%;
      input {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    p {
      font-size: 1.1rem;
      span {
        font-size: 1.1rem;
      }
    }
    form input {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 550px) {
    margin-left: 0;
    width: 100%;

    form {
      justify-content: space-between;
      padding-right: 0.5rem;
      input {
        width: calc(100% - 90px);
        margin-right: 0;
      }
    }
  }
`;

export const PromoButton = styled(SharedButton)`
  min-width: 45px;
  min-height: 35px;
  position: relative;
  padding: 0 0.5rem;
  font-size: 1.3rem;
  border-radius: 0.3rem;

  &:active {
    transform: scale(0.7);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 650px) {
    font-size: 1.1rem;
  }
`;
