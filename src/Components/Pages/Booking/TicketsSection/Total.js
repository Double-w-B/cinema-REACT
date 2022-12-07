import React from "react";
import StyledTickets from "./style";
import { useDispatch } from "react-redux";
import { addBookingTotalPrice } from "../../../../redux/features/booking/bookingSlice";

const Total = (props) => {
  const dispatch = useDispatch();
  const { adultTotal, childTotal, seniorTotal, isPromoCode } = props;

  const ticketsTotal = [adultTotal, childTotal, seniorTotal];

  React.useEffect(() => {
    dispatch(addBookingTotalPrice(countTotal()));
    // eslint-disable-next-line
  }, [adultTotal, childTotal, seniorTotal, isPromoCode]);

  const countTotal = () => {
    const total = ticketsTotal.reduce((prev, cur) => prev + cur, 0);
    if (isPromoCode && total > 0) {
      return +(total - (15 / 100) * total).toFixed(2);
    } else {
      return +total;
    }
  };

  return (
    <StyledTickets.Total>
      <p>Total</p>
      <p>${countTotal()}</p>
    </StyledTickets.Total>
  );
};

export default Total;
