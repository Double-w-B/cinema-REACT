import React from "react";
import styled from "styled-components";
import { StyledMainContainer } from "../SingleMoviePage/SingleMoviePage";
import { useSelector } from "react-redux";
import Navigation from "../../Navigation";

const Booking = () => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { title } = singleMovieInfo;

  console.log(singleMovieInfo);

  return (
    <StyledMain>
      <Navigation title={"Tickets"} pageTitle={title} booking={true} />
      Booking Page
    </StyledMain>
  );
};
const StyledMain = styled(StyledMainContainer)``;

export default Booking;
