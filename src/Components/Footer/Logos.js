import React from "react";
import StyledFooter from "./style";
import LogoImg1 from "../../assets/TechLogo1.webp";
import LogoImg2 from "../../assets/TechLogo2.webp";
import LogoImg3 from "../../assets/TechLogo3.webp";
import LogoImg4 from "../../assets/TechLogo4.webp";

const Logos = () => {
  return (
    <StyledFooter.Logos>
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
    </StyledFooter.Logos>
  );
};

export default Logos;
