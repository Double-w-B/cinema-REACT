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

  const { email: storedUserEmail } = useSelector((store) => store.userData);
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
      userEmail={props.userEmail}
      shakeSeatsAndTickets={props.isSeatsEqTicketsAmount}
    >
      <h2>{bookingMovieTitle}</h2>

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
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 45%;
  min-width: 450px;
  height: 100%;
  padding: 0 0 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-bottom: 1rem;
  }

  .info {
    width: 100%;
    height: calc(100% - 32px);
    font-size: 1.1rem;
    display: flex;

    .info__labels,
    .info__details {
      width: 100px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      p {
        color: var(--primary-grey-clr);
      }
    }

    .info__details {
      width: 250px;
      padding-left: 0.5rem;

      p {
        color: var(--primary-white-clr);
      }

      input {
        width: 100%;
        border: none;
        outline: none;
        padding-left: 0.5rem;
        font-size: 1.05rem;
        border-radius: 2px;
        text-transform: lowercase;
        background-color: transparent;
        border: ${(props) =>
          /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(props.userEmail)
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
  }

  .info__labels p:last-child,
  .info__details input {
    -webkit-animation: ${(props) => props.shakeEmail && shake};
    -moz-animation: ${(props) => props.shakeEmail && shake};
    -o-animation: ${(props) => props.shakeEmail && shake};
    animation: ${(props) => props.shakeEmail && shake};
    animation-duration: 5.72s;
  }
  .info__labels p:nth-child(3),
  .info__labels p:nth-child(5),
  .info__details p:nth-child(3),
  .info__details p:nth-child(5) {
    -webkit-animation: ${(props) => props.shakeSeatsAndTickets && shake};
    -moz-animation: ${(props) => props.shakeSeatsAndTickets && shake};
    -o-animation: ${(props) => props.shakeSeatsAndTickets && shake};
    animation: ${(props) => props.shakeSeatsAndTickets && shake};
    animation-duration: 5.72s;
  }
`;

export default SummaryContent;
