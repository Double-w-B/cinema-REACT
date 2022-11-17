import React from "react";
import StyledUnlimited from "./style";
import SingleOffer from "./SingleOffer";
import { unlimitedOffers } from "../../../data";
import { FaChevronCircleRight } from "react-icons/fa";

const Offers = () => {
  const [offerNum, setOfferNum] = React.useState(2);

  const selectedOffer = unlimitedOffers.find((offer) => offer.id === offerNum);

  return (
    <StyledUnlimited.Offers>
      <StyledUnlimited.Cards>
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
      </StyledUnlimited.Cards>
      <StyledUnlimited.Benefits>
        {selectedOffer.benefits.map((benefit, index) => {
          return (
            <p key={index}>
              <FaChevronCircleRight />
              {benefit}
            </p>
          );
        })}
      </StyledUnlimited.Benefits>
    </StyledUnlimited.Offers>
  );
};

export default Offers;
