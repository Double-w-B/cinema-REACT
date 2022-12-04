import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StyledContactUsModal from "./style/ContactUsModal.style";
import * as modalsSlice from "../../redux/features/modals/modalsSlice";

const ContactUsModal = () => {
  const dispatch = useDispatch();

  const { isContactUsModal } = useSelector((store) => store.modals);

  const handleClick = () => {
    dispatch(modalsSlice.handleIsModal(false));
    dispatch(modalsSlice.handleIsContactUsModal(false));
  };

  return (
    <StyledContactUsModal showModal={isContactUsModal}>
      <div className="content">
        <h1>Thank you for contacting CineMania!</h1>
        <p>
          Inquiries are responded to within 24-48 business hours. Additionally,
          you can reach out to us on Facebook or Instagram.
        </p>{" "}
        <Link to="/" onClick={handleClick}>
          <StyledContactUsModal.Button>OK</StyledContactUsModal.Button>
        </Link>
      </div>
    </StyledContactUsModal>
  );
};

export default ContactUsModal;
