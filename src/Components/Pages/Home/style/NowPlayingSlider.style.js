import styled from "styled-components";

export const NowPlayingSlider = styled.section`
  width: 95%;
  height: 80vh;
  margin: 2rem auto 0 auto;
  position: relative;
  overflow: hidden;
  display: flex;
  transition: 0.3s linear;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 1100px) {
    height: 75vh;
  }
  @media screen and (max-width: 900px) {
    height: 70vh;
  }
  @media screen and (max-width: 768px) {
    height: 60vh;
  }
  @media screen and (max-width: 650px) {
    height: 50vh;
  }
  @media screen and (max-width: 550px) {
    height: 40vh;
  }
  @media screen and (max-width: 500px) {
    height: 35vh;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  visibility: hidden;
  position: absolute;
  transition: all 0.5s linear;
  z-index: 0;

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
      bottom: 0.5rem;
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
    object-position: top;
  }

  .title {
    color: #fff;
    font-size: ${(props) => (props.title.length > 25 ? "3rem" : "3.5rem")};
    position: absolute;
    transition: all 0.6s linear;
    letter-spacing: 1px;
    text-shadow: 2px 2px #000;
    bottom: -8rem;
    left: 1rem;
  }

  @media screen and (max-width: 1100px) {
    .title {
      font-size: ${(props) => (props.title.length > 25 ? "2.5rem" : "2.8rem")};
    }
  }

  @media screen and (max-width: 900px) {
    .title {
      font-size: ${(props) => (props.title.length > 25 ? "2.2rem" : "2.5rem")};
    }
  }
  @media screen and (max-width: 768px) {
    .title {
      font-size: ${(props) => (props.title.length > 25 ? "1.9rem" : "2.2rem")};
    }
  }
  @media screen and (max-width: 650px) {
    .title {
      font-size: ${(props) => (props.title.length > 25 ? "1.5rem" : "1.8rem")};
    }
  }
  @media screen and (max-width: 550px) {
    .title {
      font-size: ${(props) => (props.title.length > 25 ? "1.4rem" : "1.6rem")};
    }
  }
`;
