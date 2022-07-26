import React from "react";
import styled from "styled-components";
import FooterInfo from "./FooterInfo";
import FooterLogos from "./FooterLogos";
import FooterRights from "./FooterRights";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterInfo/>
        
      <FooterLogos/>
      <FooterRights/>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  height: 40vh;
  padding-top: 1rem;
  background-color: #1c1c1c;
  border-top: 1px solid #999999;
  color: #999999;
`;





export default Footer;
