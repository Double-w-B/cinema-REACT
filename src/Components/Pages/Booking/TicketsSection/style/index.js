import styled from "styled-components";
import { Total } from "./Total.style";
import { Promo, PromoButton } from "./Promo.style";
import { Separator, Section, SeparatorButton } from "./Separator.style";
import { SharedSection } from "../../../../../style/shared";

const StyledTickets = styled(SharedSection)`
  padding: 1rem;

  .summary {
    width: 80%;
    min-height: 10vh;
    margin: 1rem auto 1rem auto;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 1000px) {
    .summary {
      width: 90%;
    }
  }

  @media screen and (max-width: 768px) {
    .summary {
      width: 100%;
      padding: 0;
      flex-direction: column;
    }
    h2 {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 650px) {
    padding: 0.5rem;

    .summary {
      padding: 0;
    }
    h2 {
      font-size: 1.3rem;
    }
  }
`;

StyledTickets.Promo = Promo;
StyledTickets.Separator = Separator;
StyledTickets.Section = Section;
StyledTickets.Total = Total;
StyledTickets.PromoButton = PromoButton;
StyledTickets.SeparatorButton = SeparatorButton;

export default StyledTickets;
