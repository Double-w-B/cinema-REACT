import styled from "styled-components";

export const SharedArrowContainer = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  color: #f12535;
  cursor: pointer;
  display: grid;
  place-items: center;
  background-color: rgba(43, 52, 68, 0.2);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1;

  &.upComing {
    background-color: rgba(43, 52, 68, 0.2);
  }

  &.left {
    left: 1rem;

    &.upComing {
      left: 0;
    }

    &:hover {
      transform: translate(-0.1rem, -50%);
    }
  }

  &.right {
    right: 1rem;

    &.upComing {
      right: 0;
    }

    &:hover {
      transform: translate(0.1rem, -50%);
    }
  }
`;
