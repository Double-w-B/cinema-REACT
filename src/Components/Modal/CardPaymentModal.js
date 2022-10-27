import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { StyledButton } from "../Sliders/MoviesNowPlayingSlider";

const CardPaymentModal = (props) => {
  const [cardholderName, setCardholderName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardValidThru, setCardValidThru] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [isCardholderName, setIsCardholderName] = React.useState(false);
  const [isCardNumberError, setIsCardNumberError] = React.useState(false);
  const [isValidThruError, setIsValidThruError] = React.useState(false);
  const [isCvvError, setIsCvvError] = React.useState(false);

  const {
    setIsModal,
    setIsCardPaymentModal,
    setIsLoadingModal,
    setIsBookingSummaryModal,
  } = props;

  const errorsInitialState = {
    isValidThruError,
    isCardNumberError,
    isCardholderName,
    isCvvError,
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardholderName(false);
      setIsValidThruError(false);
      setIsCardNumberError(false);
      setIsCvvError(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [isValidThruError, isCardNumberError, isCardholderName, isCvvError]);

  const handlePayBtn = () => {
    const date = new window.Date();
    const cardValidThruMonth = cardValidThru?.slice(0, 2);
    const cardValidThruYear = cardValidThru?.slice(-2);
    const currentMonth = (date.getMonth() + 1).toString();
    const currentYear = date.getFullYear().toString().slice(-2);
    const visaMasterCardRegExp =
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;

    if (!cardholderName) {
      setIsCardholderName(true);
      return;
    }

    if (
      /[a-zA-Z]/.test(cardNumber) ||
      !cardNumber.split(" ").join("").match(visaMasterCardRegExp) ||
      !cardNumber
    ) {
      setIsCardNumberError(true);
      return;
    }

    if (
      !cardValidThru ||
      /[a-zA-Z]/.test(cardValidThru) ||
      cardValidThruMonth > 12 ||
      cardValidThruMonth < currentMonth ||
      cardValidThruYear < currentYear
    ) {
      setIsValidThruError(true);
      return;
    }

    if (!cvv) {
      setIsCvvError(true);
      return;
    }

    setIsCardPaymentModal(false);
    setIsLoadingModal(true);

    const timer = setTimeout(() => {
      setIsModal(true);
      setIsBookingSummaryModal(true);
    }, 3600);
    return () => clearTimeout(timer);
  };

  const handleCancelBtn = () => {
    setIsModal(false);
    setIsCardPaymentModal(false);
  };

  const convertValue = (value, id) => {
    if (id === "cardNumber") {
      return value
        .replace(/[^0-9.]/g, "")
        .match(/.{1,4}/g)
        ?.join(" ");
    }

    if (id === "validThru") {
      return value
        .replace(/[^0-9.]/g, "")
        .match(/.{1,2}/g)
        ?.join("/");
    }

    if (id === "cvv") {
      return value.replace(/[^0-9.]/g, "");
    }
  };

  return (
    <Modal>
      <StyledContainer {...errorsInitialState}>
        <h2>Debit Card Payment</h2>
        <form>
          <div className="cardholder">
            <input
              type="text"
              autoComplete="off"
              autoFocus="true"
              required
              value={cardholderName}
              placeholder="John Doe"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "John Doe")}
              onChange={(e) => setCardholderName(e.target.value)}
            />
            <label>Cardholder Name</label>
            <p>name is needed</p>
          </div>

          <div className="card-number">
            <input
              type="text"
              id="cardNumber"
              autoComplete="off"
              required
              value={cardNumber}
              placeholder="0000 0000 0000 0000"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "0000 0000 0000 0000")}
              onChange={(e) =>
                setCardNumber(convertValue(e.target.value, e.target.id))
              }
              maxLength="19"
            />
            <label>Card Number</label>
            <p>invalid card number</p>
          </div>
          <div className="card-validation">
            <div className="valid-thru">
              <input
                type="text"
                id="validThru"
                autoComplete="off"
                required
                value={cardValidThru}
                placeholder="MM/YY"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "MM/YY")}
                onChange={(e) =>
                  setCardValidThru(convertValue(e.target.value, e.target.id))
                }
                maxLength="5"
              />
              <label>Valid Thru</label>
              <p>invalid date</p>
            </div>
            <div className="cvv">
              <input
                type="text"
                id="cvv"
                autoComplete="off"
                required
                value={cvv}
                placeholder="123"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "123")}
                onChange={(e) =>
                  setCvv(convertValue(e.target.value, e.target.id))
                }
                maxLength="3"
              />
              <label>CVV</label>
              <p>cvv is needed</p>
            </div>
          </div>
        </form>
        <div className="buttons">
          <StyledBtn onClick={handlePayBtn}>Pay</StyledBtn>
          <StyledBtn onClick={handleCancelBtn}>Cancel</StyledBtn>
        </div>
      </StyledContainer>
    </Modal>
  );
};

const StyledContainer = styled.div`
  width: 30vw;
  height: 50vh;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--primary-white-clr);
  background: #080c13;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 3px;

  h2 {
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
`;

const StyledBtn = styled(StyledButton)`
  width: 45%;
  position: relative;
`;

export default CardPaymentModal;
