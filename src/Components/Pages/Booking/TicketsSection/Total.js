import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addBookingTotalPrice } from "../../../../features/booking/bookingSlice";

const Total = (props) => {
  const dispatch = useDispatch();
  const { adultTotal, childTotal, seniorTotal, isPromoCode } = props;

  const ticketsTotal = [adultTotal, childTotal, seniorTotal];

  const countTotal = () => {
    const total = ticketsTotal.reduce((prev, cur) => prev + cur, 0);
    if (isPromoCode && total > 0) {
      return +(total - (15 / 100) * total).toFixed(2);
    } else {
      return +total;
    }
  };

  React.useEffect(() => {
    dispatch(addBookingTotalPrice(countTotal()));
    // eslint-disable-next-line
  }, [adultTotal, childTotal, seniorTotal, isPromoCode]);

  return (
    <StyledContainer>
      <h2>Total</h2>
      <p>${countTotal()}</p>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  width: 40%;
  height: 100%;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  p {
    font-size: 1.2rem;
    width: 4rem;
    margin-left: 5rem;
    font-weight: bold;
  }
`;

export default Total;
