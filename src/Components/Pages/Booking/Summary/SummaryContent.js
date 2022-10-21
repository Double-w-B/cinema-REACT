import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { shake } from "./SummaryPayment";

const SummaryContent = (props) => {
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

  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

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
    <StyledContainer
      shakeEmail={props.isShakeEmail}
      guestEmail={props.guestEmail}
      shakeSeatsAndTickets={props.isSeatsEqTicketsAmount}
    >
      <h2>{bookingMovieTitle}</h2>
      <p>
        <span>Tickets:</span>{" "}
        {allTickets ? allTickets + ` (${numberOfTickets()})` : allTickets}
      </p>
      <p>
        <span>Date:</span> {bookingDay}
      </p>
      <p>
        <span>Time:</span> {bookingTime}
      </p>

      <p>
        <span>Seats:</span> {bookingSeats.join(", ")}
      </p>
      <p>
        <span>Total:</span> ${bookingTotalPrice}
      </p>
      {!isUser && (
        <label>
          Email address:{" "}
          <input
            type="email"
            required
            value={props.guestEmail}
            onChange={(e) => props.setGuestEmail(e.target.value)}
          />
        </label>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 45%;
  height: 100%;
  padding: 0 0 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    &:nth-child(2),
    &:nth-child(5) {
      -webkit-animation: ${(props) => props.shakeSeatsAndTickets && shake};
      -moz-animation: ${(props) => props.shakeSeatsAndTickets && shake};
      -o-animation: ${(props) => props.shakeSeatsAndTickets && shake};
      animation: ${(props) => props.shakeSeatsAndTickets && shake};
      animation-duration: 5.72s;
    }

    span {
      color: var(--primary-grey-clr);
    }
  }

  label {
    color: var(--primary-grey-clr);
    -webkit-animation: ${(props) => props.shakeEmail && shake};
    -moz-animation: ${(props) => props.shakeEmail && shake};
    -o-animation: ${(props) => props.shakeEmail && shake};
    animation: ${(props) => props.shakeEmail && shake};
    animation-duration: 5.72s;

    input {
      width: 60%;
      border: none;
      outline: none;
      padding-left: 0.5rem;
      font-size: 1.05rem;
      border-radius: 2px;
      text-transform: lowercase;
      transition: 0.3s linear;
      background-color: transparent;
      border: ${(props) =>
        props.guestEmail.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)
          ? "1px solid transparent"
          : "1px solid var(--primary-grey-clr)"};
      color: var(--primary-white-clr);

      &:hover {
        border: 1px solid var(--primary-white-clr);
      }
      &:focus {
        opacity: 1;
        border: 1px solid var(--primary-white-clr);
      }
    }
  }
`;

export default SummaryContent;
