import React from "react";
import StyledNavigation from "./style/Navigation.style";
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

export default Navigation;
