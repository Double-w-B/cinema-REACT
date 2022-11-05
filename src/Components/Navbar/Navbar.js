import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../../Images/Logo.png";
import Links from "./Links";
import LogIn from "./LogIn";

const Navbar = (props) => {
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <Link to="/">
          <img src={logoImg} alt="Logo" />
        </Link>
      </StyledLogoContainer>
      <Links {...props} />
      <LogIn />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 12vh;
  min-height: 90px;
  display: flex;
  align-items: center;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledLogoContainer = styled.div`
  width: 20%;
  height: 100%;
  padding-right: 2rem;
  display: grid;
  align-content: center;
  justify-items: end;

  a {
    width: 80px;
    height: 100%;
    display: grid;
    place-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      transition: all 0.3s linear;
      color: transparent;
      filter: drop-shadow(0px 0px 10px #0a0f18);

      &:hover {
        transform: rotate(-15deg);
      }
    }
  }
`;

export default Navbar;
