import React from "react";
import styled from "styled-components";
import { VscAccount } from "react-icons/vsc";
import { useAuth0 } from "@auth0/auth0-react";
import spinnerImg from "../../../src/Images/spinner_2.gif";

const LogIn = () => {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } =
    useAuth0();
  const isUser = isAuthenticated && user;

  const logoutUser = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <StyledContainer>
      {isUser && !isLoading ? (
        <div className="isLogged">
          <img src={user.picture} alt={user.given_name} />
          <div>
            <p>
              Hi,{" "}
              <strong>
                {user.given_name ? user.given_name : user.name.split(" ")[0]}
              </strong>
            </p>
            <button onClick={logoutUser}>Log out</button>
          </div>
        </div>
      ) : isLoading ? (
        <div className="isLogged">
          <img src={spinnerImg} alt="spinner" />
        </div>
      ) : (
        <>
          <VscAccount />
          <button onClick={loginWithRedirect}>Log in</button>
        </>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 20%;
  height: 100%;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2rem;
  color: var(--primary-grey-clr);

  svg {
    font-size: 1.6rem;
    margin-right: 0.5rem;
    transition: all 0.2s linear;
    color: var(--primary-grey-clr);

    &:hover + button {
      color: var(--primary-white-clr);
    }
  }

  button {
    font-size: 1.2rem;
    border: none;
    color: var(--primary-grey-clr);
    background-color: transparent;
    transition: all 0.2s linear;
    cursor: pointer;

    &:hover {
      color: var(--primary-white-clr);
    }
    &:active {
      transform: scale(0.8);
    }
  }

  .isLogged {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 45px;
      height: 45px;
      margin-right: 0.5rem;
      color: transparent;
      border-radius: 50%;
      border: 1px solid var(--primary-grey-clr);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    div {
      position: relative;
      color: var(--primary-white-clr);
      button {
        font-size: 1rem;
        position: absolute;
        bottom: -1.5rem;
        right: 0;
      }
    }
  }
`;

export default LogIn;
