import styled from "styled-components";
import { SharedKeyframes } from "../../../style/shared";

const StyledModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.65);
  -webkit-animation: ${SharedKeyframes.slideDown} 350ms ease-out forwards;
  -moz-animation: ${SharedKeyframes.slideDown} 350ms ease-out forwards;
  -o-animation: ${SharedKeyframes.slideDown} 350ms ease-out forwards;
  animation: ${SharedKeyframes.slideDown} 350ms ease-out forwards;
`;

export default StyledModalOverlay;
