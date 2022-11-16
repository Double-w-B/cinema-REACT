import React from "react";
import StyledCinemaCafe from "./style";
import { cafeOffers } from "../../../data";

const Offers = (props) => {
  const { index, setIndex, setShowDesc } = props;
  const [iconMove, setIconMove] = React.useState(false);

  React.useEffect(() => {
    const lastIndex = cafeOffers.length - 1;
    index < 0 && setIndex(lastIndex);
    index > lastIndex && setIndex(0);

    const checkIconMove = setTimeout(() => {
      setIconMove(false);
    }, 700);
    return () => clearTimeout(checkIconMove);
  }, [index, setIndex]);

  const handleClick = (position) => {
    if (position === "nextIcon") {
      setIconMove(true);
      setShowDesc(false);
      setIndex(index + 1);
    }
    if (position === "lastIcon") {
      setIconMove(true);
      setShowDesc(false);
      setIndex(index - 1);
    }
  };

  const handleWheel = (e) => {
    if (!iconMove && e.deltaY < 0) {
      setIconMove(true);
      setShowDesc(false);
      setIndex(index + 1);
    }
    if (!iconMove && e.deltaY > 0) {
      setIconMove(true);
      setShowDesc(false);
      setIndex(index - 1);
    }
  };

  const setActiveIcon = () => {
    return cafeOffers.map((icon, iconIndex) => {
      let position = "nextIcon";
      if (iconIndex === index) position = "activeIcon";

      if (
        iconIndex === index - 1 ||
        (index === 0 && iconIndex === cafeOffers.length - 1)
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
        <StyledCinemaCafe.ImgContainer key={iconIndex} className={position}>
          <img
            src={icon.src}
            className="no-select"
            alt={`${icon.title} icon`}
            draggable="false"
            onClick={() => handleClick(position)}
          />
        </StyledCinemaCafe.ImgContainer>
      );
    });
  };

  return (
    <StyledCinemaCafe.Offers
      onMouseOver={() => document.body.classList.add("no-scrolling")}
      onMouseLeave={() => document.body.classList.remove("no-scrolling")}
      onWheel={(e) => handleWheel(e)}
    >
      <StyledCinemaCafe.IconsContainer className="no-select">
        {setActiveIcon()}
        {cafeOffers.map((offer, offerIndex) => {
          let showItem = "";
          if (offerIndex === index) showItem = "show";
          return (
            <p key={offerIndex} className={showItem}>
              {offer.title}
            </p>
          );
        })}
      </StyledCinemaCafe.IconsContainer>
    </StyledCinemaCafe.Offers>
  );
};

export default Offers;
