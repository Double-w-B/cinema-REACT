import React from "react";
import StyledHomePage from "./style";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import * as Styled from "../../../style/shared";
import SingleMoviePoster from "../../shared/SingleMoviePoster";

const ComingSoonSlider = () => {
  const { moviesComingSoon } = useSelector((store) => store.movies);
  const imgContainer = React.useRef(null);

  const [mouseActive, setMouseActive] = React.useState(false);
  const [startX, setStartX] = React.useState(null);
  const [scrollLeft, setScrollLeft] = React.useState(null);

  const initialState = {
    comingSoonClass: true,
    mouseActive: mouseActive,
    movieRelease: "coming",
    pageTitle: "Coming Soon",
  };

  const scrollSlider = (side) => {
    const sliderContainer = imgContainer.current;
    side === "left"
      ? sliderContainer.scrollBy(-216, 0)
      : sliderContainer.scrollBy(216, 0);
  };

  const changeMouseCoordinates = (e) => {
    setMouseActive(true);
    setStartX(e.pageX - imgContainer.current.offsetLeft);
    setScrollLeft(imgContainer.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!mouseActive) return;

    if (e.target.tagName === "DIV") {
      e.preventDefault();
      const x = e.pageX - imgContainer.current.offsetLeft;
      const move = x - startX;
      imgContainer.current.scrollLeft = scrollLeft - move;
    }
  };

  return (
    <StyledHomePage.ComingSoonSlider className="no-select">
      <h1>coming soon</h1>
      <Styled.SharedUnderline />
      <StyledHomePage.ComingSoonSlider.Container
        ref={imgContainer}
        mouseActive={mouseActive}
        onMouseDown={changeMouseCoordinates}
        onMouseLeave={() => setMouseActive(false)}
        onMouseUp={() => setMouseActive(false)}
        onMouseMove={handleMouseMove}
      >
        <Styled.SharedArrowContainer
          className="left upComing"
          onClick={() => scrollSlider("left")}
        >
          <FaChevronLeft />
        </Styled.SharedArrowContainer>
        <Styled.SharedArrowContainer
          className="right upComing"
          onClick={() => scrollSlider("right")}
        >
          <FaChevronRight />
        </Styled.SharedArrowContainer>

        {moviesComingSoon.slice(3, -1).map((movie) => {
          return (
            <SingleMoviePoster
              key={movie.id}
              movieInfo={movie}
              {...initialState}
            />
          );
        })}
      </StyledHomePage.ComingSoonSlider.Container>
    </StyledHomePage.ComingSoonSlider>
  );
};

export default ComingSoonSlider;
