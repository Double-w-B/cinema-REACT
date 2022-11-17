import styled from "styled-components";
import { SharedSection, SharedButton } from "../../../../style/shared";

export const Container = styled(SharedSection)`
  .gaq-topics {
    width: 100%;
    height: 20vh;
    margin: 0 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    h2 {
      text-align: left;
      margin-left: 2rem;
    }

    .topics {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }

  h2 {
    text-align: left;
    margin-left: 2rem;
    span {
      font-size: 0.9rem;
      letter-spacing: 0.5px;
      span {
        color: var(--primary-red-clr);
      }
    }
  }
`;

export const Button = styled(SharedButton)`
  position: relative;
  text-transform: none;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;
