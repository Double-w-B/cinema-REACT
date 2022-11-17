import styled from "styled-components";
import { OrdersSection } from "./OrdersSection.style";
import { SharedSection } from "../../../../../style/shared";
import { DataSection, DataButton } from "./DataSection.style";
import { Container, SingleSection } from "./AccountSections.style";
import { SingleOrder, ImgContainer, OrderInfo } from "./SingleOrder.style";
import {
  PaymentMethod,
  Credentials,
  Confirmation,
  PaymentMethodButton,
} from "./PaymentMethodSection.style";

const StyledAccountSections = styled(SharedSection)`
  height: 40vh;
  margin-top: 1rem;
  padding-bottom: 0;
`;

StyledAccountSections.Container = Container;
StyledAccountSections.SingleSection = SingleSection;
StyledAccountSections.DataSection = DataSection;
StyledAccountSections.DataButton = DataButton;
StyledAccountSections.OrdersSection = OrdersSection;
StyledAccountSections.PaymentMethod = PaymentMethod;
StyledAccountSections.Credentials = Credentials;
StyledAccountSections.Confirmation = Confirmation;
StyledAccountSections.PaymentMethodButton = PaymentMethodButton;
StyledAccountSections.SingleOrder = SingleOrder;
StyledAccountSections.ImgContainer = ImgContainer;
StyledAccountSections.OrderInfo = OrderInfo;

export default StyledAccountSections;
