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
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { title } = singleMovieInfo;

  const { isAuthenticated, user, isLoading } = useAuth0();
  const isUser = isAuthenticated && user;

  const movieTitle = storedData?.title || title;

  const scheduleContainer = React.useRef("");
  const ticketsContainer = React.useRef("");
  const seatsContainer = React.useRef("");

  const refs = {
    scheduleContainer,
    ticketsContainer,
    seatsContainer,
  };

  React.useEffect(() => {
    if (!isLoading && !isUser) {
      props.setIsModal(true);
      props.setIsAuthModal(true);
    }
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  React.useEffect(() => {
    window.onpopstate = () => {
      props.setIsModal(false);
      props.setIsFormValid(false);
      props.setIsAuthModal(false);
      props.setIsMovieTrailer(false);
      props.setIsCardPaymentModal(false);
      props.setIsBookingSummaryModal(false);
      props.setIsLoadingModal(false);
      props.setIsBookingExpiredModal(false);
    };
  });

  return (
    <StyledMain>
      <Navigation title={"Tickets"} pageTitle={movieTitle} booking={true} />
      <h1>
        Booking <RiTimerLine />
        <BookingTimer {...props} />
      </h1>
      <Component.Schedule {...refs} {...props} />
      <Component.Tickets {...refs} />
      <Component.Seats {...refs} />
      <Component.BookingSummary {...refs} {...props} />
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
