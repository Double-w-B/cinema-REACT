import React from "react";
import StyledSchedule from "./style";

const Overview = (props) => {
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { overview } = props.singleMovieInfo;
  const movieOverview = storedData?.overview || overview;

  return (
    <StyledSchedule.Overview>
      <p>{movieOverview}</p>
    </StyledSchedule.Overview>
  );
};

export default Overview;
