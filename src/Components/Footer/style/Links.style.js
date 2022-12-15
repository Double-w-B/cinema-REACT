import styled from "styled-components";

export const Links = styled.section`
  width: 80%;
  height: 30%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  a {
    color: inherit;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: capitalize;
    transition: all 0.3s linear;

    .fb {
      color: #3b5998;
    }

    .ig {
      background: -webkit-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:hover {
      color: #fff;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 900px) {
    width: 95%;
    a {
      margin: 0 1rem;
    }
  }

  @media screen and (max-width: 830px) {
    height: 20%;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (max-width: 600px) {
    height: 30%;
    justify-content: flex-start;

    a {
      align-self: flex-start;
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 500px) {
    a {
      font-size: 1rem;
    }
  }
`;
