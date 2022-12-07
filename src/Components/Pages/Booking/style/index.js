import styled from "styled-components";
import { SharedMain } from "../../../../style/shared";
import { Timer } from "./Timer.style";

const StyledBookingPage = styled(SharedMain)`
  width: 1050px;
  position: relative;

  h1 {
    display: flex;
    align-items: center;

    svg {
      margin-left: 1rem;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 1150px) {
    width: 950px;
  }

  @media screen and (max-width: 1000px) {
    width: 93%;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 650px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

StyledBookingPage.Timer = Timer;

export default StyledBookingPage;
