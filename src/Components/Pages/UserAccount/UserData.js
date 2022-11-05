import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

const UserData = () => {
  const {
    name: userName,
    email: userEmail,
    avatar: userAvatar,
  } = useSelector((store) => store.userData);

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
    <StyledContainer>
      <StyledImageContainer
        email={user?.email}
        storedAvatar={storedAvatar}
        storedEmail={storedEmail}
      >
        <div className="img">
          <img src={checkAvatar()} alt="" />
        </div>
      </StyledImageContainer>
      <StyledDataContainer>
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
          <p>0</p>
        </div>
      </StyledDataContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 20vh;
  display: flex;
  margin-bottom: 1rem;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledImageContainer = styled.div`
  width: 25%;
  height: 100%;
  display: grid;
  place-items: center;

  .img {
    width: 120px;
    height: 120px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 2px solid var(--primary-grey-clr);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      color: transparent;
      transform: ${(props) =>
        props.email?.split("@")[1].slice(0, 5) === "gmail" &&
        !props.storedAvatar &&
        "translateY(-1.5px)"};
      border-radius: 50%;
    }
  }
`;

const StyledDataContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  padding: 1rem 0;

  p {
    font-size: 1.2rem;
  }

  .structure,
  .user-data {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      color: var(--primary-grey-clr);
    }
  }
  .structure {
    margin-right: 1.2rem;
  }
  .user-data {
    p {
      color: var(--primary-white-clr);

      &.empty {
        color: var(--primary-grey-clr);
        font-style: italic;
      }
    }
  }
`;

export default UserData;
