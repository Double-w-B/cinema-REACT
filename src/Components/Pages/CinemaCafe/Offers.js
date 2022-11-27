import React from "react";
import StyledCinemaCafe from "./style";
import { cafeOffers } from "../../../data/projectData";

const Offers = (props) => {
  const { index, setIndex, setShowDesc } = props;
  const [iconMove, setIconMove] = React.useState(false);
  const iconContainer = React.useRef(null);

  const [mouseActive, setMouseActive] = React.useState(false);
  const [startX, setStartX] = React.useState(null);
  const [scrollLeft, setScrollLeft] = React.useState(null);
  const [moveEnd, setMoveEnd] = React.useState(0);

  React.useEffect(() => {
    const lastIndex = cafeOffers.length - 1;
    index < 0 && setIndex(lastIndex);
    index > lastIndex && setIndex(0);

    const checkIconMove = setTimeout(() => {
      setIconMove(false);
    }, 700);
    return () => clearTimeout(checkIconMove);
  }, [index, setIndex]);

  const changeMouseCoordinates = (e) => {
    setMouseActive(true);
    setStartX(e.pageX - iconContainer.current.offsetLeft);
    setScrollLeft(iconContainer.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!mouseActive || iconMove) return;
    e.preventDefault();
    const x = e.pageX - iconContainer.current.offsetLeft;
    const move = x - startX;
    setMoveEnd(scrollLeft - move);
  };

  const scrollToRight = () => {
    setIconMove(true);
    setShowDesc(false);
    setIndex(index - 1);
  };

  const scrollToLeft = () => {
    setIconMove(true);
    setShowDesc(false);
    setIndex(index + 1);
  };

  const handleMouseUp = () => {
    if (!mouseActive) return;
    if (!iconMove && moveEnd > 0) scrollToLeft();
    if (!iconMove && moveEnd < 0) scrollToRight();
    setMoveEnd(0);
    setMouseActive(false);
  };

  const handleClick = (position) => {
    if (!iconMove && position === "nextIcon") scrollToLeft();
    if (!iconMove && position === "lastIcon") scrollToRight();
  };

  const handleWheel = (e) => {
    if (!iconMove) {
      e.deltaY < 0 && scrollToLeft();
      e.deltaY > 0 && scrollToRight();
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
      <StyledCinemaCafe.IconsContainer
        className="no-select"
        ref={iconContainer}
        onMouseDown={changeMouseCoordinates}
        onMouseLeave={() => setMouseActive(false)}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        mouseActive={mouseActive}
      >
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
