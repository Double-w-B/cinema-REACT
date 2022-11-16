import React from "react";
import StyledTickets from "./style";
import { movieTickets } from "../../../../data";
import { useDispatch } from "react-redux";
import * as Booking from "../../../../redux/features/booking/bookingSlice";

const Separator = (props) => {
  const dispatch = useDispatch();
  const {
    adultTickets,
    setAdultTickets,
    childTickets,
    setChildTickets,
    seniorTickets,
    setSeniorTickets,
  } = props;
  const categories = [adultTickets, childTickets, seniorTickets];

  React.useEffect(() => {
    dispatch(Booking.removeBookingSeats());
    dispatch(
      Booking.addBookingNumberOfTickets(
        adultTickets + childTickets + seniorTickets
      )
    );
    dispatch(Booking.addBookingAdultTicketsNumber(adultTickets));
    dispatch(Booking.addBookingChildTicketsNumber(childTickets));
    dispatch(Booking.addBookingSeniorTicketsNumber(seniorTickets));
    // eslint-disable-next-line
  }, [adultTickets, childTickets, seniorTickets]);

  const handleMinusBtn = (category) => {
    if (category === "Adult" && adultTickets > 0) {
      setAdultTickets(adultTickets - 1);
    }
    if (category === "Child" && childTickets > 0) {
      setChildTickets(childTickets - 1);
    }
    if (category === "Senior" && seniorTickets > 0) {
      setSeniorTickets(seniorTickets - 1);
    }
  };

  const handlePlusBtn = (category) => {
    if (category === "Adult" && adultTickets < 10) {
      setAdultTickets(adultTickets + 1);
    }
    if (category === "Child" && childTickets < 10) {
      setChildTickets(childTickets + 1);
    }
    if (category === "Senior" && seniorTickets < 10) {
      setSeniorTickets(seniorTickets + 1);
    }
  };

  return (
    <StyledTickets.Separator>
      {movieTickets.map((categoryTicket, index) => {
        const { category, price } = categoryTicket;
        return (
          <StyledTickets.Section key={index}>
            <div className="category">
              <p>{category}</p>
            </div>
            <div className="price">
              <p>${price}</p>
            </div>
            <div className="number">
              <button
                className="minus"
                onClick={() => handleMinusBtn(category)}
              >
                -
              </button>
              <p>{categories[index]}</p>
              <button className="plus" onClick={() => handlePlusBtn(category)}>
                +
              </button>
            </div>
          </StyledTickets.Section>
        );
      })}
    </StyledTickets.Separator>
  );
};

export default Separator;
