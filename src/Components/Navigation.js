import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = ({ title, pageTitle, booking }) => {
  const pathName = (pt) => {
    if (booking) {
      return `/nowPlaying/${pageTitle.split(" ").join("_")}`;
    }
    return `/${pt.slice(0, 1).toLowerCase()}${pt.replace(" ", "").slice(1)}`;
  };

  const setNavigationPath = () => {
    if (title && pageTitle) {
      return <Link to={pathName(pageTitle)}>{` > ${pageTitle}`}</Link>;
    } else {
      if (pageTitle) return ` > ${pageTitle}`;
    }
  };

  return (
    <StyledNavigation>
      <p>
        <Link to="/">Home</Link>
        {setNavigationPath()}
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
