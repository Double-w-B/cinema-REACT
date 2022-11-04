import React from "react";
import styled from "styled-components";
import { VscAccount } from "react-icons/vsc";
import { useAuth0 } from "@auth0/auth0-react";
import spinnerImg from "../../../src/Images/spinner_2.gif";
import { useDispatch, useSelector } from "react-redux";
import * as userDataSlice from "../../features/user/userSlice";
const LogIn = () => {
  const dispatch = useDispatch();
  const { name: userName, avatar: userAvatar } = useSelector(
    (store) => store.userData
  );

  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } =
    useAuth0();
  const isUser = isAuthenticated && user;
  const [storedName, setStoredName] = React.useState("");
  const [storedAvatar, setStoredAvatar] = React.useState("");
  const [userData, setUserData] = React.useState("");

  React.useEffect(() => {
    setStoredName(userName);
    setStoredAvatar(userAvatar);
  }, [userName, userAvatar]);

  React.useEffect(() => {
    setUserData({
      name: user?.given_name ? user.given_name : user?.name.split(" ")[0],
      email: user?.email,
      avatar: user?.picture,
      id: user?.sub.split("|")[1],
    });
  }, [isAuthenticated, user]);

  React.useEffect(() => {
    dispatch(
      userDataSlice.changeName(
        user?.given_name ? user.given_name : user?.name.split(" ")[0]
      )
    );
    dispatch(userDataSlice.changeEmail(user?.email));
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const checkAvatar = () => {
    if (storedAvatar) {
      return storedAvatar;
    }
    return user.picture;
  };

  const checkName = () => {
    if (storedName) {
      return storedName;
    }
    if (user.given_name) {
      return user.given_name;
    } else {
      return user.name.split(" ")[0];
    }
  };

  const logoutUser = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleLogOut = () => {
    logoutUser();
    localStorage.removeItem("userReviews");
    localStorage.removeItem("userData");
  };

  return (
    <StyledContainer>
      {isUser && !isLoading ? (
        <div className="isLogged">
          <img src={checkAvatar()} alt="" />
          <div>
            <p>
              Hi, <strong>{checkName()}</strong>
            </p>
            <button onClick={handleLogOut}>Log out</button>
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
