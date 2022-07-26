import styled from "styled-components";
import * as Shared from "../../../style/shared/SharedKeyframes.style";

export const Logos = styled.section`
  width: 60%;
  height: 40%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20px, 100px));
  align-items: center;
  justify-content: space-around;
  transition: 0.2s linear;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
    transition: all 0.2s linear;
    filter: contrast(0);
  }

  & div:nth-child(1) img {
    -webkit-animation: ${Shared.fade1} 7.5s infinite linear;
    -moz-animation: ${Shared.fade1} 7.5s infinite linear;
    -o-animation: ${Shared.fade1} 7.5s infinite linear;
    animation: ${Shared.fade1} 7.5s infinite linear;
  }
  & div:nth-child(2) img {
    -webkit-animation: ${Shared.fade2} 7.5s infinite linear;
    -moz-animation: ${Shared.fade2} 7.5s infinite linear;
    -o-animation: ${Shared.fade2} 7.5s infinite linear;
    animation: ${Shared.fade2} 7.5s infinite linear;
  }
  & div:nth-child(3) img {
    -webkit-animation: ${Shared.fade3} 7.5s infinite linear;
    -moz-animation: ${Shared.fade3} 7.5s infinite linear;
    -o-animation: ${Shared.fade3} 7.5s infinite linear;
    animation: ${Shared.fade3} 7.5s infinite linear;
  }
  & div:nth-child(4) img {
    -webkit-animation: ${Shared.fade4} 7.5s infinite linear;
    -moz-animation: ${Shared.fade4} 7.5s infinite linear;
    -o-animation: ${Shared.fade4} 7.5s infinite linear;
    animation: ${Shared.fade4} 7.5s infinite linear;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
    height: 50%;
    padding: 0.5rem 0;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(20px, 75px));
    padding: 1.5rem 0;
  }
`;
