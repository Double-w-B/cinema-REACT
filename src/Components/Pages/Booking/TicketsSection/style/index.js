import styled from "styled-components";
import { SharedSection } from "../../../../../style/shared";
import { Promo } from "./Promo.style";
import { Separator, Section } from "./Separator.style";
import { Total } from "./Total.style";

const StyledTickets = styled(SharedSection)`
  padding: 1rem;

  .summary {
    width: 80%;
    margin: 0 auto;
    display: flex;
    height: 12vh;
  }
`;

StyledTickets.Promo = Promo;
StyledTickets.Separator = Separator;
StyledTickets.Section = Section;
StyledTickets.Total = Total;

export default StyledTickets;
