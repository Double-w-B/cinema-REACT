import React from "react";
import styled from "styled-components";
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
    <StyledContainer showDesc={showDesc}>
      {cafeOffers.map((offer) => {
        if (offer.id === index) return <p>{offer.desc}</p>;
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 75%;
  min-height: 180px;
  margin: 4.5rem auto 0 auto;
  /* background-color: tomato; */

  && p {
    transition: 0.4s ease-in;
    transform: ${(props) =>
      props.showDesc ? "translateX(0)" : "translateY(2rem)"};
    opacity: ${(props) => (props.showDesc ? "1" : "0")};
  }
`;
export default OffersDescription;