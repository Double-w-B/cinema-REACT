import React from 'react'
import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";

const Navigation = (props) => {
  const location = useLocation();

  const [path, setPath] = React.useState("");
  const [pathName, setPathName] = React.useState("");

  React.useEffect(() => {
    if (location.pathname.slice(1, 4) === "now") {
      setPath("/nowPlaying");
      setPathName("Now Playing");
    } else {
      setPath("/comingSoon");
      setPathName("Coming Soon");
    }
  }, [location.pathname]);

  return (
    <StyledNavigation>
      <p>
        <Link to="/">Home &gt;</Link> <Link to={path}>{`${pathName} >`}</Link>{" "}
        {`${props.title ? props.title : ""}`}
      </p>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  color: #fff;
  a {
    color: #fff;
  }
  p {
    color: #f12535;
  }
`;

export default Navigation;