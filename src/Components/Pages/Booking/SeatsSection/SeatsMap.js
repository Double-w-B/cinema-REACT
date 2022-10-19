import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { BsArrowDown } from "react-icons/bs";
import * as Booking from "../../../../features/booking/bookingSlice";

const SeatsMap = (props) => {
  const dispatch = useDispatch();
  const { bookingNumberOfTickets: tickets, bookingSeats } = useSelector(
    (store) => store.bookingTickets
  );

  const rowsLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const rowSeats = (letter) => {
    const handleClick = (e) => {
      const seatId = e.target.id;

      if (tickets > 0) {
        if (bookingSeats.length < tickets && !bookingSeats.includes(seatId)) {
          dispatch(Booking.addBookingSeats(seatId));
        }

        if (bookingSeats.length === tickets && !bookingSeats.includes(seatId)) {
          dispatch(Booking.replaceBookingSeat(seatId));
        }
      } else {
        const ticketsContainerTop =
          props.ticketsContainer.current.offsetTop - 10;
        window.scrollTo({ top: ticketsContainerTop, behavior: "smooth" });
      }
    };

    const setElementID = (row, index, lastRows) => {
      if (lastRows) {
        if (index < 6) {
          return index + 1 + row;
        } else {
          return index + row;
        }
      } else {
        if (index < 6) {
          return index + row;
        } else {
          return index - 1 + row;
        }
      }
    };

    const showExit = (row, index) => {
      if (row === "E" && (index === 0 || index === 10)) {
        return (
          <div className="direction">
            <BsArrowDown />
            <p>Exit</p>
          </div>
        );
      }
    };

    return Array(11)
      .fill("")
      .map((seat, seatIndex) => {
        if (letter === "F" || letter === "G" || letter === "H") {
          /* stairs */
          if (seatIndex === 5) {
            return <div key={seatIndex} className="seat stairs"></div>;
          }

          return (
            <div
              key={seatIndex}
              id={setElementID(letter, seatIndex, true)}
              className={
                bookingSeats.includes(setElementID(letter, seatIndex, true))
                  ? "seat active"
                  : "seat"
              }
              onClick={(e) => handleClick(e)}
            >
              {seatIndex < 6 ? seatIndex + 1 : seatIndex}
            </div>
          );
        } else {
          /* hide first and last seat */
          if (seatIndex === 0 || seatIndex === 10) {
            return (
              <div key={seatIndex} className="seat exit">
                {showExit(letter, seatIndex)}
              </div>
            );
          }
          /* stairs */
          if (seatIndex === 5) {
            return <div key={seatIndex} className="seat stairs"></div>;
          }

          return (
            <div
              key={seatIndex}
              id={setElementID(letter, seatIndex, false)}
              className={
                bookingSeats.includes(setElementID(letter, seatIndex, false))
                  ? "seat active"
                  : "seat"
              }
              onClick={(e) => handleClick(e)}
            >
              {seatIndex < 6 ? seatIndex : seatIndex - 1}
            </div>
          );
        }
      });
  };

  const rows = () => {
    return Array(8)
      .fill("")
      .map((row, rowIndex) => {
        return (
          <div key={rowIndex} id={rowsLetters[rowIndex]} className="row">
            {rowSeats(rowsLetters[rowIndex])}
            <p className="letter left">{rowsLetters[rowIndex].toUpperCase()}</p>
            <p className="letter right">
              {rowsLetters[rowIndex].toUpperCase()}
            </p>
          </div>
        );
      });
  };

  return (
    <StyledContainer>
      <StyledScreenContainer>
        <div className="screen">
          <div className="shadow"></div>
        </div>
        <p>screen</p>
      </StyledScreenContainer>
      <StyledSeats>{rows()}</StyledSeats>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 55vw;
  height: 70vh;
  margin: 0 auto;
`;

const StyledScreenContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .screen {
    width: 80%;
    height: 60%;
    margin: 0 auto;
    border-radius: 0.3rem;
    transform: perspective(30px) rotateX(-4deg);
    background-color: #c3c3c3;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    position: relative;
  }

  .shadow {
    width: 100%;
    height: 10%;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    position: absolute;
    top: -0.3rem;
    left: 0;
    background-color: #afafaf;
  }

  p {
    color: var(--primary-red-clr);
    opacity: 0.5;
  }
`;

const StyledSeats = styled.div`
  width: 100%;
  height: 70%;
  padding: 2rem 1.5rem 0.5rem 1.5rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-rows: repeat(8, 1fr);

  .row {
    display: flex;
    gap: 0.5rem;
    position: relative;

    .letter {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: var(--primary-red-clr);
      opacity: 0.4;

      &.left {
        left: -1.5rem;
      }

      &.right {
        right: -1.5rem;
      }
    }

    .seat {
      width: calc(100% / 8);
      height: 100%;
      display: grid;
      place-items: center;
      border-radius: 0.3rem;
      background-color: var(--primary-grey-clr);
      opacity: 0.7;
      cursor: pointer;
      transition: 0.3s linear;

      &:hover {
        opacity: 1;
        .exit {
          opacity: 0.7;
        }
      }

      &.active {
        background-color: var(--primary-red-clr);
        opacity: 0.7;
      }

      &.stairs {
        width: calc(100% / 35);
        visibility: hidden;
        background-color: transparent;
        pointer-events: none;
      }

      &.exit {
        visibility: hidden;
        pointer-events: none;
        position: relative;

        .direction {
          width: 70%;
          color: var(--primary-red-clr);
          text-transform: uppercase;
          font-size: 0.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-bottom: 1px solid var(--primary-red-clr);
          bottom: 20%;
          left: 50%;
          position: absolute;
          transform: translateX(-50%);
          transition: 0.3s linear;
          opacity: 0.7;
          visibility: visible;

          svg {
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
`;

export default SeatsMap;
