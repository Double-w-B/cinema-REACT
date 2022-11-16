import React from "react";
import Modal from "./Modal";
import { useAuth0 } from "@auth0/auth0-react";
import StyledAuthModal from "./style/AuthModal.style";

const AuthModal = (props) => {
  const { setIsModal, setIsAuthModal } = props;

  const handleClick = () => {
    setIsModal(false);
    setIsAuthModal(false);
  };

  const { loginWithRedirect } = useAuth0();

  return (
    <Modal>
      <StyledAuthModal className="no-select">
        <h1>Log in to CineMania</h1>
        <StyledAuthModal.ButtonsContainer>
          <div className="log-in">
            <StyledAuthModal.Button onClick={loginWithRedirect}>
              Log in
            </StyledAuthModal.Button>
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
            <StyledAuthModal.Button onClick={handleClick}>
              Continue as a guest
            </StyledAuthModal.Button>
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
        </StyledAuthModal.ButtonsContainer>
      </StyledAuthModal>
    </Modal>
  );
};

export default AuthModal;
