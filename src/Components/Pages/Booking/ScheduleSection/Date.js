import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addBookingDay } from "../../../../features/booking/bookingSlice";

const Date = (props) => {
  const dispatch = useDispatch();

  const { day, setDay } = props;
  const [activeDay, setActiveDay] = React.useState(0);

  React.useEffect(() => {
    dispatch(addBookingDay(showFullDate(day)));
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
    <StyledDateContainer className="no-select">
      <div className="days">{getDays()}</div>
      <p>{showFullDate(day)}</p>
    </StyledDateContainer>
  );
};

const StyledDateContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .days {
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: 80px;
      height: 80px;
      border-radius: 0.3rem;
      display: grid;
      place-items: center;
      cursor: pointer;
      color: var(--primary-grey-clr);
      transition: 0.3s linear;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
      &.active {
        opacity: 1;
        border: 1px solid var(--primary-white-clr);
        color: var(--primary-white-clr);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      p {
        font-size: 1.3rem;
        font-weight: bold;
      }
    }
  }
  & p:not(.days p) {
    font-size: 1.3rem;
    font-weight: bold;
    margin-left: 3rem;
    color: var(--primary-red-clr);
  }
`;

export default Date;
