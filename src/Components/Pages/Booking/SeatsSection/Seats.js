import React from "react";
import styled from "styled-components";
import { StyledContentContainer } from "../../UnlimitedPage/UnlimitedPage";
import SeatsMap from "./SeatsMap";

const Seats = (props) => {
  return (
    <StyledContainer ref={props.seatsContainer} className="no-select">
      <h2>Seats</h2>
      <SeatsMap {...props} />
      <StyledSeatsInfo>
        <div className="available">
          <p>5</p>
          <p>available</p>
        </div>
        <div className="selected">
          <p>5</p>
          <p>selected</p>
        </div>
        <div className="booked">
          <p>booked</p>
        </div>
      </StyledSeatsInfo>
    </StyledContainer>
  );
};
const StyledContainer = styled(StyledContentContainer)`
  padding: 1rem;
`;

const StyledSeatsInfo = styled.div`
  width: 81%;
  height: 70px;
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: center;

  .available,
  .booked,
  .selected {
    width: 8.5%;
    height: 50%;
    margin: 0 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 0.3rem;
    background-color: var(--primary-grey-clr);
    opacity: 0.7;
    box-shadow: 0px 0px 8px #0a0f18;

    p {
      color: var(--primary-white-clr);
      &:last-child {
        position: absolute;
        bottom: -1.8rem;
        left: 50%;
        transform: translateX(-50%);
        color: var(--primary-grey-clr);
      }
    }
  }

  .selected {
    background-color: var(--primary-red-clr);
    opacity: 0.7;
  }

  .booked {
    background-color: #343c4a;
  }
`;

export default Seats;
