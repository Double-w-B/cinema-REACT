import React from "react";
import styled from "styled-components";
import { navbarLinks } from "../../data";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Links = (props) => {
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
    <StyledNav className="no-select">
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
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 60%;
  height: 90%;
  display: grid;
  place-items: center;
  color: var(--primary-white-clr);

  ul {
    padding: 1.5rem;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    li {
      border: none;
      border-left: 1px solid var(--primary-white-clr);
      text-transform: capitalize;
      display: grid;
      place-items: center;
      font-weight: 500;
      transition: 0.3s linear;

      a,
      p {
        font-size: 1.1rem;
        color: var(--primary-white-clr);
        letter-spacing: 0.5px;
        transition: all 0.1s linear;
        cursor: pointer;

        &:hover {
          color: var(--primary-red-clr) !important;
        }
      }

      &:last-child {
        border-right: 1px solid var(--primary-white-clr);
      }
    }
  }
`;

export default Links;
