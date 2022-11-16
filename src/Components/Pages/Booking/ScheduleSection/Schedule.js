import React from "react";
import { useSelector } from "react-redux";
import StyledSchedule from "./style";
import * as Components from "./index";

const Schedule = (props) => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const [day, setDay] = React.useState(new window.Date().getTime());
  const [screeningTime, setScreeningTime] = React.useState("");

  const initialState = {
    day,
    setDay,
    screeningTime,
    setScreeningTime,
    singleMovieInfo,
  };

  return (
    <StyledSchedule
      onDragOver={(e) => e.preventDefault()}
      ref={props.scheduleContainer}
    >
      <h2 className="no-select">Date</h2>
      <StyledSchedule.Container>
        <StyledSchedule.Section>
          <Components.Date {...initialState} />
          <Components.Time {...initialState} />
          <Components.Overview {...initialState} />
        </StyledSchedule.Section>
        <Components.Poster {...props} {...singleMovieInfo} />
      </StyledSchedule.Container>
    </StyledSchedule>
  );
};

export default Schedule;
