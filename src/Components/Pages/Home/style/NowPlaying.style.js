import styled from "styled-components";

export const NowPlaying = styled.section`
  width: 90%;
  margin: 2rem auto;

  h1 {
    letter-spacing: 1px;
    text-transform: capitalize;
    color: #fff;
  }

  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;
