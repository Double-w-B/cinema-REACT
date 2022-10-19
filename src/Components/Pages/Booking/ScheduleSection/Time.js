import React from "react";
import styled from "styled-components";
import { movieScreenings } from "../../../../data";
import { useDispatch } from "react-redux";
import { addBookingTime } from "../../../../features/booking/bookingSlice";

const Time = (props) => {
  const dispatch = useDispatch();
  const { day } = props;
  const { genres } = props.singleMovieInfo;
  const { screeningTime, setScreeningTime } = props;

  React.useEffect(() => {
    setScreeningTime("");
    // eslint-disable-next-line
  }, [day]);

  React.useEffect(() => {
    dispatch(addBookingTime(screeningTime));
    // eslint-disable-next-line
  }, [screeningTime]);

  const findMovieScreenings = () => {
    const currentMovieGenres = genres.map((genre) => genre.name.toLowerCase());

    const currentDayMovieScreenings =
      new window.Date(day).getDay() % 2 === 0
        ? movieScreenings[0]
        : movieScreenings[1];

    const foundGenre = currentMovieGenres.find((genre) =>
      Object.keys(currentDayMovieScreenings).includes(genre)
    );

    if (foundGenre) {
      return currentDayMovieScreenings[foundGenre];
    } else {
      return movieScreenings[2];
    }
  };

  const showMovieScreenings = () => {
    return findMovieScreenings().map((time, index) => {
      const setClassName = (time) => {
        const currentDateAndTime = new window.Date();
        const bookingDate = new window.Date(day);
        const bookingHour = bookingDate.setHours(time.slice(0, 2));
        const bookingHourAndMinutes = new window.Date(bookingHour).setMinutes(
          time.slice(-2) - 15
        );
        const fullBookingDateAndTime = new window.Date(bookingHourAndMinutes);

        if (currentDateAndTime > fullBookingDateAndTime) {
          return "inactive";
        } else {
          if (screeningTime === time) {
            return "active";
          } else {
            return "";
          }
        }
      };

      return (
        <div
          key={index}
          className={setClassName(time)}
          onClick={() => setScreeningTime(time)}
        >
          <p>{time}</p>
        </div>
      );
    });
  };

  return (
    <StyledTimeContainer className="no-select">
      <h3>
        Available <br />
        movie screenings:
      </h3>
      <StyledTimeScreenings>
        {genres && showMovieScreenings()}
      </StyledTimeScreenings>
    </StyledTimeContainer>
  );
};

const StyledTimeContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    text-align: center;
    margin: 0 auto;
  }
`;

const StyledTimeScreenings = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    width: calc(100% / 5);
    height: 80px;
    width: 80px;
    display: grid;
    place-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 0.3rem;
    color: var(--primary-grey-clr);
    border: 1px solid var(--primary-grey-clr);
    transition: 0.3s linear;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      opacity: 1;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    &.active {
      color: var(--primary-white-clr);
      border: 1px solid var(--primary-white-clr);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      opacity: 1;
    }

    &.inactive {
      opacity: 0.4;
      pointer-events: none;
    }
  }
`;

export default Time;
