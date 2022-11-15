import React from "react";
import StyledHomePage from "./style";
import * as Styled from "../../../style/shared/";
import SingleMoviePoster from "../../shared/SingleMoviePoster";
import { useSelector } from "react-redux";

const NowPlaying = (props) => {
  const { moviesNowPlaying } = useSelector((store) => store.movies);

  return (
    <StyledHomePage.NowPlaying ref={props.nowPlayingContainer}>
      <h1>now playing</h1>
      <Styled.SharedUnderline />
      <Styled.SharedContainer draggable="false">
        {moviesNowPlaying.slice(0, 12).map((movie) => {
          return (
            <SingleMoviePoster
              key={movie.id}
              movieInfo={movie}
              movieRelease={"playing"}
            />
          );
        })}
      </Styled.SharedContainer>
    </StyledHomePage.NowPlaying>
  );
};

export default NowPlaying;
