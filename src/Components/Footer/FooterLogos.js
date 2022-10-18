import React from "react";
import styled, { keyframes } from "styled-components";
import LogoImg1 from "../../Images/TechLogo1.webp";
import LogoImg2 from "../../Images/TechLogo2.webp";
import LogoImg3 from "../../Images/TechLogo3.webp";
import LogoImg4 from "../../Images/TechLogo4.webp";
const FooterLogos = () => {
  return (
    <StyledSectionLogos>
      <div>
        <img src={LogoImg1} alt="" draggable="false" />
      </div>
      <div>
        <img src={LogoImg2} alt="" draggable="false" />
      </div>
      <div>
        <img src={LogoImg3} alt="" draggable="false" />
      </div>
      <div>
        <img src={LogoImg4} alt="" draggable="false" />
      </div>
    </StyledSectionLogos>
  );
};

const fade1 = keyframes`
    0% {
      filter: contrast(100%);
    }

    25% {
      filter: contrast(0);
    }

    50% {
      filter: contrast(0);
    }

    75% {
      filter: contrast(0);
    }

    100% {
      filter: contrast(100%);
    }
    `;

const fade2 = keyframes`
    0% {
      filter: contrast(0);
    }

    25% {
        filter: contrast(100%);
    }

    50% {
      filter: contrast(0);
    }

    75% {
      filter: contrast(0);
    }

    100% {
      filter: contrast(0);
    }`;

const fade3 = keyframes`
    0% {
      filter: contrast(0);
    }

    25% {
        filter: contrast(0);
    }

    50% {
        filter: contrast(100%);
    }

    75% {
      filter: contrast(0);
    }

    100% {
      filter: contrast(0);
    }`;

const fade4 = keyframes`
    0% {
      filter: contrast(0);
    }

    25% {
        filter: contrast(0);
    }

    50% {
        filter: contrast(0);
    }

    75% {
        filter: contrast(100%);
    }

    100% {
      filter: contrast(0);
    }`;

const StyledSectionLogos = styled.section`
  width: 60%;
  height: 40%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20px, 100px));
  align-items: center;
  justify-content: space-around;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
    transition: all 0.2s linear;
    filter: contrast(0);
  }

  & div:nth-child(1) img {
    -webkit-animation: ${fade1} 7.5s infinite linear;
    -moz-animation: ${fade1} 7.5s infinite linear;
    -o-animation: ${fade1} 7.5s infinite linear;
    animation: ${fade1} 7.5s infinite linear;
  }
  & div:nth-child(2) img {
    -webkit-animation: ${fade2} 7.5s infinite linear;
    -moz-animation: ${fade2} 7.5s infinite linear;
    -o-animation: ${fade2} 7.5s infinite linear;
    animation: ${fade2} 7.5s infinite linear;
  }
  & div:nth-child(3) img {
    -webkit-animation: ${fade3} 7.5s infinite linear;
    -moz-animation: ${fade3} 7.5s infinite linear;
    -o-animation: ${fade3} 7.5s infinite linear;
    animation: ${fade3} 7.5s infinite linear;
  }
  & div:nth-child(4) img {
    -webkit-animation: ${fade4} 7.5s infinite linear;
    -moz-animation: ${fade4} 7.5s infinite linear;
    -o-animation: ${fade4} 7.5s infinite linear;
    animation: ${fade4} 7.5s infinite linear;
  }
`;

export default FooterLogos;
