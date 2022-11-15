import React from "react";
import StyledError from "./style/Error.style";
import errorImg from "../../Images/error.webp";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const [seconds, setSeconds] = React.useState(5);

  const navigate = useNavigate();

  React.useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 1) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
        navigate("/");
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <StyledError className="no-select">
      <div>
        <img src={errorImg} alt="" draggable="false" />
        <p>Sorry, this page isn't available.</p>

        <p>... redirect after {seconds} sec</p>
      </div>
    </StyledError>
  );
};

export default Error;
