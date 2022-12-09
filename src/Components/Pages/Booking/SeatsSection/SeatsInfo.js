import React from "react";
import StyledSeats from "./style";

const SeatsInfo = () => {
  return (
    <StyledSeats.SeatsInfo>
      <div className="example">
        <p>5</p>
        <p>available</p>
      </div>
      <div className="example">
        <p>5</p>
        <p>selected</p>
      </div>
      <div className="example">
        <p>booked</p>
      </div>
    </StyledSeats.SeatsInfo>
  );
};

export default SeatsInfo;
