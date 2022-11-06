import React from "react";
import styled from "styled-components";
import { StyledContentContainer } from "../../UnlimitedPage/UnlimitedPage";
import { movieTickets } from "../../../../data";
import * as Components from "./index";

const Tickets = (props) => {
  const [adultTickets, setAdultTickets] = React.useState(0);
  const [adultTotal, setAdultTotal] = React.useState(0);
  const [childTickets, setChildTickets] = React.useState(0);
  const [childTotal, setChildTotal] = React.useState(0);
  const [seniorTickets, setSeniorTickets] = React.useState(0);
  const [seniorTotal, setSeniorTotal] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");
  const [isPromoCode, setIsPromoCode] = React.useState(false);

  const initialState = {
    adultTickets,
    setAdultTickets,
    adultTotal,
    childTickets,
    setChildTickets,
    childTotal,
    seniorTickets,
    setSeniorTickets,
    seniorTotal,
  };

  const initialStatePromo = {
    isPromoCode,
    setIsPromoCode,
    inputValue,
    setInputValue,
  };

  React.useEffect(() => {
    setAdultTotal(adultTickets * movieTickets[0].price);
    setChildTotal(childTickets * movieTickets[1].price);
    setSeniorTotal(seniorTickets * movieTickets[2].price);
  }, [adultTickets, childTickets, seniorTickets]);

  return (
    <StyledContainer className="no-select" ref={props.ticketsContainer}>
      <h2>Tickets</h2>
      <Components.Separator {...initialState} />
      <div className="summary">
        <Components.Promo {...initialStatePromo} />
        <Components.Total {...initialState} isPromoCode={isPromoCode} />
      </div>
    </StyledContainer>
  );
};
const StyledContainer = styled(StyledContentContainer)`
  padding: 1rem;

  .summary {
    width: 80%;
    margin: 0 auto;
    display: flex;
    height: 12vh;
  }
`;
export default Tickets;
