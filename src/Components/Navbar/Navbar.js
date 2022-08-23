import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../../Images/Logo.png";
import { VscAccount } from "react-icons/vsc";
import { navbarLinks } from "../../data";
import { useAuth0 } from "@auth0/auth0-react";
import spinnerImg from "../../../src/Images/spinner_2.gif";

const Navbar = (props) => {
  const location = useLocation();
  const {
    loginWithRedirect,
    isAuthenticated,
    logout,
    user,
    isLoading,
  } = useAuth0();

  const isUser = isAuthenticated && user;

  const handleClick = () => {
    setTimeout(() => {
      props.nowPlayingContainer.current.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };
  const logoutUser = () => {
    logout({ returnTo: window.location.origin });
  };

  const activeLink = (path) => {
    if (
      (path !== "/" && location.pathname.slice(0, path.length) === path) ||
      (path === "/" && location.pathname.slice(0, 11) === "/nowPlaying")
    )
      return "var(--primary-red-clr)";
    else return "#fff";
  };

  console.log({ isAuthenticated, user, isLoading });
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
        {isUser && !isLoading ? (
          <div className="isLogged">
            <img src={user.picture} alt={user.given_name} />
            <div>
              <p>
                Hi,{" "}
                <strong>
                  {user.given_name ? user.given_name : user.name.split(" ")[0]}
                </strong>
              </p>
              <button onClick={logoutUser}>Log out</button>
            </div>
          </div>
        ) : isLoading ? (
          <div className="isLogged">
            <img src={spinnerImg} alt="spinner" />
          </div>
        ) : (
          <>
            <VscAccount />
            <button onClick={loginWithRedirect}>Log in</button>
          </>
        )}
      </StyledLogInContainer>
    </header>
  );
};

const StyledLogoContainer = styled.div`
  width: 20%;
  height: 100%;
  padding-right: 2rem;
  display: grid;
  align-content: center;
  justify-items: end;

  a {
    width: 80px;
    height: 100%;
    display: grid;
    place-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      transition: all 0.3s linear;
      color: transparent;

      &:hover {
        transform: rotate(-15deg);
      }
    }
  }
`;

const StyledLogInContainer = styled.div`
  width: 20%;
  height: 100%;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2rem;
  color: var(--primary-grey-clr);

  svg {
    font-size: 1.6rem;
    margin-right: 0.5rem;
    transition: all 0.2s linear;
    color: var(--primary-grey-clr);

    &:hover + button {
      color: var(--primary-white-clr);
    }
  }

  button {
    font-size: 1.2rem;
    border: none;
    color: var(--primary-grey-clr);
    background-color: transparent;
    transition: all 0.2s linear;
    cursor: pointer;

    &:hover {
      color: var(--primary-white-clr);
    }
    &:active {
      transform: scale(0.8);
    }
  }

  .isLogged {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 45px;
      height: 45px;
      margin-right: 0.5rem;
      color: transparent;
      border-radius: 50%;
      border: 1px solid var(--primary-grey-clr);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    div {
      position: relative;
      color: var(--primary-white-clr);
      button {
        font-size: 1rem;
        position: absolute;
        bottom: -1.5rem;
        right: 0;
      }
    }
  }
`;

const StyledNavContainer = styled.div`
  width: 60%;
  height: 100%;
  display: grid;
  place-items: center;
  color: var(--primary-white-clr);

  nav {
    width: 100%;
    height: 90%;

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
  }
`;
export default Navbar;
