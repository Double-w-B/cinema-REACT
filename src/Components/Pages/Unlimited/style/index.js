import styled from "styled-components";
import { SharedMain } from "../../../../style/shared";
import { InfoContainer } from "./Unlimited.style";
import { Offers, Cards, Benefits } from "./Offers.style";
import { SingleOffer } from "./SingleOffers.style";

const StyledUnlimited = styled(SharedMain)`
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

StyledUnlimited.InfoContainer = InfoContainer;
StyledUnlimited.Offers = Offers;
StyledUnlimited.Cards = Cards;
StyledUnlimited.Benefits = Benefits;
StyledUnlimited.SingleOffer = SingleOffer;

export default StyledUnlimited;
