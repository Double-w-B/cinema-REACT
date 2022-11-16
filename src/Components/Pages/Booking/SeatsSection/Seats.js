import React from "react";
import StyledSeats from "./style";
import * as Component from "./";

const Seats = (props) => {
  return (
    <StyledSeats ref={props.seatsContainer} className="no-select">
      <h2>Seats</h2>
      <Component.SeatsMap {...props} />
      <Component.SeatsInfo />
    </StyledSeats>
  );
};

export default Seats;
