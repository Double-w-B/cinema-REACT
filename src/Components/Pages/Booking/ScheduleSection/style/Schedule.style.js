import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Section = styled.section`
  width: 65%;
  height: 60vh;
  padding-left: 2rem;
  transition: 0.3s linear;

  @media screen and (max-width: 1000px) {
    width: 70%;
    padding-left: 0.5rem;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0 1rem;
  }

  @media screen and (max-width: 650px) {
    padding: 0;
  }
`;
