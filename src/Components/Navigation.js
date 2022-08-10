import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = ({ title, pageTitle }) => {
  const pathName = (pt) => {
    return `/${pt.slice(0, 1).toLowerCase()}${pt.replace(" ", "").slice(1)}`;
  };

  return (
    <StyledNavigation>
      <p>
        <Link to="/">Home</Link>
        {title && pageTitle ? (
          <Link to={pathName(pageTitle)}>{` > ${pageTitle}`}</Link>
        ) : (
          pageTitle && ` > ${pageTitle}`
        )}
        {`${title ? ` > ${title}` : ""}`}
      </p>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.nav`
  width: 100%;
  margin-bottom: 2rem;
  color: #fff;

  a {
    color: #fff;
  }

  p {
    color: #f12535;
    cursor: default;
  }
`;

export default Navigation;
