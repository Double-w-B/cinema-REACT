import styled from "styled-components";
import { Info } from "./Info.style";
import { Logos } from "./Logos.style";
import { Copyright } from "./Copyright.style";

const StyledFooter = styled.footer`
  width: 100%;
  height: 40vh;
  padding-top: 1rem;
  background-color: #1c1c1c;
  border-top: 1px solid #999999;
  color: #999999;
`;

StyledFooter.Info = Info;
StyledFooter.Logos = Logos;
StyledFooter.Copyright = Copyright;

export default StyledFooter;
