import styled from "styled-components";

export const Logo = styled.div`
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
      filter: drop-shadow(0px 0px 10px #0a0f18);

      &:hover {
        transform: rotate(-15deg);
      }
    }
  }
`;
