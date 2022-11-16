import styled from "styled-components";
import { SharedMain } from "../../../../style/shared/SharedMain.style";
import { Section } from "./Section.style";
import { Banner, Title, ImgContainer } from "./Banner.style";

export const StyledAbout = styled(SharedMain)``;

StyledAbout.Section = Section;
StyledAbout.Banner = Banner;
StyledAbout.Title = Title;
StyledAbout.ImgContainer = ImgContainer;

export default StyledAbout;
