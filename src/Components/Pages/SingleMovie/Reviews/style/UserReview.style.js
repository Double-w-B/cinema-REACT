import styled from "styled-components";
import { SharedButton } from "../../../../../style/shared";

export const UserReview = styled.div`
  width: 96%;
  margin: 1rem auto 2rem auto;

  .review {
    width: 100%;
    display: flex;
    padding-right: 0.5rem;

    .rating {
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 30%;
      text-align: center;
      font-style: italic;
      margin: 0 auto;
      color: rgba(255, 255, 255, 0.3);
    }

    textarea {
      width: 70%;
      height: 170px;
      resize: none;
      outline: none;
      padding: 0.5rem;
      text-align: justify;
      color: var(--primary-white-clr);
      background-color: rgba(0, 0, 0, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.3);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      cursor: text;
    }
  }
`;

export const Stars = styled.div`
  width: 100%;

  p {
    margin-bottom: 1rem;
  }

  span {
    cursor: pointer;

    svg {
      transition: all 0.1s linear;

      &:hover {
        color: var(--primary-red-clr);
      }
      &.mark {
        color: var(--primary-red-clr);
      }
    }

    * {
      cursor: pointer;
    }
  }
`;

export const Button = styled(SharedButton)`
  position: relative;
  display: block;
  font-size: 1rem;
  margin: 1rem 0.5rem 0 auto;
`;
