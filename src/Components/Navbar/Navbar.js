import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../../Images/Logo.png";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <header>
      <StyledLogoContainer>
        <Link to="/">
          <img src={logoImg} alt="Logo" />
        </Link>
      </StyledLogoContainer>
      <StyledNavContainer>
        <nav>
          <ul>
            <li>
              <Link to="/playingNow">playing now</Link>
            </li>
            <li>
              <Link to="/comingSoon">coming soon</Link>
            </li>
            <li>
              <Link to="/unlimited">unlimited</Link>
            </li>
            <li>
              <Link to="/giftCard">gift cards</Link>
            </li>
            <li>
              <Link to="/cinemaBar">cinema bar</Link>
            </li>
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
        border: 1px solid #fff;
        text-transform: capitalize;
        display: grid;
        place-items: center;
        border-right: none;
        border-top: none;
        border-bottom: none;
        font-weight: 500;

        a {
          font-size: 1.1rem;
          color: #fff;
          letter-spacing: 0.5px;
          transition: all 0.1s linear;
        }

        &:last-child {
          border-right: 1px solid #fff;
        }

        &:hover a {
          color: #f12535;
        }
      }
    }
  }
`;
export default Navbar;
