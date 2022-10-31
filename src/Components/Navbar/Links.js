import React from "react";
import styled from "styled-components";
import { navbarLinks } from "../../data";
import { Link, useLocation } from "react-router-dom";

const Links = (props) => {
  const location = useLocation();

  const handleClick = () => {
    const timeout = setTimeout(() => {
      props.nowPlayingContainer.current.scrollIntoView({ behavior: "smooth" });
    }, 400);
    return () => clearTimeout(timeout);
  };

  const activeLink = (path) => {
    if (
      (path !== "/" && location.pathname.slice(0, path.length) === path) ||
      (path === "/" && location.pathname.slice(0, 11) === "/nowPlaying")
    )
      return "var(--primary-red-clr)";
    else return "#fff";
  };

  return (
    <StyledNav>
      <ul>
        {navbarLinks.map((link, index) => {
          const { title, path } = link;
          return (
            <li key={index}>
              <Link
                to={path}
                onClick={path === "/" && handleClick}
                style={{
                  color: activeLink(path),
                }}
              >
                {title}
              </Link>
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

      a {
        font-size: 1.1rem;
        color: var(--primary-white-clr);
        letter-spacing: 0.5px;
        transition: all 0.1s linear;

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
