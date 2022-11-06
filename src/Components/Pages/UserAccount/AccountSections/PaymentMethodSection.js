import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Sliders/MoviesNowPlayingSlider";
import { setPaymentMethod } from "../../../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const PaymentMethodSection = () => {
  const dispatch = useDispatch();
  const {
    paymentMethod: {
      cardholderName: name,
      cardNumber: number,
      cardValidThru: date,
      cvv: cardCvv,
    },
  } = useSelector((store) => store.userData);

  const [cardholderName, setCardholderName] = React.useState(name || "");
  const [cardNumber, setCardNumber] = React.useState(number || "");
  const [cardValidThru, setCardValidThru] = React.useState(date || "");
  const [cvv, setCvv] = React.useState(cardCvv || "");

  const [isCardholderName, setIsCardholderName] = React.useState(false);
  const [isCardNumberError, setIsCardNumberError] = React.useState(false);
  const [isValidThruError, setIsValidThruError] = React.useState(false);
  const [isCvvError, setIsCvvError] = React.useState(false);

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

  const handleSaveBtn = () => {
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
      cardValidThruYear < currentYear ||
      (cardValidThruMonth < currentMonth && cardValidThruYear <= currentYear)
    ) {
      setIsValidThruError(true);
      return;
    }

    if (!cvv) {
      setIsCvvError(true);
      return;
    }

    dispatch(
      setPaymentMethod({ cardholderName, cardNumber, cardValidThru, cvv })
    );
    // const cardData = { cardholderName, cardNumber, cardValidThru, cvv };
    // const userData = JSON.parse(localStorage.getItem("userData"));
    // localStorage.setItem("userData", JSON.stringify({ ...userData, cardData }));
  };

  const handleRemoveBtn = () => {
    setCardholderName("");
    setCardNumber("");
    setCardValidThru("");
    setCvv("");
    dispatch(setPaymentMethod(""));
  };

  return (
    <StyledContainer className="no-select">
      <StyledCredentialsContainer {...errorsInitialState}>
        <h2>Debit Card Credentials</h2>
        <form>
          <div className="cardholder">
            <input
              type="text"
              autoComplete="off"
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
      </StyledCredentialsContainer>
      <StyledConfirmationContainer>
        <p>
          Easy and safe! Don't worry about numbers. Add and save your debit card
          credentials (Visa or MasterCard). Have them always by your side when
          you need them!
        </p>

        <div className="buttons">
          <StyledBtn onClick={handleSaveBtn}>Save</StyledBtn>
          <StyledBtn onClick={handleRemoveBtn}>Remove</StyledBtn>
        </div>
      </StyledConfirmationContainer>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledCredentialsContainer = styled.div`
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
`;

const StyledConfirmationContainer = styled.div`
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
`;
const StyledBtn = styled(StyledButton)`
  width: 120px;
  position: relative;

  &:active {
    transform: scale(0.9);
  }
`;
export default PaymentMethodSection;
