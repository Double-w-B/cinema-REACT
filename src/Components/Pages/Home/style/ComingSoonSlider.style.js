import styled from "styled-components";

export const ComingSoonSlider = styled.section`
  width: 95%;
  height: 65vh;
  margin: 2rem auto;
  color: #fff;
  position: relative;
  h1 {
    text-transform: capitalize;
    letter-spacing: 1px;
  }
`;

export const Container = styled.div`
  width: 90%;
  height: 80%;
  padding: 1rem 0 0 0;
  margin: 0 auto;
  display: flex;
  gap: 16px;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  cursor: ${(props) => props.mouseActive && "grabbing"};

  &::-webkit-scrollbar {
    display: none;
  }
`;
