import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import StyledAuthModal from "./style/AuthModal.style";
import { useDispatch, useSelector } from "react-redux";
import * as modalsSlice from "../../redux/features/modals/modalsSlice";

const AuthModal = () => {
  const dispatch = useDispatch();
  const { isAuthModal } = useSelector((store) => store.modals);

  const handleClick = () => {
    dispatch(modalsSlice.handleIsAuthModal(false));
    dispatch(modalsSlice.handleIsModal(false));
  };

  const { loginWithRedirect } = useAuth0();

  return (
    <StyledAuthModal className="no-select" showModal={isAuthModal}>
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
  );
};

export default AuthModal;
