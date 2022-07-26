import React from "react";
import StyledNavbar from "./style";
import { HiMenuAlt3 } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import spinnerImg from "../../../src/assets/spinner_2.gif";
import * as userSlice from "../../redux/features/user/userSlice";
import * as modalsSlice from "../../redux/features/modals/modalsSlice";

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
      userSlice.changeName(
        user?.given_name ? user.given_name : user?.name.split(" ")[0]
      )
    );
    dispatch(userSlice.changeEmail(user?.email));
    // eslint-disable-next-line
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
  };

  const handleMenuClick = () => {
    dispatch(modalsSlice.handleIsModal(true));
    dispatch(modalsSlice.handleIsMenuModal(true));
  };

  return (
    <StyledNavbar.LogIn
      email={user?.email}
      avatar={userAvatar}
      className="no-select"
      isUser={isUser}
    >
      {isUser && !isLoading ? (
        <div className="isLogged">
          <div className="avatar">
            <img src={checkAvatar()} alt="" draggable="false" />
          </div>
          <div className="user">
            <p>
              Hi,{" "}
              <strong
                style={{ fontSize: `${checkName().length > 13 && "0.9rem"}` }}
              >
                {checkName()}
              </strong>
            </p>
            <button onClick={handleLogOut}>Log out</button>
          </div>
        </div>
      ) : isLoading ? (
        <div className="isLogged">
          <div className="avatar">
            <img src={spinnerImg} alt="" />
          </div>
        </div>
      ) : (
        <>
          <VscAccount />
          <button onClick={loginWithRedirect}>Log in</button>
        </>
      )}

      <p className="menu">
        Menu <HiMenuAlt3 onClick={handleMenuClick} />
      </p>
    </StyledNavbar.LogIn>
  );
};

export default LogIn;
