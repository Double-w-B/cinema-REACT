import styled from "styled-components";

export const Copyright = styled.section`
  width: 100%;
  height: 30%;
  padding: 0.2rem;
  font-size: 0.9rem;
  display: grid;
  place-items: center;

  a {
    color: #fff;
  }

  @media screen and (max-width: 900px) {
    height: 20%;
  }
`;
