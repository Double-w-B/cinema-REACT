import styled from "styled-components";

const StyledMovieTrailerModal = styled.div`
  width: 60vw;
  height: 70vh;
  background-color: black;
  position: relative;
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
