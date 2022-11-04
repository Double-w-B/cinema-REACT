import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledButton } from "../../../Sliders/MoviesNowPlayingSlider";
import { useDispatch } from "react-redux";
import * as userDataSlice from "../../../../features/user/userSlice";
import { shake } from "../../Booking/Summary/SummaryPayment";

const DataSection = () => {
  const dispatch = useDispatch();
  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  const emailCheckRexExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const checkName = () => {
    if (storedUserData) return storedUserData.name;
    if (given_name) {
      return given_name;
    } else {
      return name.split(" ")[0];
    }
  };

  const checkEmail = () => {
    if (storedUserData) return storedUserData.email;
    if (email) {
      return email;
    } else {
      return "";
    }
  };

  const { user } = useAuth0();
  const { given_name, name, email, sub: id } = user;

  const [userData, setUserData] = React.useState("");
  const [userName, setUserName] = React.useState(checkName());
  const [userEmail, setUserEmail] = React.useState(checkEmail());
  const [userAvatar, setUserAvatar] = React.useState(
    storedUserData?.avatar || ""
  );
  const [imageName, setImageName] = React.useState("No image selected");
  const [isEmailError, setIsEmailError] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsEmailError(false);
    }, 350);
    return () => clearInterval(timer);
  }, [isEmailError]);

  React.useEffect(() => {
    setUserData({
      name: userName,
      email: userEmail,
      avatar: userAvatar,
      id: id.split("|")[1],
    });
  }, [userName, userEmail, userAvatar, id]);

  const handleNameChange = () => {
    if (userName.length < 1) return;

    dispatch(userDataSlice.changeName(userName));
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const handleEmailChange = () => {
    if (userEmail.length > 0 && !userEmail.match(emailCheckRexExp)) {
      setIsEmailError(true);
      return;
    }

    dispatch(userDataSlice.changeEmail(userEmail));
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const handleAvatarChange = () => {
    if (!userAvatar) return;

    dispatch(userDataSlice.changeAvatar(userAvatar));
    localStorage.setItem("userData", JSON.stringify(userData));

    if (userAvatar) {
      setImageName("Image uploaded!");

      const timer = setTimeout(() => {
        setImageName("No image selected");
      }, 3500);

      return () => clearTimeout(timer);
    }
  };

  const loadNewAvatar = (e) => {
    const imageFile = e.target.files[0];

    const reader = new FileReader();
    const loadImage = (e) => setUserAvatar(e.target.result);
    reader.addEventListener("load", loadImage);
    reader.readAsDataURL(imageFile);
    setImageName(imageFile.name);
  };

  return (
    <StyledContainer emailError={isEmailError}>
      {new Array(2).fill("").map((_, index) => {
        return (
          <div key={index} className={index === 0 ? "name" : "email"}>
            <label className="">{index === 0 ? "NAME:" : "EMAIL:"}</label>
            <input
              type={index === 0 ? "text" : "email"}
              value={index === 0 ? userName : userEmail}
              onChange={(e) =>
                index === 0
                  ? setUserName(e.target.value)
                  : setUserEmail(e.target.value)
              }
            />
            <StyledBtn
              onClick={index === 0 ? handleNameChange : handleEmailChange}
            >
              Change
            </StyledBtn>
          </div>
        );
      })}

      <div className="avatar">
        <p>AVATAR:</p>
        <div className="upload">
          <label>
            Upload
            <input
              type="file"
              accept="image/*"
              onChange={(e) => loadNewAvatar(e)}
            />
          </label>
          <p>
            {imageName.length > 23
              ? `... ${imageName.split("").slice(-23).join("")}`
              : imageName}
          </p>
        </div>

        <StyledBtn onClick={handleAvatarChange}>Change</StyledBtn>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;

  .name,
  .email,
  .avatar {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: calc(100% / 3);

    label,
    p {
      min-width: 90px;
      font-size: 1.2rem;
      color: var(--primary-grey-clr);
    }

    input,
    .upload {
      height: 27px;
      width: 350px;
      max-width: 350px;
      padding: 0 0.5rem;
      border: none;
      outline: none;
      font-size: 1.25rem;
      border-radius: 2px;

      &[type="file"] {
        display: none;
      }
      &[type="email"] {
        -webkit-animation: ${(props) => props.emailError && shake};
        -moz-animation: ${(props) => props.emailError && shake};
        -o-animation: ${(props) => props.emailError && shake};
        animation: ${(props) => props.emailError && shake};
        animation-duration: 5.72s;
      }
    }

    .upload {
      position: relative;
      padding: 0;
      display: flex;

      label {
        display: block;
        text-align: center;
        height: 100%;
        min-width: 80px;
        max-width: 80px;
        transition: 0.3s linear;
        color: #fff;
        font-weight: bold;
        text-transform: capitalize;
        border: 1px solid #f12535;
        border-radius: 2px;
        cursor: pointer;
        opacity: 0.75;
        background-color: rgba(241, 37, 53, 0.3);

        &:hover {
          background-color: #f12535;
        }
        &:active {
          transform: scale(0.9);
        }
      }
      p {
        margin-left: 1rem;
        font-style: italic;
      }
    }
  }
`;

const StyledBtn = styled(StyledButton)`
  position: relative;
`;

export default DataSection;
