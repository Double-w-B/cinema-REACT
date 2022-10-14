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
      <h2>Date</h2>
      <StyledWrapper>
        <StyledSection>
          <Components.Date {...initialState} />
          <Components.Time {...initialState} />
          <Components.Overview {...initialState} />
        </StyledSection>
        <Components.Poster {...props} {...singleMovieInfo} />
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled(StyledContentContainer)`
  padding: 1rem 0 1rem 1rem;
`;

const StyledSection = styled.section`
  width: 65%;
  height: 60vh;
  padding-left: 2rem;
`;

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
`;

export default Schedule;
