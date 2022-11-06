import React from "react";
import styled from "styled-components";
import SingleOffer from "./SingleOffer";
import { unlimitedOffers } from "../../../data";
import { FaChevronCircleRight } from "react-icons/fa";

const Offers = () => {
  const [offerNum, setOfferNum] = React.useState(2);

  const selectedOffer = unlimitedOffers.find((offer) => offer.id === offerNum);

  return (
    <StyledOfferContainer>
      <StyledCardsContainer>
        {unlimitedOffers.map((offer) => {
          return (
            <SingleOffer
              key={offer.id}
              {...offer}
              offerNum={offerNum}
              setOfferNum={setOfferNum}
            />
          );
        })}
      </StyledCardsContainer>
      <StyledBenefitsContainer>
        {selectedOffer.benefits.map((benefit, index) => {
          return (
            <p key={index}>
              <FaChevronCircleRight />
              {benefit}
            </p>
          );
        })}
      </StyledBenefitsContainer>
    </StyledOfferContainer>
  );
};
const StyledOfferContainer = styled.div`
  width: 100%;
`;

const StyledCardsContainer = styled.div`
  width: 100%;
  height: 20%;
  padding: 1rem 0;
  margin: 2rem 0 1rem 0;
  display: flex;
  gap: 1rem;
`;

const StyledBenefitsContainer = styled.div`
  width: 100%;
  min-height: 270px;

  margin: 1rem 0 2rem 0;

  p {
    margin-left: 4rem;
    margin-top: 1rem;
    transition: 0.3s linear;
    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
      font-size: 1.4rem;
      color: var(--primary-red-clr);
    }

    &:hover {
      color: var(--primary-red-clr);
    }
  }
`;
export default Offers;
