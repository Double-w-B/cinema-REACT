import styled from "styled-components";
import { SharedSection } from "../../../../../style/shared";
import { PaymentMethod, Button } from "./PaymentMethod.style";
import { Order } from "./Order.style";
import { Container } from "./Summary.style";

const StyledSummary = styled(SharedSection)`
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

StyledSummary.Container = Container;
StyledSummary.Order = Order;
StyledSummary.PaymentMethod = PaymentMethod;
StyledSummary.Button = Button;

export default StyledSummary;
