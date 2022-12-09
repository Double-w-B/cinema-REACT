import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  height: 30vh;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  transition: 0.3s linear;

  .summary-img {
    width: 20%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      color: transparent;
      filter: drop-shadow(0px 5px 15px black);
    }
  }

  @media screen and (max-width: 1150px) {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    .summary-img {
      width: 200px;
    }
  }

  @media screen and (max-width: 900px) {
    .summary-img {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    height: 60vh;
    min-height: 50vh;
    margin: 1rem auto;
    flex-direction: column;
  }
`;
