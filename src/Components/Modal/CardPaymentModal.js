import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../redux/features/user/userSlice";
import StyledCardPaymentModal from "./style/CardPaymentModal.style";
import * as modalsSlice from "../../redux/features/modals/modalsSlice";
import { useAuth0 } from "@auth0/auth0-react";

const CardPaymentModal = () => {
  const dispatch = useDispatch();
  const storedData = JSON.parse(sessionStorage.getItem("bookings"));
  const storedMovieData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { isCardPaymentModal } = useSelector((store) => store.modals);

  const {
    singleMovieInfo: { poster_path },
    singleMovieVideo: { key },
  } = useSelector((store) => store.singleMovie);

  const {
    paymentMethod: {
      cardholderName: name,
      cardNumber: number,
      cardValidThru: date,
      cvv: cardCvv,
    },
  } = useSelector((store) => store.userData);

  const {
    bookingMovieTitle,
    bookingMovieId,
    bookingDay,
    bookingTime,
    bookingSeats,
    bookingNumberOfTickets,
    bookingAdultTickets,
    bookingChildTickets,
    bookingSeniorTickets,
  } = useSelector((store) => store.bookingTickets);

  const [cardholderName, setCardholderName] = React.useState(name || "");
  const [cardNumber, setCardNumber] = React.useState(number || "");
  const [cardValidThru, setCardValidThru] = React.useState(date || "");
  const [cvv, setCvv] = React.useState(cardCvv || "");

  const [isCardholderName, setIsCardholderName] = React.useState(false);
  const [isCardNumberError, setIsCardNumberError] = React.useState(false);
  const [isValidThruError, setIsValidThruError] = React.useState(false);
  const [isCvvError, setIsCvvError] = React.useState(false);

  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  const errorsInitialState = {
    isValidThruError,
    isCardNumberError,
    isCardholderName,
    isCvvError,
  };

  /* check for stored data if booking page was refreshed */
  const movieTitle = storedMovieData?.title || bookingMovieTitle;
  const movieID = storedMovieData?.id || bookingMovieId;
  const moviePoster = storedMovieData?.poster_path || poster_path;
  const trailerKey = storedMovieData?.trailer?.key || key;

  const newOrder = {
    title: movieTitle,
    movieId: movieID,
    poster: moviePoster,
    trailerKey: trailerKey,
    date: bookingDay,
    time: bookingTime,
    seats: bookingSeats,
    tickets: {
      total: bookingNumberOfTickets,
      adult: bookingAdultTickets,
      child: bookingChildTickets,
      senior: bookingSeniorTickets,
    },
    payment: true,
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
      cardValidThruYear < currentYear ||
      (cardValidThruMonth < currentMonth && cardValidThruYear <= currentYear)
    ) {
      setIsValidThruError(true);
      return;
    }

    if (!cvv || cvv.length < 3) {
      setIsCvvError(true);
      return;
    }

    dispatch(modalsSlice.handleIsCardPaymentModal(false));
    dispatch(modalsSlice.handleIsLoadingModal(true));

    const timer = setTimeout(() => {
      dispatch(modalsSlice.handleIsLoadingModal(false));
      dispatch(modalsSlice.handleIsBookingSummaryModal(true));
      dispatch(setOrder(newOrder));

      if (isUser) {
        if (!storedData) {
          return sessionStorage.setItem("bookings", JSON.stringify([newOrder]));
        }
        const ordersUpdate = [...storedData, newOrder];
        sessionStorage.setItem("bookings", JSON.stringify(ordersUpdate));
      }
    }, 3600);
    return () => clearTimeout(timer);
  };

  const handleCancelBtn = () => {
    dispatch(modalsSlice.handleIsModal(false));
    dispatch(modalsSlice.handleIsCardPaymentModal(false));
    setCardholderName("");
    setCardNumber("");
    setCardValidThru("");
    setCvv("");
  };

  const convertValue = (value, id) => {
    const notLetters = /[^0-9.]/g;
    const everyFourthNmb = /.{1,4}/g;
    const everySecondNmb = /.{1,2}/g;

    if (id === "cardNumber") {
      return value.replace(notLetters, "").match(everyFourthNmb)?.join(" ");
    }

    if (id === "validThru") {
      return value.replace(notLetters, "").match(everySecondNmb)?.join("/");
    }

    if (id === "cvv") {
      return value.replace(notLetters, "");
    }
  };

  return (
    <StyledCardPaymentModal
      {...errorsInitialState}
      showModal={isCardPaymentModal}
    >
      <h1>Debit Card Payment</h1>
      <form>
        <div className="cardholder">
          <input
            type="text"
            autoComplete="off"
            autoFocus={!cardholderName ? true : false}
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
        <StyledCardPaymentModal.Button onClick={handlePayBtn}>
          Pay
        </StyledCardPaymentModal.Button>
        <StyledCardPaymentModal.Button onClick={handleCancelBtn}>
          Cancel
        </StyledCardPaymentModal.Button>
      </div>
    </StyledCardPaymentModal>
  );
};

export default CardPaymentModal;
