import React from "react";
import styled from "styled-components";
import { barOffers } from "../../../data";

const BarOffers = (props) => {
  const { index, setIndex, setShowDesc } = props;

  React.useEffect(() => {
    const lastIndex = barOffers.length - 1;
    index < 0 && setIndex(lastIndex);
    index > lastIndex && setIndex(0);
  }, [index, setIndex]);

  const handleClick = (position) => {
    if (position === "nextIcon") {
      setShowDesc(false);
      setIndex(index + 1);
    }
    if (position === "lastIcon") {
      setShowDesc(false);
      setIndex(index - 1);
    }
  };

  const setActiveIcon = () => {
    return barOffers.map((icon, iconIndex) => {
      let position = "nextIcon";
      if (iconIndex === index) position = "activeIcon";

      if (
        iconIndex === index - 1 ||
        (index === 0 && iconIndex === barOffers.length - 1)
      )
        position = "lastIcon";

      if (
        (index === 0 && iconIndex === index + 2) ||
        (index === 0 && iconIndex === index + 3) ||
        (index === 1 && iconIndex === index + 2) ||
        (index === 1 && iconIndex === index + 3) ||
        (index === 2 && iconIndex === index - 2) ||
        (index === 2 && iconIndex === index + 2) ||
        (index === 3 && iconIndex === index - 2) ||
        (index === 3 && iconIndex === index - 3) ||
        (index === 4 && iconIndex === index - 2) ||
        (index === 4 && iconIndex === index - 3)
      )
        position = "hideSlide";

      return (
        <StyledImg
          key={iconIndex}
          className={position}
          onClick={() => handleClick(position)}
        >
          <img
            src={icon.src}
            className="no-select"
            alt={`${icon.title} icon`}
            draggable="false"
          />
        </StyledImg>
      );
    });
  };

  return (
    <StyledContainer>
      <StyledIconsWrapper>
        {setActiveIcon()}
        {barOffers.map((offer, offerIndex) => {
          let showItem = "";
          if (offerIndex === index) showItem = "show";
          return (
            <p key={offerIndex} className={showItem}>
              {offer.title}
            </p>
          );
        })}
      </StyledIconsWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  width: 100%;
  height: 30vh;
  margin: 2rem auto;
`;

const StyledIconsWrapper = styled.div`
  width: 40%;
  height: 100%;
  margin: 0 auto;
  position: relative;

  && p {
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    bottom: -2rem;
    left: 50%;
    margin: 0;
    transform: translateX(-50%);
    position: absolute;
    opacity: 0;
    transition-delay: 0.3s;
    transition: 0.3s ease-in;

    &.show {
      opacity: 1;
    }
  }
`;

const StyledImg = styled.article`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0.6;
  transition: 0.7s linear;
  background-color: transparent;
  /* background-color: #c3c3c3; */

  img {
    width: 90%;
    height: 90%;
    display: block;
    object-fit: contain;
    transition: 0.7s linear;
  }

  &.lastIcon,
  &.nextIcon,
  &.hideSlide {
    width: 50%;
    cursor: pointer;

    img {
      width: 40%;
      height: 40%;
    }
  }

  &.activeIcon {
    opacity: 1;
    transform: translateX(0);
  }

  &.lastIcon {
    transform: translateX(-100%);
  }
  &.nextIcon {
    transform: translateX(200%);
  }

  &.hideSlide {
    opacity: 0;
    width: 25%;
    height: 100%;
    transform: translateX(200%);
  }
`;

export default BarOffers;
