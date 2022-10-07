import React from "react";
import styled from "styled-components";
import { StyledContentContainer } from "../../UnlimitedPage/UnlimitedPage";
import SeatsMap from "./SeatsMap";
const Seats = () => {
  return (
    <StyledContainer>
      <h2>Seats</h2>
      <SeatsMap />
    </StyledContainer>
  );
};
const StyledContainer = styled(StyledContentContainer)`
  padding: 1rem;
`;

export default Seats;
