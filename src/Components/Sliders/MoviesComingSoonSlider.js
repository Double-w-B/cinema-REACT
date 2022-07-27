import React from "react";
import styled from "styled-components";
import { StyledUnderline } from "../Movies/MoviesNowPlaying";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { StyledArrowContainer } from "./MoviesNowPlayingSlider";
import SingleMoviePoster from "../Movies/SingleMoviePoster";
import { useSelector } from "react-redux";

const MoviesComingSoonSlider = () => {
  const { moviesComingSoon } = useSelector((store) => store.movies);
  const imgContainer = React.useRef(null);

  const [mouseActive, setMouseActive] = React.useState(false);
  const [startX, setStartX] = React.useState(null);
  const [scrollLeft, setScrollLeft] = React.useState(null);

  const scrollSlider = (side) => {
    const sliderContainer = imgContainer.current;
    side === "left"
      ? sliderContainer.scrollBy(-216, 0)
      : sliderContainer.scrollBy(216, 0);
  };

  React.useEffect(() => {
    const dragContainer = imgContainer.current;
    const changeMouseCoordinates = (e) => {
      setMouseActive(true);
      setStartX(e.pageX - dragContainer.offsetLeft);
      setScrollLeft(dragContainer.scrollLeft);
    };

    dragContainer.addEventListener("mousedown", changeMouseCoordinates);
    return () =>
      dragContainer.removeEventListener("mousedown", changeMouseCoordinates);
  });

  React.useEffect(() => {
    const dragContainer = imgContainer.current;
    const changeMouseState = () => setMouseActive(false);

    dragContainer.addEventListener("mouseleave", changeMouseState);
    return () =>
      dragContainer.removeEventListener("mouseleave", changeMouseState);
  });

  React.useEffect(() => {
    const dragContainer = imgContainer.current;
    const changeMouseState = () => setMouseActive(false);

    dragContainer.addEventListener("mouseup", changeMouseState);
    return () => dragContainer.removeEventListener("mouseup", changeMouseState);
  });

  React.useEffect(() => {
    const dragContainer = imgContainer.current;

    const mouseMoving = (e) => {
      if (!mouseActive) return;

      if (e.target.tagName === "DIV") {
        e.preventDefault();
        const x = e.pageX - imgContainer.current.offsetLeft;
        const move = x - startX;
        imgContainer.current.scrollLeft = scrollLeft - move;
      }
    };

    dragContainer.addEventListener("mousemove", mouseMoving);
    return () => dragContainer.removeEventListener("mousemove", mouseMoving);
  });

  return (
    <StyledWrapper className="no-select">
      <h1>coming soon</h1>
      <StyledUnderline />
      <StyledContainer ref={imgContainer} mouseActive={mouseActive}>
        <StyledArrowContainer
          className="left upComing"
          onClick={() => scrollSlider("left")}
        >
          <FaChevronLeft />
        </StyledArrowContainer>
        <StyledArrowContainer
          className="right upComing"
          onClick={() => scrollSlider("right")}
        >
          <FaChevronRight />
        </StyledArrowContainer>

        {moviesComingSoon.slice(3, -1).map((movie) => {
          return (
            <SingleMoviePoster
              key={movie.id}
              movieInfo={movie}
              comingSoonClass={true}
              mouseActive={mouseActive}
            />
          );
        })}
      </StyledContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  width: 95%;
  height: 65vh;
  margin: 2rem auto;
  color: #fff;
  position: relative;
  h1 {
    text-transform: capitalize;
    letter-spacing: 1px;
  }
`;

const StyledContainer = styled.div`
  width: 90%;
  height: 80%;
  padding: 1rem 0 0 0;
  margin: 0 auto;
  display: flex;
  gap: 16px;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  cursor: ${(props) => props.mouseActive && "grabbing"};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default MoviesComingSoonSlider;
