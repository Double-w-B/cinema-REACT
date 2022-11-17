import styled from "styled-components";
import { SharedButton } from "../../../../style/shared";

export const FormContainer = styled.div`
  width: 600px;
  height: 100vh;
  margin: 2rem auto 1rem auto;
  padding: 0.5rem 1rem;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    color: var(--primary-red-clr);
  }

  label {
    text-transform: uppercase;
    font-size: 1.1rem;
    opacity: 0.7;

    &.error {
      color: var(--primary-red-clr);
    }
  }
  .issues label {
    opacity: 1;
  }

  input {
    padding: 0 0.5rem;
    border: none;
    outline: none;
    font-size: 1.25rem;
    border-radius: 2px;
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

  .issues,
  .customer,
  .email,
  .email-confirm,
  .date-time,
  .phone,
  .unlimited {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
  }

  .email,
  .email-confirm,
  .phone,
  .unlimited {
    &:hover {
      & input,
      & label {
        opacity: 1;
      }
    }
  }

  .email-confirm {
    position: relative;

    svg {
      font-size: 1.25rem;
      color: ${(props) =>
        props.email === props.emailConfirm
          ? "green"
          : "var(--primary-red-clr)"};
      position: absolute;
      bottom: 0.5rem;
      right: 0.7rem;
      transition: 0.2s linear;
    }
  }

  #email,
  #email-confirm {
    text-transform: lowercase;
  }

  select,
  #name,
  #surname,
  #email,
  #email-confirm,
  #phone,
  #unlimited,
  #date,
  #time {
    width: 100%;
    height: 60px;
  }

  .customer,
  .date-time {
    flex-direction: row;

    .customer-name,
    .customer-surname,
    .date,
    .time {
      width: 49%;
      display: flex;
      flex-direction: column-reverse;

      &:hover {
        & input,
        & label {
          opacity: 1;
        }
      }
    }
  }

  .date input,
  .time input {
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

export const FormButton = styled(SharedButton)`
  position: relative;
  background-color: ${(props) => !props.isError && "var(--primary-red-clr)"};
`;
