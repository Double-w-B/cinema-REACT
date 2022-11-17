import React from "react";
import StyledAccountSections from "./style";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import * as userDataSlice from "../../../../redux/features/user/userSlice";

const DataSection = () => {
  const dispatch = useDispatch();
  const {
    name: storedName,
    email: storedEmail,
    avatar: storedAvatar,
  } = useSelector((store) => store.userData);
  const emailCheckRexExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const checkName = () => {
    if (storedName) return storedName;
    if (given_name) {
      return given_name;
    } else {
      return name.split(" ")[0];
    }
  };

  const checkEmail = () => {
    if (storedEmail) return storedEmail;
    if (email) {
      return email;
    } else {
      return "";
    }
  };

  const { user } = useAuth0();
  const { given_name, name, email } = user;

  const [userName, setUserName] = React.useState(checkName());
  const [userEmail, setUserEmail] = React.useState(checkEmail());
  const [userAvatar, setUserAvatar] = React.useState(storedAvatar || "");
  const [imageName, setImageName] = React.useState("No image selected");
  const [isEmailError, setIsEmailError] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsEmailError(false);
    }, 350);
    return () => clearInterval(timer);
  }, [isEmailError]);

  const handleNameChange = () => {
    if (userName.length < 1) return;

    dispatch(userDataSlice.changeName(userName));
  };

  const handleEmailChange = () => {
    if (userEmail.length > 0 && !userEmail.match(emailCheckRexExp)) {
      setIsEmailError(true);
      return;
    }

    dispatch(userDataSlice.changeEmail(userEmail));
  };

  const handleAvatarChange = () => {
    if (!userAvatar) return;

    dispatch(userDataSlice.changeAvatar(userAvatar));

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
    <StyledAccountSections.DataSection emailError={isEmailError}>
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
            <StyledAccountSections.DataButton
              onClick={index === 0 ? handleNameChange : handleEmailChange}
            >
              Change
            </StyledAccountSections.DataButton>
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

        <StyledAccountSections.DataButton onClick={handleAvatarChange}>
          Change
        </StyledAccountSections.DataButton>
      </div>
    </StyledAccountSections.DataSection>
  );
};

export default DataSection;
