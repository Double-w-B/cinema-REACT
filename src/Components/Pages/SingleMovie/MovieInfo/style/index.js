import styled from "styled-components";
import { ButtonContainer, Button } from "./MovieInfo.style";
import { Title } from "./Title.style";
import { ShortInfo } from "./ShortInfo.style";
import { Poster, ImgContainer } from "./Poster.style";

const StyledMovieInfo = styled.article`
  width: 65%;
  padding: ${(props) =>
    props.nowPlaying ? "0.5rem 1rem" : "0.5rem 1rem 3rem 1rem"};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .overview {
    text-align: justify;
  }

  .tagline {
    text-align: center;
    font-style: italic;
  }

  @media screen and (max-width: 940px) {
    width: 100%;
    padding: 0.5rem 1rem;
    .overview,
    .tagline {
      margin: 1rem 0;
    }
  }
`;

StyledMovieInfo.ButtonContainer = ButtonContainer;
StyledMovieInfo.Button = Button;
StyledMovieInfo.Title = Title;
StyledMovieInfo.ShortInfo = ShortInfo;
StyledMovieInfo.Poster = Poster;
StyledMovieInfo.ImgContainer = ImgContainer;

export default StyledMovieInfo;
