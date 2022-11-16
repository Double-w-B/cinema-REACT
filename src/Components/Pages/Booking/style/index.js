import styled from "styled-components";
import { SharedMain } from "../../../../style/shared";
import { Timer } from "./Timer.style";

const StyledBookingPage = styled(SharedMain)`
  position: relative;
  h1 {
    display: flex;
    align-items: center;

    svg {
      margin-left: 1rem;
      font-size: 1.2rem;
    }
  }
`;

StyledBookingPage.Timer = Timer;

export default StyledBookingPage;
