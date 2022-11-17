import React from "react";
import StyledAccountSections from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentMethod } from "../../../../redux/features/user/userSlice";

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
  };

  const handleRemoveBtn = () => {
    setCardholderName("");
    setCardNumber("");
    setCardValidThru("");
    setCvv("");
    dispatch(setPaymentMethod(""));
  };

  return (
    <StyledAccountSections.PaymentMethod className="no-select">
      <StyledAccountSections.Credentials {...errorsInitialState}>
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
      </StyledAccountSections.Credentials>
      <StyledAccountSections.Confirmation>
        <p>
          Easy and safe! Don't worry about numbers. Add and save your debit card
          credentials (Visa or MasterCard). Have them always by your side when
          you need them!
        </p>

        <div className="buttons">
          <StyledAccountSections.PaymentMethodButton onClick={handleSaveBtn}>
            Save
          </StyledAccountSections.PaymentMethodButton>
          <StyledAccountSections.PaymentMethodButton onClick={handleRemoveBtn}>
            Remove
          </StyledAccountSections.PaymentMethodButton>
        </div>
      </StyledAccountSections.Confirmation>
    </StyledAccountSections.PaymentMethod>
  );
};

export default PaymentMethodSection;
