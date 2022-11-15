import React from "react";
import StyledNavbar from "./style";
import { navbarLinks } from "../../data";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = (props) => {
  const location = useLocation();

  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  const { setIsModal, setIsAuthModal } = props;

  const handleClick = () => {
    const timeout = setTimeout(() => {
      props.nowPlayingContainer.current.scrollIntoView({ behavior: "smooth" });
    }, 400);
    return () => clearTimeout(timeout);
  };

  const handleAccountClick = () => {
    setIsModal(true);
    setIsAuthModal(true);
  };

  const activeLink = (path) => {
    if (
      (path !== "/" && location.pathname.slice(0, path.length) === path) ||
      (path === "/" && location.pathname.slice(0, 11) === "/nowPlaying")
    )
      return "var(--primary-red-clr)";
    else return "#fff";
  };

  const myAccountLink = (path, title) => {
    if (isUser) {
      return (
        <Link
          to={path}
          style={{
            color: activeLink(path),
          }}
        >
          {title}
        </Link>
      );
    } else {
      return <p onClick={handleAccountClick}>{title}</p>;
    }
  };

  return (
    <StyledNavbar.Nav className="no-select">
      <ul>
        {navbarLinks.map((link, index) => {
          const { title, path } = link;
          return (
            <li key={index}>
              {path !== "/myAccount" ? (
                <Link
                  to={path}
                  onClick={path === "/" && handleClick}
                  style={{
                    color: activeLink(path),
                  }}
                >
                  {title}
                </Link>
              ) : (
                myAccountLink(path, title)
              )}
            </li>
          );
        })}
      </ul>
    </StyledNavbar.Nav>
  );
};

export default Nav;
