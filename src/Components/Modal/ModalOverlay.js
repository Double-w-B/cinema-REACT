import React from "react";
import StyledModalOverlay from "./style/ModalOverlay.style";
import { useSelector } from "react-redux";

const ModalOverlay = (props) => {
  const { isModal } = useSelector((store) => store.modals);

  return (
    <StyledModalOverlay isModal={isModal}>{props.children}</StyledModalOverlay>
  );
};

export default ModalOverlay;
