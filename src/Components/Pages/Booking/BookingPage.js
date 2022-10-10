import React from "react";
import styled from "styled-components";
import { StyledMainContainer } from "../SingleMoviePage/SingleMoviePage";
import { useSelector } from "react-redux";
import Navigation from "../../Navigation";
import Schedule from "./ScheduleSection/Schedule";
import Tickets from "./TicketsSection/Tickets";
import Seats from "./SeatsSection/Seats";

const Booking = (props) => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { title } = singleMovieInfo;

  const ticketsContainer = React.useRef("");
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  React.useEffect(() => {
    window.onpopstate = () => {
      props.setIsModal(false);
      props.setIsFormValid(false);
    };
  });

  return (
    <StyledMain>
      <Navigation title={"Tickets"} pageTitle={title} booking={true} />
      <h1>Select Tickets</h1>
      <Schedule
        setIsModal={props.setIsModal}
        setIsMovieTrailer={props.setIsMovieTrailer}
      />
      <Tickets ticketsContainer={ticketsContainer} />
      <Seats ticketsContainer={ticketsContainer} />
    </StyledMain>
  );
};
const StyledMain = styled(StyledMainContainer)``;

export default Booking;
