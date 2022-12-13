import styled from "styled-components";
import { SharedButton } from "../../../../../style/shared";

export const PaymentMethod = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    overflow-y: scroll;
  }
`;

export const Credentials = styled.div`
  width: 50%;
  height: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    text-align: center;
  }

  form {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .cardholder,
    .card-number {
      width: 100%;
      height: calc(100% / 3);
      display: flex;
      flex-direction: column;
      transition: 0.25s linear;
      position: relative;

      &:hover {
        & input,
        & label {
          opacity: 1;
        }
      }
    }

    .cardholder {
      p {
        opacity: ${(props) => (props.isCardholderName ? "1" : "0")};
      }
    }

    .card-number {
      p {
        opacity: ${(props) => (props.isCardNumberError ? "1" : "0")};
      }
    }

    label {
      text-transform: uppercase;
      order: 1;
      opacity: 0.7;
      transition: 0.25s linear;
    }

    input {
      width: 100%;
      height: 2rem;
      padding: 0 0.5rem;
      border: none;
      outline: none;
      font-size: 1.25rem;
      border-radius: 2px;
      order: 2;
      opacity: 0.7;
      transition: 0.25s linear;

      &::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        opacity: 0.2;
      }
      &::-moz-placeholder {
        /* Firefox 19+ */
        opacity: 0.2;
      }
      &:-ms-input-placeholder {
        /* IE 10+ */
        opacity: 0.2;
      }
      &:-moz-placeholder {
        /* Firefox 18- */
        opacity: 0.2;
      }

      &:focus,
      &:valid {
        opacity: 1;
        & + label,
        & + label {
          opacity: 1;
        }
      }

      &:hover {
        opacity: 1;
      }
    }

    .card-validation {
      width: 100%;
      height: calc(100% / 3);
      display: flex;
      justify-content: space-between;

      .valid-thru,
      .cvv {
        width: 45%;
        display: flex;
        flex-direction: column;
        transition: 0.25s linear;
        position: relative;

        &:hover {
          & input,
          & label {
            opacity: 1;
          }
        }
      }

      .valid-thru {
        p {
          opacity: ${(props) => (props.isValidThruError ? "1" : "0")};
        }
      }

      .cvv {
        p {
          opacity: ${(props) => (props.isCvvError ? "1" : "0")};
        }
      }
    }
  }

  p {
    font-size: 0.9rem;
    position: absolute;
    bottom: -1.2rem;
    left: 50%;
    transform: translateX(-50%);
    color: var(--primary-red-clr);
    pointer-events: none;
    transition: 0.25s linear;
  }

  @media screen and (max-width: 900px) {
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    form input {
      font-size: 1.1rem;
    }

    h2 {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    padding: 1rem 2rem 0.5rem 2rem;

    h2 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
  }
`;

export const Confirmation = styled.div`
  width: 50%;
  height: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    font-size: 1.2rem;
    font-style: italic;
    color: var(--primary-grey-clr);
    text-align: justify;
  }

  .buttons {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 1150px) {
    padding: 2rem 2rem 2rem 1rem;
    justify-content: space-between;

    .buttons {
      width: 80%;
    }
  }

  @media screen and (max-width: 900px) {
    padding: 2rem 1rem;

    .buttons {
      width: 90%;
    }
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    padding: 0 2rem 1rem 2rem;

    p {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }

    .buttons {
      width: 70%;
    }
  }
`;

export const PaymentMethodButton = styled(SharedButton)`
  position: relative;
  width: 120px;

  @media screen and (max-width: 768px) {
    width: 100px;
  }

  @media screen and (max-width: 650px) {
    width: 90px;
  }
`;
