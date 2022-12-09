import styled from "styled-components";
import { SharedSection } from "../../../../../style/shared";
import { SeatsInfo } from "./SeatsInfo.style";
import { SeatsMap, Screen, Seats } from "./SeatsMap.style";

const StyledSeats = styled(SharedSection)`
  padding: 1rem;

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 650px) {
    padding: 0.5rem;

    h2 {
      font-size: 1.3rem;
    }
  }
`;

StyledSeats.SeatsInfo = SeatsInfo;
StyledSeats.SeatsMap = SeatsMap;
StyledSeats.Screen = Screen;
StyledSeats.Seats = Seats;

export default StyledSeats;
