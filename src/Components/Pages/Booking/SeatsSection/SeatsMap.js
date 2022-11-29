import React from "react";
import StyledSeats from "./style";
import { useSelector, useDispatch } from "react-redux";
import { BsArrowDown } from "react-icons/bs";
import * as bookingSlice from "../../../../redux/features/booking/bookingSlice";

const SeatsMap = (props) => {
  const dispatch = useDispatch();
  const { scheduleContainer, ticketsContainer } = props;
  const storedData = JSON.parse(sessionStorage.getItem("bookings"));

  const {
    bookingNumberOfTickets: tickets,
    bookingSeats,
    bookingMovieId,
    bookingDay,
    bookingTime,
  } = useSelector((store) => store.bookingTickets);

  const { orders } = useSelector((store) => store.userData);

  const movieOrders = storedData || orders;

  const sameMovieOrders = movieOrders.filter(
    (order) =>
      // checking the id, date & time of the screening movie
      order.movieId === bookingMovieId &&
      order.date === bookingDay &&
      order.time === bookingTime
  );

  const reservedSeats = sameMovieOrders.map((movie) => movie.seats).flat();

  const rowsLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const showErrorContainer = (element) => {
    window.scrollTo({
      top: element.current.offsetTop - 10,
      behavior: "smooth",
    });
  };

  const rowSeats = (letter) => {
    const handleClick = (e) => {
      const seatId = e.target.id;

      if (!bookingTime) {
        showErrorContainer(scheduleContainer);
        return;
      }

      if (tickets > 0) {
        if (bookingSeats.length < tickets && !bookingSeats.includes(seatId)) {
          dispatch(bookingSlice.addBookingSeats(seatId));
        }

        if (bookingSeats.length === tickets && !bookingSeats.includes(seatId)) {
          dispatch(bookingSlice.replaceBookingSeat(seatId));
        }
      } else {
        showErrorContainer(ticketsContainer);
      }
    };

    const setElementID = (row, index, lastRows) => {
      if (lastRows) {
        if (index < 6) return index + 1 + row;
        return index + row;
      } else {
        if (index < 6) return index + row;
        return index - 1 + row;
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

    const checkSeats = (letter, seatIndex, boolean) => {
      const element = setElementID(letter, seatIndex, boolean);

      if (reservedSeats.includes(element)) return "seat reserved";
      if (bookingSeats.includes(element)) return "seat active";

      return "seat";
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
              className={checkSeats(letter, seatIndex, true)}
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
              className={checkSeats(letter, seatIndex, false)}
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
    <StyledSeats.SeatsMap>
      <StyledSeats.Screen>
        <div className="screen">
          <div className="shadow"></div>
        </div>
        <p>screen</p>
      </StyledSeats.Screen>
      <StyledSeats.Seats>{rows()}</StyledSeats.Seats>
    </StyledSeats.SeatsMap>
  );
};

export default SeatsMap;
