import React from "react";
import StyledUserAccount from "./style";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const UserData = () => {
  const {
    name: userName,
    email: userEmail,
    avatar: userAvatar,
    orders,
  } = useSelector((store) => store.userData);
  const storedData = JSON.parse(sessionStorage.getItem("bookings"));
  const userOrders = storedData || orders;

  const { user } = useAuth0();
  const { email, picture, given_name, name, sub: id } = user;
  const [storedName, setStoredName] = React.useState("");
  const [storedEmail, setStoredEmail] = React.useState("");
  const [storedAvatar, setStoredAvatar] = React.useState("");

  React.useEffect(() => {
    setStoredName(userName);
    setStoredEmail(userEmail);
    setStoredAvatar(userAvatar);
  }, [userName, userEmail, userAvatar]);

  const checkAvatar = () => {
    if (storedAvatar) {
      return storedAvatar;
    }
    return picture;
  };

  const checkName = () => {
    if (storedName) return storedName;
    if (given_name) {
      return given_name;
    } else {
      return name.split(" ")[0];
    }
  };

  const checkEmail = () => {
    const emailCheckRexExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (storedEmail && storedEmail.match(emailCheckRexExp)) return storedEmail;
    if (!storedEmail) return "no email";
    if (email) {
      return email;
    } else {
      return "no email";
    }
  };
  const setEmailClass = () => {
    if ((!email || email) && !storedEmail) return "empty";
    return "";
  };

  return (
    <StyledUserAccount.UserData>
      <StyledUserAccount.ImgContainer
        email={user?.email}
        storedAvatar={storedAvatar}
        storedEmail={storedEmail}
      >
        <div className="img">
          <img src={checkAvatar()} alt="avatar" />
        </div>
      </StyledUserAccount.ImgContainer>
      <StyledUserAccount.DataContainer>
        <div className="structure no-select">
          <p>Name:</p>
          <p>Email:</p>
          <p>User id:</p>
          <p>Orders:</p>
        </div>
        <div className="user-data">
          <p>{checkName()}</p>
          <p className={setEmailClass()}>{checkEmail()}</p>
          <p>{id.split("|")[1]}</p>
          <p>{userOrders.length}</p>
        </div>
      </StyledUserAccount.DataContainer>
    </StyledUserAccount.UserData>
  );
};

export default UserData;
