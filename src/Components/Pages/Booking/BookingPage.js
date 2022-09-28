import React from "react";
import styled from "styled-components";
import { StyledMainContainer } from "../SingleMoviePage/SingleMoviePage";
import { useSelector } from "react-redux";
import Navigation from "../../Navigation";
import Schedule from "./Schedule";

const Booking = (props) => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { title } = singleMovieInfo;

  // console.log(singleMovieInfo);

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
    </StyledMain>
  );
};
const StyledMain = styled(StyledMainContainer)``;

export default Booking;
