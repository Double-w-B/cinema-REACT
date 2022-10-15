import React from "react";
import styled, { keyframes } from "styled-components";

const ModalOverlay = (props) => {
  return (
    <StyledModal>
      <div>{props.children}</div>
    </StyledModal>
  );
};

const slideDown = keyframes`
from {
    opacity: 0;
    transform: translateY(-10rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.65);
  -webkit-animation: ${slideDown} 350ms ease-out forwards;
  -moz-animation: ${slideDown} 350ms ease-out forwards;
  -o-animation: ${slideDown} 350ms ease-out forwards;
  animation: ${slideDown} 350ms ease-out forwards;
`;

export default ModalOverlay;
