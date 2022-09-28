import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay
          isMovieTrailer={props.isMovieTrailer}
          setIsModal={props.setIsModal}
          setIsMovieTrailer={props.setIsMovieTrailer}
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
