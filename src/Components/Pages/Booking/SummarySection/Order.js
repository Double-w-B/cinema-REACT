import React from "react";
import StyledSummary from "./style";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Order = (props) => {
  const {
    bookingMovieTitle,
    bookingDay,
    bookingTime,
    bookingTotalPrice,
    bookingSeats,
    bookingNumberOfTickets: allTickets,
    bookingAdultTickets: adultTickets,
    bookingChildTickets: childTickets,
    bookingSeniorTickets: seniorTickets,
  } = useSelector((store) => store.bookingTickets);

  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));

  const { email: storedUserEmail } = useSelector((store) => store.userData);
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  const movieTitle = storedData?.title || bookingMovieTitle;

  const isEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(props.userEmail);

  const numberOfTickets = () => {
    const allGroups = [adultTickets, childTickets, seniorTickets];
    const filteredGroup = allGroups
      // eslint-disable-next-line
      .map((tickets, index) => {
        if (tickets > 0 && index === 0) {
          return `Adult x${tickets}`;
        }
        if (tickets > 0 && index === 1) {
          return `Child x${tickets}`;
        }
        if (tickets > 0 && index === 2) {
          return `Senior x${tickets}`;
        }
      })
      .filter((group) => group)
      .join(", ");

    return filteredGroup;
  };

  return (
    <StyledSummary.Order
      shakeEmail={props.isShakeEmail}
      isEmail={isEmail}
      shakeSeatsAndTickets={props.isSeatsEqTicketsAmount}
    >
      <h3>{movieTitle}</h3>

      <div className="info">
        <p>
          <span>Date:</span>
          {bookingDay}
        </p>
        <p>
          <span>Time:</span>
          {bookingTime ? bookingTime : "-"}
        </p>
        <div className="seats-container">
          <p>Seats:</p>
          <p>{bookingSeats.length > 0 ? bookingSeats.join(", ") : "-"}</p>
        </div>
        <p>
          <span>Total:</span>${bookingTotalPrice}
        </p>
        <p>
          <span>Tickets:</span>
          {allTickets ? allTickets + ` (${numberOfTickets()})` : allTickets}
        </p>
        {(!isUser || !storedUserEmail) && (
          <div className="email-container">
            <p>Email:</p>
            <input
              type="email"
              required
              value={props.userEmail || ""}
              onChange={(e) => props.setUserEmail(e.target.value.toLowerCase())}
            />
          </div>
        )}
      </div>
    </StyledSummary.Order>
  );
};

export default Order;
