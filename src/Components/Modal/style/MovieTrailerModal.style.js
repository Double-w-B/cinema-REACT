import styled from "styled-components";

const StyledMovieTrailerModal = styled.div`
  width: 60vw;
  min-width: 900px;
  height: 70vh;
  min-height: 520px;
  background-color: black;
  position: relative;
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
  opacity: ${(props) => (props.showModal ? "1" : "0")};
  transition: all 0.2s ease-out;
  border: solid 4px #37474f;

  &:hover {
    svg {
      top: 2rem;
      &:hover {
        top: -4rem;
      }
    }
  }

  svg {
    font-size: 3rem;
    border-radius: 50%;
    top: -4rem;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    cursor: pointer;
    transition: 0.3s linear;
    color: rgba(255, 255, 255, 0.3);
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }

    &:active {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 1000px) {
    height: 60vh;
    min-width: 700px;
    min-height: 420px;
  }

  @media screen and (max-width: 768px) {
    height: 30vh;
    min-width: 600px;
    min-height: 360px;
  }

  @media screen and (max-width: 650px) {
    min-width: 500px;
    min-height: 300px;
  }

  @media screen and (max-width: 530px) {
    min-width: 410px;
    min-height: 250px;
  }
`;

const Layer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #000;
  opacity: ${(props) => (props.showLoadingImg ? "1" : "0")};
  z-index: ${(props) => (props.showLoadingImg ? "2" : "0")};

  img {
    background-color: #000;
  }
`;

StyledMovieTrailerModal.Layer = Layer;

export default StyledMovieTrailerModal;
