import styled from "styled-components";
import { Logo } from "./Logo.style";
import { LogIn } from "./LogIn.style";
import { Nav } from "./Nav.style";

const StyledNavbar = styled.header`
  height: 12vh;
  min-height: 90px;
  display: flex;
  align-items: center;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

StyledNavbar.Logo = Logo;
StyledNavbar.LogIn = LogIn;
StyledNavbar.Nav = Nav;

export default StyledNavbar;
