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
      userEmail={props.userEmail}
      shakeSeatsAndTickets={props.isSeatsEqTicketsAmount}
    >
      <h2>{movieTitle}</h2>

      <div className="info">
        <div className="info__labels">
          <p>Date:</p>
          <p>Time:</p>
          <p>Seats:</p>
          <p>Total:</p>
          <p>Tickets:</p>
          {(!isUser || !storedUserEmail) && <p>Email:</p>}
        </div>

        <div className="info__details">
          <p>{bookingDay}</p>
          <p>{bookingTime ? bookingTime : "-"}</p>
          <p>{bookingSeats.length > 0 ? bookingSeats.join(", ") : "-"}</p>
          <p>${bookingTotalPrice}</p>
          <p>
            {allTickets ? allTickets + ` (${numberOfTickets()})` : allTickets}
          </p>
          {(!isUser || !storedUserEmail) && (
            <input
              type="email"
              required
              value={props.userEmail || ""}
              onChange={(e) => props.setUserEmail(e.target.value.toLowerCase())}
            />
          )}
        </div>
      </div>
    </StyledSummary.Order>
  );
};

export default Order;
