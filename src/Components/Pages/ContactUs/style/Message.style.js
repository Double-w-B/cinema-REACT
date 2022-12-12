import styled from "styled-components";

export const Message = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  &:hover {
    & label,
    & textarea {
      opacity: 1;
    }
  }
  label {
    transition: 0.25s linear;
  }

  textarea {
    width: 100%;
    height: 155px;
    resize: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1.2rem;
    text-align: justify;
    opacity: 0.7;
    transition: 0.25s linear;

    &:focus,
    &:valid {
      opacity: 1;

      & + label,
      & + label {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 900px) {
    textarea {
      font-size: 1.15rem;
    }
  }
`;
