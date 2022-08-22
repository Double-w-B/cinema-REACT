import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../../Images/Logo.png";
import { VscAccount } from "react-icons/vsc";
import { navbarLinks } from "../../data";

const Navbar = (props) => {
  const location = useLocation();

  const handleClick = () => {
    setTimeout(() => {
      props.nowPlayingContainer.current.scrollIntoView({ behavior: "smooth" });
    }, 400);
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
    <header>
      <StyledLogoContainer>
        <Link to="/">
          <img src={logoImg} alt="Logo" />
        </Link>
      </StyledLogoContainer>
      <StyledNavContainer location={location}>
        <nav>
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
        </nav>
      </StyledNavContainer>
      <StyledLogInContainer>
        <VscAccount /> <p>Log in</p>
      </StyledLogInContainer>
    </header>
  );
};

const StyledLogoContainer = styled.div`
  width: 15%;
  height: 100%;
  display: grid;
  align-content: center;
  justify-items: end;

  a {
    width: 40%;
    height: 100%;
    display: grid;
    place-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: all 0.3s linear;
      color: transparent;

      &:hover {
        transform: rotate(-15deg);
      }
    }
  }
`;

const StyledLogInContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2rem;
  color: #fff;

  *:first-child {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }

  p {
    transition: all 0.2s linear;
    &:hover {
      cursor: pointer;
      color: #f12535;
    }
  }
`;

const StyledNavContainer = styled.div`
  width: 85%;
  height: 100%;
  display: grid;
  place-items: center;
  color: #fff;

  nav {
    width: 80%;
    height: 90%;

    ul {
      padding: 1.5rem;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);

      li {
        border: none;
        border-left: 1px solid #fff;
        text-transform: capitalize;
        display: grid;
        place-items: center;
        font-weight: 500;
        transition: 0.3s linear;

        a {
          font-size: 1.1rem;
          color: #fff;
          letter-spacing: 0.5px;
          transition: all 0.1s linear;

          &:hover {
            color: #f12535 !important;
          }
        }

        &:last-child {
          border-right: 1px solid #fff;
        }
      }
    }
  }
`;
export default Navbar;
