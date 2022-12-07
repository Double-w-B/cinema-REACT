import React from "react";
import StyledSchedule from "./style";
import { useDispatch } from "react-redux";
import { movieScreenings } from "../../../../data/projectData";
import * as bookingSlice from "../../../../redux/features/booking/bookingSlice";

const Time = (props) => {
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));

  const dispatch = useDispatch();
  const { day } = props;
  const { genres } = props.singleMovieInfo;
  const { screeningTime, setScreeningTime } = props;

  const movieGenres = storedData?.genres || genres;

  React.useEffect(() => {
    setScreeningTime("");
    // eslint-disable-next-line
  }, [day]);

  React.useEffect(() => {
    dispatch(bookingSlice.addBookingTime(screeningTime));
    dispatch(bookingSlice.removeBookingSeats());
    // eslint-disable-next-line
  }, [screeningTime]);

  const findMovieScreenings = () => {
    const currentMovieGenres = movieGenres.map((genre) =>
      genre.name.toLowerCase()
    );

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
    <StyledSchedule.TimeContainer className="no-select">
      <p>
        Available <br />
        movie screenings:
      </p>
      <StyledSchedule.Screenings>
        {movieGenres && showMovieScreenings()}
      </StyledSchedule.Screenings>
    </StyledSchedule.TimeContainer>
  );
};

export default Time;
