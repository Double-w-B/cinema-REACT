import styled from "styled-components";

export const Logo = styled.div`
  width: 20%;
  height: 100%;
  padding-right: 2rem;
  display: grid;
  align-content: center;
  justify-items: end;
  transition: all 0.3s linear;

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
      filter: drop-shadow(0px 0px 10px #0a0f18);

      &:hover {
        transform: rotate(-15deg);
      }
    }
  }

  @media screen and (max-width: 1300px) {
    width: 15%;
  }

  @media screen and (max-width: 1200px) {
    width: 10%;
    margin-left: 1rem;
  }

  @media screen and (max-width: 1100px) {
    width: 25%;
    margin-left: 0;
    padding-right: 0;
    width: 15%;
    a {
      width: 70px;
    }
  }

  @media screen and (max-width: 650px) {
    width: 20%;
  }
`;
