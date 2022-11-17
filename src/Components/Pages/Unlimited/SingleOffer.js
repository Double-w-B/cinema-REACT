import React from "react";
import StyledUnlimited from "./style";

const SingleOffer = (props) => {
  const { title, id, price, offerNum, setOfferNum } = props;
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (offerNum === id) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [offerNum, id]);

  const handleClick = () => {
    setOfferNum(id);
  };

  return (
    <StyledUnlimited.SingleOffer
      onClick={handleClick}
      className="no-select"
      active={active}
      id={id}
    >
      <p>{title}</p>
      <p>${price}/month</p>
    </StyledUnlimited.SingleOffer>
  );
};

export default SingleOffer;
