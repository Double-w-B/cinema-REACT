import React from "react";
import StyledFooter from "./style";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <StyledFooter.Info>
      <Link to="/about">about</Link>
      <Link to="/contact_us">contact us</Link>
      <Link to="help/faq">FAQ</Link>
      <Link to="/unlimited">unlimited</Link>
      <Link to="/cinema_cafe">cinema cafe</Link>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <span className="fb">facebook</span>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <span className="ig">instagram</span>
      </a>
    </StyledFooter.Info>
  );
};

export default Info;
