import styled from "styled-components";
import { SharedMain } from "../../../../style/shared";
import { Container } from "./CinemaCafe.style";
import { Banner } from "./CinemaCafe.style";
import { Offers, IconsContainer, ImgContainer } from "./Offers.style";
import { OffersDescription } from "./OffersDescription.style";

const StyledCinemaCafe = styled(SharedMain)`
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

StyledCinemaCafe.Container = Container;
StyledCinemaCafe.Banner = Banner;
StyledCinemaCafe.Offers = Offers;
StyledCinemaCafe.IconsContainer = IconsContainer;
StyledCinemaCafe.ImgContainer = ImgContainer;
StyledCinemaCafe.OffersDescription = OffersDescription;

export default StyledCinemaCafe;
