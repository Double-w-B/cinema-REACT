import styled from "styled-components";

export const TimeContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    text-align: center;
    margin: 0 auto;
  }
`;

export const Screenings = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    width: calc(100% / 5);
    height: 80px;
    width: 80px;
    display: grid;
    place-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 0.3rem;
    color: var(--primary-grey-clr);
    border: 1px solid var(--primary-grey-clr);
    transition: 0.3s linear;
    cursor: pointer;
    opacity: 0.65;

    &:hover {
      opacity: 1;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
    }

    &.active {
      color: var(--primary-white-clr);
      border: 1px solid var(--primary-white-clr);
      box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 15px;
      opacity: 1;
    }

    &.inactive {
      opacity: 0.4;
      pointer-events: none;
    }
  }
`;
