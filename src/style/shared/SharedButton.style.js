import styled from "styled-components";

export const SharedButton = styled.button`
  color: #fff;
  position: absolute;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
  padding: 0.5rem;
  border: 1px solid #f12535;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s linear;
  opacity: 0.75;
  background-color: rgba(241, 37, 53, 0.3);

  &:hover {
    background-color: #f12535;
  }

  &.btn-slider {
    bottom: 1rem;
    right: 1rem;
    &:active {
      transform: scale(0.9);
    }
  }
`;
