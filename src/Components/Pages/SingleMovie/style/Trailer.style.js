import styled from "styled-components";

export const Trailer = styled.section`
  width: 100%;
  height: 70vh;
  min-height: 10vh;
  margin: 0 auto;
  position: relative;
  transition: 0.3s linear;

  @media screen and (max-width: 768px) {
    height: 60vh;
  }
  @media screen and (max-width: 670px) {
    height: 50vh;
  }
  @media screen and (max-width: 570px) {
    height: 38vh;
  }
  @media screen and (max-width: 500px) {
    height: 34vh;
  }
`;

export const Layer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #000;
  opacity: ${(props) => (props.showLoadingImg ? "1" : "0")};
  z-index: ${(props) => (props.showLoadingImg ? "2" : "0")};
  border: ${(props) => (props.isTrailer ? "none" : "solid 4px #37474f")};
  border: solid 4px #37474f;

  p {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
    font-style: italic;
    color: var(--primary-grey-clr);
    pointer-events: none;
    visibility: ${(props) => (!props.isTrailer ? "visible" : "hidden")};
  }

  img {
    background-color: #000;
  }

  @media screen and (max-width: 670px) {
    p {
      bottom: 2rem;
    }

    img {
      width: 150px;
    }
  }
  @media screen and (max-width: 500px) {
    p {
      font-size: 0.9rem;
      bottom: 1rem;
    }
  }
`;
