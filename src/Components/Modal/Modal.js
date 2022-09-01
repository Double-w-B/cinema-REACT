import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

const Modal = (props) => {
  const ModalOverlay = (props) => {
    return (
      <StyledModal>
        <div>{props.children}</div>
      </StyledModal>
    );
  };

  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

const slideDown = keyframes`
from {
    opacity: 0;
    transform: translateY(-3rem);
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
  -webkit-animation: ${slideDown} 300ms ease-out forwards;
  -moz-animation: ${slideDown} 300ms ease-out forwards;
  -o-animation: ${slideDown} 300ms ease-out forwards;
  animation: ${slideDown} 300ms ease-out forwards;
`;

export default Modal;
