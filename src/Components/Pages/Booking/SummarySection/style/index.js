import styled from "styled-components";
import { SharedSection } from "../../../../../style/shared";
import { PaymentMethod, Button } from "./PaymentMethod.style";
import { Order } from "./Order.style";
import { Container } from "./Summary.style";

const StyledSummary = styled(SharedSection)`
  padding: 1rem;
`;

StyledSummary.Container = Container;
StyledSummary.Order = Order;
StyledSummary.PaymentMethod = PaymentMethod;
StyledSummary.Button = Button;

export default StyledSummary;
