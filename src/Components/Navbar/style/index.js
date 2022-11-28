import styled from "styled-components";
import { Logo } from "./Logo.style";
import { LogIn } from "./LogIn.style";
import { Nav } from "./Nav.style";

const StyledNavbar = styled.header`
  height: 12vh;
  display: flex;
  align-items: center;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.3s linear;

  @media screen and (max-width: 1100px) {
    height: 10vh;
    min-height: 10vh;

    justify-content: space-between;
  }
`;

StyledNavbar.Logo = Logo;
StyledNavbar.LogIn = LogIn;
StyledNavbar.Nav = Nav;

export default StyledNavbar;
