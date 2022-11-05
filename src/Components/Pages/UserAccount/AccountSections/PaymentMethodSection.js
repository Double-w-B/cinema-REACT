import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Sliders/MoviesNowPlayingSlider";

const PaymentMethodSection = () => {
  const [cardholderName, setCardholderName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardValidThru, setCardValidThru] = React.useState("");
  const [cvv, setCvv] = React.useState("");

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
    <StyledContainer className="no-select">
      <StyledCredentialsContainer>
        <h2>Debit Card Credentials</h2>
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
      </StyledCredentialsContainer>
      <StyledConfirmationContainer>
        <p>
          Easy and safe! Don't worry about numbers. Add and save your debit card
          credentials (Visa or MasterCard). Have them always by your side when
          you need them!
        </p>

        <div className="buttons">
          <StyledBtn>Save</StyledBtn>
          <StyledBtn>Remove</StyledBtn>
        </div>
      </StyledConfirmationContainer>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  h2 {
    text-align: center;
  }
`;

const StyledCredentialsContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 1rem 2rem;

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
