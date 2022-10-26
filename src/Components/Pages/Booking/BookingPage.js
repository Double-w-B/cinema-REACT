import React from "react";
import styled from "styled-components";
import { StyledMainContainer } from "../SingleMoviePage/SingleMoviePage";
import { useSelector } from "react-redux";
import Navigation from "../../Navigation";
import * as Component from "./index";
import { useAuth0 } from "@auth0/auth0-react";
import BookingTimer from "./BookingTimer";
import { RiTimerLine } from "react-icons/ri";

const Booking = (props) => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { title } = singleMovieInfo;
  const {
    setIsModal,
    setIsAuthModal,
    setIsFormValid,
    setIsBookingSummaryModal,
    setIsLoadingModal,
    setIsBookingExpiredModal,
    setIsMovieTrailer,
    setIsCardPaymentModal,
  } = props;

  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  const scheduleContainer = React.useRef("");
  const ticketsContainer = React.useRef("");
  const seatsContainer = React.useRef("");

  React.useEffect(() => {
    if (!isUser) {
      setIsModal(true);
      setIsAuthModal(true);
    }
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  React.useEffect(() => {
    window.onpopstate = () => {
      setIsModal(false);
      setIsFormValid(false);
      setIsAuthModal(false);
      setIsMovieTrailer(false);
      setIsCardPaymentModal(false);
      setIsBookingSummaryModal(false);
      setIsLoadingModal(false);
      setIsBookingExpiredModal(false);
    };
  });

  return (
    <StyledMain>
      <Navigation title={"Tickets"} pageTitle={title} booking={true} />
      <h1>
        Booking <RiTimerLine />
        <BookingTimer {...props} />
      </h1>
      <Component.Schedule scheduleContainer={scheduleContainer} {...props} />
      <Component.Tickets ticketsContainer={ticketsContainer} />
      <Component.Seats
        ticketsContainer={ticketsContainer}
        seatsContainer={seatsContainer}
      />
      <Component.BookingSummary
        ticketsContainer={ticketsContainer}
        seatsContainer={seatsContainer}
        scheduleContainer={scheduleContainer}
        {...props}
      />
    </StyledMain>
  );
};
const StyledMain = styled(StyledMainContainer)`
  position: relative;
  h1 {
    display: flex;
    align-items: center;

    svg {
      margin-left: 1rem;
      font-size: 1.2rem;
    }
  }
`;

export default Booking;
