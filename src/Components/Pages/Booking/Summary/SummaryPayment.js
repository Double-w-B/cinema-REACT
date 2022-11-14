import React from "react";
import styled, { keyframes } from "styled-components";
import { StyledButton } from "../../../Sliders/MoviesNowPlayingSlider";
import { useDispatch, useSelector } from "react-redux";
import { paymentMethods } from "../../../../data";
import { setOrder } from "../../../../features/user/userSlice";

const SummaryPayment = (props) => {
  const storedBookingsData = JSON.parse(sessionStorage.getItem("bookings"));
  const storedMovieData = JSON.parse(sessionStorage.getItem("single_movie"));

  const dispatch = useDispatch();
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

  const {
    scheduleContainer,
    ticketsContainer,
    seatsContainer,
    userEmail,
    isShakeEmail,
    setIsShakeEmail,
    isSeatsEqTicketsAmount,
    setIsSeatsEqTicketsAmount,
    setIsModal,
    setIsCardPaymentModal,
    setIsLoadingModal,
    setIsBookingSummaryModal,
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
      setIsModal(true);
      setIsCardPaymentModal(true);
    } else {
      setIsModal(true);
      setIsLoadingModal(true);

      const timer = setTimeout(() => {
        window.open(dynamicLink(), "_blank").focus();
        setIsModal(true);
        setIsBookingSummaryModal(true);
        dispatch(setOrder(newOrder));
        if (!storedBookingsData) {
          sessionStorage.setItem("bookings", JSON.stringify([newOrder]));
        } else {
          sessionStorage.setItem(
            "bookings",
            JSON.stringify([...storedBookingsData, newOrder])
          );
        }
      }, 3600);
      return () => clearTimeout(timer);
    }
  };

  return (
    <StyledContainer
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
      <StyledBtn onClick={handleClick}>Complete booking</StyledBtn>
    </StyledContainer>
  );
};

export const shake = keyframes`
  0% {
    transform: translate(0, 0);
  }
  1.78571% {
    transform: translate(8px, 0);
  }
  3.57143% {
    transform: translate(0, 0);
  }
  5.35714% {
    transform: translate(8px, 0);
  }
  7.14286% {
    transform: translate(0, 0);
  }
  8.92857% {
    transform: translate(8px, 0);
  }
  10.71429% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }

`;

const StyledContainer = styled.div`
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
    -webkit-animation: ${(props) => props.isShakeMsg && shake};
    -moz-animation: ${(props) => props.isShakeMsg && shake};
    -o-animation: ${(props) => props.isShakeMsg && shake};
    animation: ${(props) => props.isShakeMsg && shake};
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

const StyledBtn = styled(StyledButton)`
  position: relative;
  width: 100%;

  &:active {
    transform: scale(0.9);
  }
`;
export default SummaryPayment;
