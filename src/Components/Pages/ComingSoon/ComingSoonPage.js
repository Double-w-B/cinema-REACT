import React from "react";
import { useSelector } from "react-redux";
import * as Styled from "../../../style/shared";
import Navigation from "../../shared/Navigation";
import StyledComingSoon from "./style/ComingSoon.style";
import SingleMoviePoster from "../../shared/SingleMoviePoster";

const ComingSoonPage = () => {
  const { moviesComingSoon } = useSelector((store) => store.movies);

  return (
    <StyledComingSoon>
      <Navigation pageTitle={"Coming Soon"} />
      <h1>Coming soon</h1>
      <Styled.SharedUnderline />
      <StyledComingSoon.PostersContainer>
        {moviesComingSoon.slice(4).map((movie) => {
          return (
            <SingleMoviePoster
              key={movie.id}
              movieInfo={movie}
              pageTitle={"Coming Soon"}
            />
          );
        })}
      </StyledComingSoon.PostersContainer>
    </StyledComingSoon>
  );
};

export default ComingSoonPage;
