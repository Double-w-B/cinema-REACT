import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import { StyledButton } from "../Sliders/MoviesNowPlayingSlider";

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
      <StyledContainer className="no-select">
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
          <StyledBtn onClick={handleClick}>OK</StyledBtn>
        </Link>
      </StyledContainer>
    </Modal>
  );
};

const StyledContainer = styled.div`
  width: 30vw;
  height: 50vh;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--primary-white-clr);
  background: #080c13;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 3px;

  h2 {
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    word-break: break-word;
    span {
      color: var(--primary-red-clr);
    }
  }
  a {
    width: 100%;
    display: grid;
    place-items: center;
  }
`;

const StyledBtn = styled(StyledButton)`
  position: relative;
  width: 50%;

  &:active {
    transform: scale(0.9);
  }
`;

export default BookingSummaryModal;
