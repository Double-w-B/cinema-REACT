import React from "react";
import styled from "styled-components";
import spinner from "../../../Images/spinner_loading.gif";

const LoadingPage = () => {
  return (
    <StyledContainer>
      <img src={spinner} alt="" />
    </StyledContainer>
  );
};

const StyledContainer = styled.main`
  width: 100%;
  height: 48vh;
  display: grid;
  place-items: center;
`;

export default LoadingPage;
