import styled from "styled-components";
import { SharedMain } from "../../../../style/shared";
import { InfoContainer, ReviewTitle } from "./SingleMovie.style";
import { Trailer, Layer } from "./Trailer.style";
import { MainTitle } from "./MainTitle.style";

export const StyledSingleMovie = styled(SharedMain)`
  transition: 0.3s linear;
  width: 1050px;

  @media screen and (max-width: 1150px) {
    width: 950px;
  }

  @media screen and (max-width: 1000px) {
    width: 93%;
  }
`;

StyledSingleMovie.InfoContainer = InfoContainer;
StyledSingleMovie.ReviewTitle = ReviewTitle;
StyledSingleMovie.Trailer = Trailer;
StyledSingleMovie.Layer = Layer;
StyledSingleMovie.MainTitle = MainTitle;

export default StyledSingleMovie;
