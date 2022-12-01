import React from "react";
import StyledFooter from "./style";
import * as Component from "./index";

const Footer = () => {
  return (
    <StyledFooter>
      <Component.Links />
      <Component.Logos />
      <Component.Copyright />
    </StyledFooter>
  );
};

export default Footer;
