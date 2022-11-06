import React from "react";
import styled from "styled-components";
import { StyledContentContainer } from "../../UnlimitedPage/UnlimitedPage";
import SeatsMap from "./SeatsMap";

const Seats = (props) => {
  return (
    <StyledContainer ref={props.seatsContainer} className="no-select">
      <h2>Seats</h2>
      <SeatsMap {...props} />
    </StyledContainer>
  );
};
const StyledContainer = styled(StyledContentContainer)`
  padding: 1rem;
`;

export default Seats;
