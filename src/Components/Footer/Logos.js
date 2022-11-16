import React from "react";
import StyledFooter from "./style";
import LogoImg1 from "../../Images/TechLogo1.webp";
import LogoImg2 from "../../Images/TechLogo2.webp";
import LogoImg3 from "../../Images/TechLogo3.webp";
import LogoImg4 from "../../Images/TechLogo4.webp";

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
