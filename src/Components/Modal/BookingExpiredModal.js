import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import StyledBookingExpiredModal from "./style/BookingExpiredModal.style";

const BookingExpiredModal = (props) => {
  const { setIsModal, setIsBookingExpiredModal } = props;

  const handleClick = () => {
    setIsModal(false);
    setIsBookingExpiredModal(false);
  };

  return (
    <Modal>
      <StyledBookingExpiredModal className="no-select">
        <h1>Expired Booking</h1>
        <p>Your booking has expired. Try again.</p>
        <Link to="/">
          <StyledBookingExpiredModal.Button onClick={handleClick}>
            OK
          </StyledBookingExpiredModal.Button>
        </Link>
      </StyledBookingExpiredModal>
    </Modal>
  );
};

export default BookingExpiredModal;
