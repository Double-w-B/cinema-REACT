import React from "react";
import styled, { keyframes, css } from "styled-components";
import errorImg from "../../../Images/error.webp";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
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
    <StyledContainer className="no-select">
      <div>
        <img src={errorImg} alt="" draggable="false" />
        <p>Sorry, this page isn't available.</p>

        <p>... redirect after {seconds} sec</p>
      </div>
    </StyledContainer>
  );
};

const scale = keyframes`
  0% {
        transform: scale(1.0);
        color: var(--primary-white-clr);

    }
    50%{
        transform: scale(1.05);
        color: var(--primary-red-clr);
    }
    100% {
        transform: scale(1.0);
        color: var(--primary-white-clr);
    }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 48vh;
  display: grid;
  place-items: center;
  color: var(--primary-white-clr);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 150px;
      height: 150px;
      margin-bottom: 1rem;
      -webkit-filter: drop-shadow(0px 0px 5px black);
      filter: drop-shadow(0px 0px 5px black);
      animation: ${css`
        ${scale} 1.2s infinite linear
      `};
    }
    p {
      font-size: 1.2rem;

      &:last-child {
        margin-top: 1rem;
        font-style: italic;
        color: var(--primary-grey-clr);
      }
    }
  }
`;

export default ErrorPage;
