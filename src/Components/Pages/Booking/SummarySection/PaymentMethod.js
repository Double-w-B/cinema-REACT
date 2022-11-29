import React from "react";
import StyledSummary from "./style";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { paymentMethods } from "../../../../data/projectData";
import { setOrder } from "../../../../redux/features/user/userSlice";
import * as modalsSlice from "../../../../redux/features/modals/modalsSlice";

const PaymentMethod = (props) => {
  const dispatch = useDispatch();

  const storedBookingsData = JSON.parse(sessionStorage.getItem("bookings"));
  const storedMovieData = JSON.parse(sessionStorage.getItem("single_movie"));

  const [paymentMethod, setPaymentMethod] = React.useState(null);
  const [isShakeMsg, setIsShakeMsg] = React.useState(false);
  const summaryContainer = React.useRef("");

  const {
    singleMovieInfo: { poster_path },
    singleMovieVideo: { key },
  } = useSelector((store) => store.singleMovie);

  const {
    bookingMovieTitle,
    bookingMovieId,
    bookingDay,
    bookingTime,
    bookingSeats,
    bookingEmail,
    bookingNumberOfTickets,
    bookingAdultTickets,
    bookingChildTickets,
    bookingSeniorTickets,
  } = useSelector((store) => store.bookingTickets);

  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  const {
    scheduleContainer,
    ticketsContainer,
    seatsContainer,
    userEmail,
    isShakeEmail,
    setIsShakeEmail,
    isSeatsEqTicketsAmount,
    setIsSeatsEqTicketsAmount,
  } = props;

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
    payment: false,
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsShakeMsg(false);
      setIsShakeEmail(false);
      setIsSeatsEqTicketsAmount(false);
    }, 350);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [isShakeMsg, isShakeEmail, isSeatsEqTicketsAmount]);

  /* Validation logic of the booking content */
  const handleClick = () => {
    const emailRegExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const showErrorContainer = (element) => {
      window.scrollTo({
        top: element.current.offsetTop - 10,
        behavior: "smooth",
      });
    };

    const dynamicLink = () => {
      return paymentMethods.find((method) => method.name === paymentMethod)
        .link;
    };

    if (!bookingTime) {
      showErrorContainer(scheduleContainer);
      return;
    }
    if (!bookingNumberOfTickets) {
      showErrorContainer(ticketsContainer);
      return;
    }
    if (bookingSeats.length < 1) {
      showErrorContainer(seatsContainer);
      return;
    }

    if (bookingSeats.length !== bookingNumberOfTickets) {
      setIsSeatsEqTicketsAmount(true);
      return;
    }

    if (!userEmail?.match(emailRegExp) || !bookingEmail?.match(emailRegExp)) {
      showErrorContainer(summaryContainer);
      setIsShakeEmail(true);
      return;
    }

    if (paymentMethod == null) {
      showErrorContainer(summaryContainer);
      setIsShakeMsg(true);
      return;
    }

    if (paymentMethod === "VisaMastercard") {
      dispatch(modalsSlice.handleIsModal(true));
      dispatch(modalsSlice.handleIsCardPaymentModal(true));
    } else {
      dispatch(modalsSlice.handleIsModal(true));
      dispatch(modalsSlice.handleIsLoadingModal(true));

      const timer = setTimeout(() => {
        window.open(dynamicLink(), "_blank").focus();
        dispatch(modalsSlice.handleIsLoadingModal(false));
        dispatch(modalsSlice.handleIsBookingSummaryModal(true));
        dispatch(setOrder(newOrder));

        if (isUser) {
          if (!storedBookingsData) {
            return sessionStorage.setItem(
              "bookings",
              JSON.stringify([newOrder])
            );
          }
          const ordersUpdate = [...storedBookingsData, newOrder];
          sessionStorage.setItem("bookings", JSON.stringify(ordersUpdate));
        }
      }, 3600);
      return () => clearTimeout(timer);
    }
  };

  return (
    <StyledSummary.PaymentMethod
      className="no-select"
      isShakeMsg={isShakeMsg}
      ref={summaryContainer}
    >
      <p>Select a payment method</p>
      <div className="summary-payment-method">
        {paymentMethods.map((method, index) => {
          return (
            <div
              key={index}
              className={paymentMethod === method.name ? "active" : ""}
              onClick={() => setPaymentMethod(method.name)}
            >
              <img src={method.img} alt="" />
            </div>
          );
        })}
      </div>
      <StyledSummary.Button onClick={handleClick}>
        Complete booking
      </StyledSummary.Button>
    </StyledSummary.PaymentMethod>
  );
};

export default PaymentMethod;
