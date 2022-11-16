import React from "react";
import { useSelector } from "react-redux";
import * as Styled from "../../../style/shared";
import SingleMoviePoster from "../../shared/SingleMoviePoster";
import Navigation from "../../shared/Navigation";

const ComingSoonPage = () => {
  const { moviesComingSoon } = useSelector((store) => store.movies);

  return (
    <Styled.SharedMain>
      <Navigation pageTitle={"Coming Soon"} />
      <Styled.SharedContainer>
        {moviesComingSoon.slice(4).map((movie) => {
          return (
            <SingleMoviePoster
              key={movie.id}
              movieInfo={movie}
              pageTitle={"Coming Soon"}
            />
          );
        })}
      </Styled.SharedContainer>
    </Styled.SharedMain>
  );
};

export default ComingSoonPage;
