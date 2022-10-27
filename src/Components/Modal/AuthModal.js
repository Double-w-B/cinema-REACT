import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { StyledButton } from "../Sliders/MoviesNowPlayingSlider";
import { useAuth0 } from "@auth0/auth0-react";

const AuthModal = (props) => {
  const { setIsModal, setIsAuthModal } = props;

  const handleClick = () => {
    setIsModal(false);
    setIsAuthModal(false);
  };

  const { loginWithRedirect } = useAuth0();

  return (
    <Modal>
      <StyledContainer className="no-select">
        <h1>Log in to CineMania</h1>
        <StyledButtonsContainer>
          <div className="log-in">
            <StyledBtn onClick={loginWithRedirect}>Log in</StyledBtn>
            <p>
              Don't have an account yet?{" "}
              <span onClick={loginWithRedirect}>Join for free</span>
            </p>
          </div>
          <div className="or">
            <div className="line"></div>
            <p>or</p>
            <div className="line"></div>
          </div>
          <div className="guest">
            <StyledBtn onClick={handleClick}>Continue as a guest</StyledBtn>
            <p>
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noreferrer"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </StyledButtonsContainer>
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

  h1 {
    text-align: center;
  }
`;

const StyledButtonsContainer = styled.div`
  width: 100%;
  height: 80%;

  .log-in,
  .guest {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    p {
      text-align: center;
      margin-top: 1rem;
      span {
        color: var(--primary-red-clr);
        cursor: pointer;
      }
    }
  }
  .or {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .line {
      width: 44%;
      height: 1px;
      background-color: var(--primary-white-clr);
    }

    p {
      width: 2.5rem;
      text-align: center;
      text-transform: uppercase;
    }
  }
  .guest {
    justify-content: flex-start;

    p {
      font-size: 0.9rem;
      color: var(--primary-grey-clr);
      a {
        color: var(--primary-red-clr);
      }
    }
  }
`;

const StyledBtn = styled(StyledButton)`
  width: 100%;
  position: relative;
`;

export default AuthModal;
