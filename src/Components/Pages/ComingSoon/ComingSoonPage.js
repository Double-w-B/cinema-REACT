import React from "react";
import * as Shared from "../../shared";
import { useSelector } from "react-redux";
import * as Styled from "../../../style/shared";
import StyledComingSoon from "./style/ComingSoon.style";
import SingleMoviePoster from "../../shared/SingleMoviePoster";

const ComingSoonPage = () => {
  const { moviesComingSoon, comingSoonIsLoading } = useSelector(
    (store) => store.movies
  );

  if (comingSoonIsLoading) {
    return <Shared.Loading />;
  }

  return (
    <StyledComingSoon>
      <Shared.Navigation pageTitle={"Coming Soon"} />
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
