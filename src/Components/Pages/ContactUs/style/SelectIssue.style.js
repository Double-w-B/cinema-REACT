import styled from "styled-components";
import sortIco from "../../../../assets/sort-down.svg";

export const Select = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  opacity: 1;
  cursor: pointer;
  display: block;
  padding-left: 0.5rem;
  font-size: 1.2rem;
  border: none;
  outline: none;
  border-radius: 2px;
  background-color: #fff;
  background-image: url(${sortIco}),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e55d 100%);
  background-repeat: no-repeat;
  background-position: right 0.7em top 5%, 0 0;
  background-size: 1.1em auto, 100%;
  transition: 0.25s linear;

  & + label {
    opacity: 1;
  }
  option {
    font-family: "Exo", sans-serif;
    cursor: pointer;
  }

  &:active {
    background-size: 0.9em auto, 100%;
  }

  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.15rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
