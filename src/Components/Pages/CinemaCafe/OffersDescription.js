import React from "react";
import StyledCinemaCafe from "./style";
import { cafeOffers } from "../../../data";

const OffersDescription = (props) => {
  const { index, showDesc, setShowDesc } = props;

  React.useEffect(() => {
    if (!showDesc) {
      const changeState = setTimeout(() => {
        setShowDesc(true);
      }, 400);
      return () => clearTimeout(changeState);
    }
  }, [showDesc, setShowDesc]);

  return (
    <StyledCinemaCafe.OffersDescription showDesc={showDesc}>
      {
        // eslint-disable-next-line
        cafeOffers.map((offer, idx) => {
          if (offer.id === index) return <p key={idx}>{offer.desc}</p>;
        })
      }
    </StyledCinemaCafe.OffersDescription>
  );
};

export default OffersDescription;
