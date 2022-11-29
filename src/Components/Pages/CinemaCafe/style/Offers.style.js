import styled from "styled-components";

export const Offers = styled.section`
  width: 100%;
  height: 30vh;
  margin: 2rem auto;
`;

export const IconsContainer = styled.div`
  width: 40%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  cursor: ${(props) => (props.mouseMove ? "grabbing" : "default")};

  && p {
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    bottom: -3rem;
    left: 50%;
    margin: 0;
    font-weight: bold;
    letter-spacing: 1px;
    color: var(--primary-red-clr);
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

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0.6;
  transition: 0.7s linear;
  background-color: transparent;

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
    img {
      cursor: pointer;
    }
  }

  &.nextIcon {
    transform: translateX(200%);
    img {
      cursor: pointer;
    }
  }

  &.hideSlide {
    opacity: 0;
    width: 25%;
    height: 100%;
    transform: translateX(200%);
    cursor: default;
  }
`;
