import React from "react";
import styled from "styled-components";
import { StyledContentContainer } from "../../UnlimitedPage/UnlimitedPage";
import { useSelector } from "react-redux";
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
    <StyledContainer>
      <StyledSection>
        <Components.Date {...initialState} />
        <Components.Time {...initialState} />
        <Components.Overview {...initialState} />
      </StyledSection>
      <Components.Poster {...props} {...singleMovieInfo} />
    </StyledContainer>
  );
};

const StyledContainer = styled(StyledContentContainer)`
  padding: 1rem 0 1rem 2rem;
  display: flex;
`;

const StyledSection = styled.section`
  width: 65%;
  height: 60vh;
`;

export default Schedule;
