import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StyledBookingExpiredModal from "./style/BookingExpiredModal.style";
import * as modalsSlice from "../../redux/features/modals/modalsSlice";

const BookingExpiredModal = (props) => {
  const dispatch = useDispatch();
  const { isBookingExpiredModal } = useSelector((store) => store.modals);

  const handleClick = () => {
    dispatch(modalsSlice.handleIsModal(false));
    dispatch(modalsSlice.handleIsBookingExpiredModal(false));
  };

  return (
    <StyledBookingExpiredModal
      className="no-select"
      showModal={isBookingExpiredModal}
    >
      <h1>Expired Booking</h1>
      <p>Your booking has expired. Try again.</p>
      <Link to="/">
        <StyledBookingExpiredModal.Button onClick={handleClick}>
          OK
        </StyledBookingExpiredModal.Button>
      </Link>
    </StyledBookingExpiredModal>
  );
};

export default BookingExpiredModal;
