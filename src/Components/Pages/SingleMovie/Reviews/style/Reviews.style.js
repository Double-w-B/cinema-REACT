import styled from "styled-components";
import { SharedReviewsInfo } from "../../../../../style/shared";

export const LogInInfo = styled(SharedReviewsInfo)`
  margin: 2rem auto;

  button {
    color: var(--primary-white-clr);
    background-color: transparent;
    border: none;
    font-size: inherit;
    font-style: inherit;
    cursor: pointer;
    transition: 0.3s linear;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
    &:active {
      transform: scale(0.8);
    }
  }
`;
