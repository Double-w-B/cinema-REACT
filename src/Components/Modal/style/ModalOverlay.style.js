import styled from "styled-components";

const StyledModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${(props) => (props.isModal ? "visible" : "hidden")};
  opacity: ${(props) => (props.isModal ? "1" : "0")};
  z-index: ${(props) => (props.isModal ? "10" : "-10")};
  background-color: rgba(0, 0, 0, 0.65);
  transition: all 0.3s linear;
`;

export default StyledModalOverlay;
