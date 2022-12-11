import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  overflow: hidden;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.9) 0px 3px 8px;

  .layer {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1),
      transparent,
      rgba(0, 0, 0, 0.1)
    );
  }

  @media screen and (max-width: 700px) {
    height: 50vh;
  }

  @media screen and (max-width: 600px) {
    height: 40vh;
  }
`;

export const Title = styled.div`
  width: 350px;
  height: 200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.index === 0 ? "flex-start" : "flex-end")};
  justify-content: ${(props) =>
    props.index === 0 ? "flex-end" : "flex-start"};
  transition: cubic-bezier(0.42, 0.97, 0.52, 1.49) 0.8s;

  .underline {
    width: 45%;
    height: 5px;
    margin-bottom: 0.5rem;
    border-radius: 0.1rem;
    background-color: var(--primary-red-clr);
  }

  p {
    font-size: 2rem;
    text-align: ${(props) => (props.index === 0 ? "left" : "right")};
  }

  &.img1 {
    bottom: 1rem;
    left: 1rem;
    transform: ${(props) =>
      props.index === 0 ? "translateY(0)" : "translateY(100%)"};
    opacity: ${(props) => (props.index === 0 ? "1" : "0")};
  }

  &.img2 {
    top: 1rem;
    right: 1rem;
    transform: ${(props) =>
      props.index === 1 ? "translateY(0)" : "translateY(-100%)"};
    opacity: ${(props) => (props.index === 1 ? "1" : "0")};
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 650px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  transition: all 0.5s linear;
  opacity: 0.5;

  &.activeSlide {
    opacity: 1;
    transform: translateX(0);
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
`;
