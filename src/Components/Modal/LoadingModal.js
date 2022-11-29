import React from "react";
import spinner from "../../assets/spinner_loading.gif";
import { useSelector } from "react-redux";
import StyledLoadingModal from "./style/LoadingModal.style";

const LoadingModal = () => {
  const { isLoadingModal } = useSelector((store) => store.modals);

  return (
    <StyledLoadingModal showModal={isLoadingModal}>
      <img src={spinner} alt="" />
    </StyledLoadingModal>
  );
};

export default LoadingModal;
