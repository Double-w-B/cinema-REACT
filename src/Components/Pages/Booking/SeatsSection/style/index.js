import styled from "styled-components";
import { SharedSection } from "../../../../../style/shared";
import { SeatsInfo } from "./SeatsInfo.style";
import { SeatsMap, Screen, Seats } from "./SeatsMap.style";

const StyledSeats = styled(SharedSection)`
  padding: 1rem;
`;

StyledSeats.SeatsInfo = SeatsInfo;
StyledSeats.SeatsMap = SeatsMap;
StyledSeats.Screen = Screen;
StyledSeats.Seats = Seats;

export default StyledSeats;
