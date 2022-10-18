import React from "react";
import styled from "styled-components";
import { StyledMainContainer } from "../SingleMoviePage/SingleMoviePage";
import { useSelector } from "react-redux";
import Navigation from "../../Navigation";
import * as Component from "./index";
import { useAuth0 } from "@auth0/auth0-react";

const Booking = (props) => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { title } = singleMovieInfo;
  const { setIsModal, setIsAuthModal } = props;
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
      props.setIsModal(false);
      props.setIsFormValid(false);
      props.setIsAuthModal(false);
    };
  });

  return (
    <StyledMain>
      <Navigation title={"Tickets"} pageTitle={title} booking={true} />
      <h1>Booking</h1>
      <Component.Schedule
        setIsModal={props.setIsModal}
        setIsMovieTrailer={props.setIsMovieTrailer}
        scheduleContainer={scheduleContainer}
      />
      <Component.Tickets ticketsContainer={ticketsContainer} />
      <Component.Seats
        ticketsContainer={ticketsContainer}
        seatsContainer={seatsContainer}
      />
      <Component.BookingSummary
        ticketsContainer={ticketsContainer}
        seatsContainer={seatsContainer}
        scheduleContainer={scheduleContainer}
      />
    </StyledMain>
  );
};
const StyledMain = styled(StyledMainContainer)``;

export default Booking;
