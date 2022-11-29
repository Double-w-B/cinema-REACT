import React from "react";
import * as Component from "./index";
import StyledBookingPage from "./style";
import { RiTimerLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import Navigation from "../../shared/Navigation";
import { useDispatch, useSelector } from "react-redux";
import * as modalsSlice from "../../../redux/features/modals/modalsSlice";

const BookingPage = (props) => {
  const dispatch = useDispatch();
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
      dispatch(modalsSlice.handleIsModal(true));
      dispatch(modalsSlice.handleIsAuthModal(true));
    }
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  React.useEffect(() => {
    window.onpopstate = () => {
      dispatch(modalsSlice.hideAllModals());
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
