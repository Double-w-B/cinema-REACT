import React from "react";
import StyledFooter from "./style";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <StyledFooter.Links>
      <Link to="/about">about</Link>
      <Link to="help/faq">FAQ</Link>
      <Link to="/contact_us">contact us</Link>
      <Link to="/cinema_cafe">cinema cafe</Link>
      <Link to="/unlimited">unlimited</Link>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <span className="fb">facebook</span>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <span className="ig">instagram</span>
      </a>
    </StyledFooter.Links>
  );
};

export default Links;
