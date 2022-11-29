import React from "react";
import StyledSchedule from "./style";
import { useDispatch } from "react-redux";
import * as bookingSlice from "../../../../redux/features/booking/bookingSlice";

const Date = (props) => {
  const dispatch = useDispatch();

  const { day, setDay } = props;
  const [activeDay, setActiveDay] = React.useState(0);

  React.useEffect(() => {
    dispatch(bookingSlice.addBookingDay(showFullDate(day)));
    // eslint-disable-next-line
  }, [day]);

  function showFullDate(date) {
    return new window.Date(date).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  }
  const handleClick = (date, index) => {
    setDay(date);
    setActiveDay(index);
    dispatch(bookingSlice.removeBookingSeats());
  };

  const getDays = () => {
    const date = new window.Date();
    const today = date.setDate(date.getDate());
    const weekDays = [today];
    for (let i = 0; i <= 5; i++) {
      weekDays.push(date.setDate(date.getDate() + 1));
    }

    return weekDays.map((weekDay, index) => {
      return (
        <div
          key={index}
          id={weekDay}
          onClick={() => handleClick(weekDay, index)}
          className={index === activeDay ? "active" : ""}
        >
          <p>
            {index === 0
              ? "Today"
              : new window.Date(weekDay).toLocaleString("en-us", {
                  weekday: "short",
                })}
          </p>
        </div>
      );
    });
  };

  return (
    <StyledSchedule.Date className="no-select">
      <div className="days">{getDays()}</div>
      <p>{showFullDate(day)}</p>
    </StyledSchedule.Date>
  );
};

export default Date;
