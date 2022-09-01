import React from "react";
import Modal from "../../Modal/Modal";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledButton } from "../../Sliders/MoviesNowPlayingSlider";

const ContactUsModal = (props) => {
  return (
    <Modal>
      <StyledContainer>
        <div className="content">
          <h2>Thank you for contacting CineMania!</h2>
          <p>
            Inquiries are responded to within 24-48 business hours.
            Additionally, you can reach out to us on Facebook or Instagram.
          </p>{" "}
          <Link to="/" onClick={() => props.setIsModal(false)}>
            <StyledBtn>OK</StyledBtn>
          </Link>
        </div>
      </StyledContainer>
    </Modal>
  );
};

const StyledContainer = styled.div`
  width: 450px;
  height: 250px;
  border-radius: 2px;
  color: var(--primary-white-clr);
  background: #080c13;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 3px;

  .content {
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 2px;
    background-color: rgba(43, 52, 68, 0.4);
    h2 {
      text-align: center;
      margin: 0 1rem;
    }
    p {
      text-align: justify;
      font-size: 1.1rem;
    }
    a {
      width: 100%;
    }
  }
`;

const StyledBtn = styled(StyledButton)`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 40%;
  padding: 0.4rem 0.5rem;
`;
export default ContactUsModal;
