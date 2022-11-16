import styled from "styled-components";
import { SharedMain } from "../../../../style/shared";
import { InfoContainer, ReviewTitle } from "./SingleMovie.style";
import { Trailer, Layer } from "./Trailer.style";
import { MainTitle } from "./MainTitle.style";

export const StyledSingleMovie = styled(SharedMain)``;

StyledSingleMovie.InfoContainer = InfoContainer;
StyledSingleMovie.ReviewTitle = ReviewTitle;
StyledSingleMovie.Trailer = Trailer;
StyledSingleMovie.Layer = Layer;
StyledSingleMovie.MainTitle = MainTitle;

export default StyledSingleMovie;
