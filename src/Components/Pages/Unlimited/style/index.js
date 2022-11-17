import styled from "styled-components";
import { SharedMain } from "../../../../style/shared";
import { InfoContainer } from "./Unlimited.style";
import { Offers, Cards, Benefits } from "./Offers.style";
import { SingleOffer } from "./SingleOffers.style";

const StyledUnlimited = styled(SharedMain)``;

StyledUnlimited.InfoContainer = InfoContainer;
StyledUnlimited.Offers = Offers;
StyledUnlimited.Cards = Cards;
StyledUnlimited.Benefits = Benefits;
StyledUnlimited.SingleOffer = SingleOffer;

export default StyledUnlimited;
