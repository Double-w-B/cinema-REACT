import React from "react";
import StyledFooter from "./style";

const Copyright = () => {
  return (
    <StyledFooter.Copyright>
      <p>
        Copyright &copy; {new Date().getFullYear()} CineMania. All rights
        reserved.
      </p>
      <p>
        made by{" "}
        <a
          href="https://github.com/Double-w-B"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Władysław Balandin</span>
        </a>
      </p>
    </StyledFooter.Copyright>
  );
};

export default Copyright;
