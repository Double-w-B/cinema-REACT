import React from 'react'
import styled from 'styled-components';
const FooterRights = () => {
  return (
    <StyledSectionRights>
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
    </StyledSectionRights>
  );
}


const StyledSectionRights = styled.section`
  width: 100%;
  height: 30%;
  padding: 0.2rem;
  font-size: 0.9rem;
  display: grid;
  place-items: center;

  //   background-color: green;
  //   opacity: 0.3;
  
a{
    color: #fff;
}

`;
export default FooterRights