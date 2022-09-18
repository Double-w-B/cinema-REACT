import React from "react";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const MoviesNowPlayingSlider = () => {
  const [index, setIndex] = React.useState(0);
  const { moviesNowPlaying, nowPlayingIsLoading, imgHiResUrl } = useSelector(
    (store) => store.movies
  );
  const firstSixMovies = moviesNowPlaying.slice(0, 6);

  React.useEffect(() => {
    const lastIndex = firstSixMovies.length - 1;
    index < 0 && setIndex(lastIndex);
    index > lastIndex && setIndex(0);
  }, [index, firstSixMovies.length]);

  React.useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > firstSixMovies.length - 1) index = 0;
        return index;
      });
    }, 6000);
    return () => clearInterval(slider);
  }, [index, firstSixMovies.length]);

  const setActiveImage = () => {
    return firstSixMovies.map((movie, movieIndex) => {
      const { id, backdrop_path, title } = movie;

      let position = "nextSlide";
      if (movieIndex === index) position = "activeSlide";

      if (
        movieIndex === index - 1 ||
        (index === 0 && movieIndex === firstSixMovies.length - 1)
      )
        position = "lastSlide";

      return (
        <StyledImgContainer key={id} className={position} title={title}>
          <img src={imgHiResUrl + backdrop_path} alt="movie backdrop" />
          <div className="layer"></div>
          <div className="title">{title}</div>
          <StyledButton className="btn-slider">book now</StyledButton>
        </StyledImgContainer>
      );
    });
  };

  return (
    <StyledSection>
      <StyledArrowContainer
        className="left"
        onClick={() => setIndex(index - 1)}
      >
        <FaChevronLeft />
      </StyledArrowContainer>
      <StyledArrowContainer
        className="right"
        onClick={() => setIndex(index + 1)}
      >
        <FaChevronRight />
      </StyledArrowContainer>
      {!nowPlayingIsLoading && setActiveImage()}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 95%;
  height: 80vh;
  margin: 2rem auto 0 auto;
  position: relative;
  overflow: hidden;
  display: flex;
`;

const StyledImgContainer = styled.article`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  visibility: hidden;

  position: absolute;
  transition: all 0.5s linear;
  z-index: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .layer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
        rgba(0, 0, 0, 0.3),
        transparent,
        rgba(0, 0, 0, 0.4)
      ),
      linear-gradient(
        to right,
        rgba(0, 0, 0, 0.9),
        transparent,
        rgba(0, 0, 0, 0.9)
      );
  }

  &.activeSlide {
    visibility: visible;
    transform: translateX(0);

    .title {
      bottom: 0;
    }
  }
  &.lastSlide {
    transform: translateX(-100%);
  }
  &.nextSlide {
    transform: translateX(100%);
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .title {
    color: #fff;
    font-size: ${(props) => (props.title.length > 30 ? "3rem" : "3.5rem")};
    position: absolute;
    transition: all 0.6s linear;
    letter-spacing: 1px;
    text-shadow: 2px 2px #000;
    bottom: -8rem;
    left: 1rem;
  }
`;

export const StyledArrowContainer = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  color: #f12535;
  cursor: pointer;
  display: grid;
  place-items: center;
  background-color: rgba(43, 52, 68, 0.2);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1;

  &.upComing {
    background-color: rgba(43, 52, 68, 0.2);
  }

  &.left {
    left: 1rem;
    &.upComing {
      left: 0;
    }

    &:hover {
      transform: translate(-0.1rem, -50%);
    }
  }

  &.right {
    right: 1rem;
    &.upComing {
      right: 0;
    }

    &:hover {
      transform: translate(0.1rem, -50%);
    }
  }
`;

export const StyledButton = styled.button`
  color: #fff;
  position: absolute;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
  padding: 0.5rem;
  border: 1px solid #f12535;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s linear;
  opacity: 0.75;
  background-color: rgba(241, 37, 53, 0.3);

  &:hover {
    background-color: #f12535;
  }

  &.btn-slider {
    bottom: 1rem;
    right: 1rem;
    &:active {
      transform: scale(0.9);
    }
  }
`;

export default MoviesNowPlayingSlider;
