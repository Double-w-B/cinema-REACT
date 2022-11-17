import React from "react";
import StyledNavbar from "./style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/Logo.png";
import * as Component from "./index";

const Navbar = (props) => {
  return (
    <StyledNavbar>
      <StyledNavbar.Logo>
        <Link to="/">
          <img src={logoImg} alt="Logo" />
        </Link>
      </StyledNavbar.Logo>
      <Component.Nav {...props} />
      <Component.LogIn />
    </StyledNavbar>
  );
};

export default Navbar;
