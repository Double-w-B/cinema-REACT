import React from "react";
import StyledUnlimited from "./style";
import SingleOffer from "./SingleOffer";
import { unlimitedOffers } from "../../../data/projectData";
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
            <div className="benefit">
              <div className="icon">
                <FaChevronCircleRight />
              </div>
              <p key={index}>{benefit}</p>
            </div>
          );
        })}
      </StyledUnlimited.Benefits>
    </StyledUnlimited.Offers>
  );
};

export default Offers;
