import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StyledBookingSummaryModal from "./style/BookingSummaryModal.style";

const BookingSummaryModal = (props) => {
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { email: userEmail } = useSelector((store) => store.userData);
  const { setIsModal, setIsBookingSummaryModal } = props;
  const { bookingEmail, bookingMovieTitle } = useSelector(
    (store) => store.bookingTickets
  );

  const movieTitle = storedData?.title || bookingMovieTitle;

  const handleClick = () => {
    setIsModal(false);
    setIsBookingSummaryModal(false);
  };

  return (
    <Modal>
      <StyledBookingSummaryModal className="no-select">
        <h2>Booking Completed</h2>

        <p>
          Your booking has been submitted successfully! Please check the status
          of your booking tickets. The confirmation email will be sent shortly
          to <span>{userEmail || bookingEmail}</span>
        </p>

        <p>
          We hope you will enjoy the <span>{movieTitle}</span> movie. Look
          forward to seeing you!
        </p>
        <Link to="/">
          <StyledBookingSummaryModal.Button onClick={handleClick}>
            OK
          </StyledBookingSummaryModal.Button>
        </Link>
      </StyledBookingSummaryModal>
    </Modal>
  );
};

export default BookingSummaryModal;
