import styled from "styled-components";
import { Links } from "./Links.style";
import { Logos } from "./Logos.style";
import { Copyright } from "./Copyright.style";

const StyledFooter = styled.footer`
  width: 100%;
  height: 40vh;
  padding-top: 1rem;
  background-color: #1c1c1c;
  border-top: 1px solid #999999;
  color: #999999;

  @media screen and (max-width: 900px) {
    height: 45vh;
  }
  @media screen and (max-width: 768px) {
    height: 50vh;
  }
  @media screen and (max-width: 500px) {
    height: 55vh;
  }
`;

StyledFooter.Links = Links;
StyledFooter.Logos = Logos;
StyledFooter.Copyright = Copyright;

export default StyledFooter;
