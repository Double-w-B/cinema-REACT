import styled, { css } from "styled-components";
import { SharedKeyframes } from "../../../style/shared";

const StyledError = styled.div`
  width: 100%;
  height: 48vh;
  display: grid;
  place-items: center;
  color: var(--primary-white-clr);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 150px;
      height: 150px;
      margin-bottom: 1rem;
      -webkit-filter: drop-shadow(0px 0px 5px black);
      filter: drop-shadow(0px 0px 5px black);
      animation: ${css`
        ${SharedKeyframes.scale2} 1.2s infinite linear
      `};
    }
    p {
      font-size: 1.2rem;

      &:last-child {
        margin-top: 1rem;
        font-style: italic;
        color: var(--primary-grey-clr);
      }
    }
  }

  @media screen and (max-width: 768px) {
    div {
      img {
        width: 130px;
        height: 130px;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    div {
      img {
        width: 120px;
        height: 120px;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;

export default StyledError;
