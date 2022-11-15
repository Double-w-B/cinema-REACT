import styled from "styled-components";

export const NowPlayingSlider = styled.section`
  width: 95%;
  height: 80vh;
  margin: 2rem auto 0 auto;
  position: relative;
  overflow: hidden;
  display: flex;
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
