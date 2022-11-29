import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StyledBookingSummaryModal from "./style/BookingSummaryModal.style";
import * as modalsSlice from "../../redux/features/modals/modalsSlice";

const BookingSummaryModal = (props) => {
  const dispatch = useDispatch();
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { email: userEmail } = useSelector((store) => store.userData);
  const { bookingEmail, bookingMovieTitle } = useSelector(
    (store) => store.bookingTickets
  );
  const { isBookingSummaryModal } = useSelector((store) => store.modals);

  const movieTitle = storedData?.title || bookingMovieTitle;

  const handleClick = () => {
    dispatch(modalsSlice.handleIsModal(false));
    dispatch(modalsSlice.handleIsBookingSummaryModal(false));
  };

  return (
    <StyledBookingSummaryModal
      className="no-select"
      showModal={isBookingSummaryModal}
    >
      <h2>Booking Completed</h2>

      <p>
        Your booking has been submitted successfully! Please check the status of
        your booking tickets. The confirmation email will be sent shortly to{" "}
        <span>{userEmail || bookingEmail}</span>
      </p>

      <p>
        We hope you will enjoy the <span>{movieTitle}</span> movie. Look forward
        to seeing you!
      </p>
      <Link to="/">
        <StyledBookingSummaryModal.Button onClick={handleClick}>
          OK
        </StyledBookingSummaryModal.Button>
      </Link>
    </StyledBookingSummaryModal>
  );
};

export default BookingSummaryModal;
