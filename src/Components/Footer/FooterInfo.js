import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterInfo = () => {
  return (
    <StyledSectionInfo>
      <Link to="/about">about</Link>
      <Link to="/contact_us">contact us</Link>
      <Link to="help/faq">FAQ</Link>
      <Link to="/unlimited">unlimited</Link>
      <Link to="/cinema_cafe">cinema cafe</Link>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fb">facebook</span>
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="ig">instagram</span>
      </a>
    </StyledSectionInfo>
  );
};
const StyledSectionInfo = styled.section`
  width: 80%;
  height: 30%;
  margin: 0 auto;
  //   background-color: green;
//   opacity: 0.7;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  a {
    color: inherit;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: capitalize;
    transition: all 0.3s linear;

    .fb {
        color: #3b5998;
    }

    .ig {
      background: -webkit-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:hover {
      color: #fff;
    }
  }
`;
export default FooterInfo;
