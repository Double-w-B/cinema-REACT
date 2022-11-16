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
