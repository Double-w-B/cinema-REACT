import React from "react";
import styled from "styled-components";
import Modal from "../../Modal/Modal";
import { Link } from "react-router-dom";
import { StyledButton } from "../../Sliders/MoviesNowPlayingSlider";

const BookingExpiredModal = (props) => {
  const { setIsModal, setIsBookingExpiredModal } = props;

  const handleClick = () => {
    setIsModal(false);
    setIsBookingExpiredModal(false);
  };

  return (
    <Modal>
      <StyledContainer>
        <h1>Expired Booking</h1>
        <p>Your booking has expired. Try again.</p>
        <Link to="/">
          <StyledBtn onClick={handleClick}>Ok</StyledBtn>
        </Link>
      </StyledContainer>
    </Modal>
  );
};

const StyledContainer = styled.div`
  width: 25vw;
  height: 30vh;
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

  h1,
  p {
    text-align: center;
  }

  a {
    width: 50%;
    margin: 0 auto;
  }
`;

const StyledBtn = styled(StyledButton)`
  width: 100%;
  position: relative;
`;

export default BookingExpiredModal;
