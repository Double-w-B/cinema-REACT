import styled from "styled-components";

export const Trailer = styled.section`
  width: 100%;
  height: 70vh;
  min-height: 10vh;
  margin: 0 auto;
  position: relative;
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
`;
