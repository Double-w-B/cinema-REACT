import styled from "styled-components";
import { SharedMain } from "../../../../style/shared/SharedMain.style";
import { Section } from "./Section.style";
import { Banner, Title, ImgContainer } from "./Banner.style";

export const StyledAbout = styled(SharedMain)`
  transition: 0.3s linear;
  width: 1050px;

  @media screen and (max-width: 1150px) {
    width: 950px;
  }

  @media screen and (max-width: 1000px) {
    width: 93%;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 650px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

StyledAbout.Section = Section;
StyledAbout.Banner = Banner;
StyledAbout.Title = Title;
StyledAbout.ImgContainer = ImgContainer;

export default StyledAbout;
