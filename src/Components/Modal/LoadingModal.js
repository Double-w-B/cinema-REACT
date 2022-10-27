import React from "react";
import Modal from "./Modal";
import spinner from "../../Images/spinner_loading.gif";

const LoadingModal = (props) => {
  const { isLoadingModal } = props;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      props.setIsModal(false);
      props.setIsLoadingModal(false);
    }, 3500);
    return () => clearTimeout(timer);

    // eslint-disable-next-line
  }, [isLoadingModal]);

  return (
    <Modal>
      <img src={spinner} alt="" />
    </Modal>
  );
};

export default LoadingModal;
