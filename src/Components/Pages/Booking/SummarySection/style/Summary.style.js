import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  height: 30vh;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;

  .summary-img {
    width: 160px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      color: transparent;
      filter: drop-shadow(0px 5px 15px black);
    }
  }
`;
