import styled from "styled-components";
import { SharedButton } from "../../../style/shared/SharedButton.style";

const StyledCardPaymentModal = styled.div`
  width: 30vw;
  min-width: 450px;
  max-width: 460px;
  height: 50vh;
  min-height: 380px;
  max-height: 400px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--primary-white-clr);
  position: absolute;
  left: 50%;
  top: ${(props) => (props.showModal ? "50%" : "40%")};
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
  opacity: ${(props) => (props.showModal ? "1" : "0")};
  background: #080c13;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 3px;

  h1 {
    text-align: center;
  }

  form {
    width: 100%;
    height: 60%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;

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
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    color: var(--primary-red-clr);
    pointer-events: none;
    transition: 0.25s linear;
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: 0.25s linear;

    button {
      &:active {
        transform: scale(0.9);
      }
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 400px;
    min-width: 380px;
    h1 {
      font-size: 1.8rem;
    }
    form input {
      font-size: 1.15rem;
    }
  }

  @media screen and (max-width: 650px) {
    height: 45vh;
    min-height: 360px;
    min-width: 340px;

    h1 {
      font-size: 1.6rem;
    }

    form input {
      font-size: 1.05rem;
    }
  }
`;

const Button = styled(SharedButton)`
  width: 45%;
  position: relative;
`;

StyledCardPaymentModal.Button = Button;

export default StyledCardPaymentModal;
