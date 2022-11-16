import styled from "styled-components";
import { SharedMain } from "../../../../style/shared";
import { Container } from "./CinemaCafe.style";
import { Banner } from "./CinemaCafe.style";
import { Offers, IconsContainer, ImgContainer } from "./Offers.style";
import { OffersDescription } from "./OffersDescription.style";

const StyledCinemaCafe = styled(SharedMain)``;

StyledCinemaCafe.Container = Container;
StyledCinemaCafe.Banner = Banner;
StyledCinemaCafe.Offers = Offers;
StyledCinemaCafe.IconsContainer = IconsContainer;
StyledCinemaCafe.ImgContainer = ImgContainer;
StyledCinemaCafe.OffersDescription = OffersDescription;

export default StyledCinemaCafe;
