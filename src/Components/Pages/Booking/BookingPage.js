import React from "react";
import StyledBookingPage from "./style";
import { useSelector } from "react-redux";
import Navigation from "../../shared/Navigation";
import * as Component from "./index";
import { useAuth0 } from "@auth0/auth0-react";
import { RiTimerLine } from "react-icons/ri";

const BookingPage = (props) => {
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
    <StyledBookingPage>
      <Navigation title={"Tickets"} pageTitle={movieTitle} booking={true} />
      <h1>
        Booking <RiTimerLine />
        <Component.Timer {...props} />
      </h1>
      <Component.Schedule {...refs} {...props} />
      <Component.Tickets {...refs} />
      <Component.Seats {...refs} />
      <Component.Summary {...refs} {...props} />
    </StyledBookingPage>
  );
};

export default BookingPage;
