import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import StyledContactUsModal from "./style/ContactUsModal.style";

const ContactUsModal = (props) => {
  const handleClick = () => {
    props.setIsModal(false);
    props.setIsFormValid(false);
  };

  return (
    <Modal>
      <StyledContactUsModal>
        <div className="content">
          <h2>Thank you for contacting CineMania!</h2>
          <p>
            Inquiries are responded to within 24-48 business hours.
            Additionally, you can reach out to us on Facebook or Instagram.
          </p>{" "}
          <Link to="/" onClick={handleClick}>
            <StyledContactUsModal.Button>OK</StyledContactUsModal.Button>
          </Link>
        </div>
      </StyledContactUsModal>
    </Modal>
  );
};

export default ContactUsModal;
