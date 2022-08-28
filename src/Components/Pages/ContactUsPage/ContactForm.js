import React from "react";
import styled from "styled-components";
import * as FormModule from "../../../data";
import { StyledButton } from "../../Sliders/MoviesNowPlayingSlider";
import sortIco from "../../../Images/sort-down.svg";

const ContactForm = () => {
  return (
    <StyledContainer>
      <StyledForm action="">
        <div className="issues">
          <select name="" id="issue">
            {FormModule.contactFormIssues.map((issue, index) => {
              return (
                <option value="" key={index}>
                  {issue}
                </option>
              );
            })}
          </select>
          <label htmlFor="issue" className="no-select">
            What can we help you with <span>*</span>
          </label>
        </div>

        <div className="customer">
          {FormModule.contactFormInputs
            .filter((input) => input.input_part === "CC")
            .map((input, index) => {
              return (
                <div className={input.title} key={index}>
                  <input
                    type={input.type}
                    id={input.id}
                    autocomplete="off"
                    required
                  />
                  <label htmlFor={input.id} className="no-select">
                    {input.label} <span>*</span>
                  </label>
                </div>
              );
            })}
        </div>

        {FormModule.contactFormInputs
          .filter((input) => input.input_part === "EEPU")
          .map((input, index) => {
            return (
              <div className={input.title} key={index}>
                <input
                  type={input.type}
                  id={input.id}
                  autocomplete="off"
                  required
                />
                <label htmlFor={input.id} className="no-select">
                  {input.label}{" "}
                  {input.id !== "phone" && input.id !== "unlimited" && (
                    <span>*</span>
                  )}
                </label>
              </div>
            );
          })}

        <div className="date-time">
          {FormModule.contactFormInputs
            .filter((input) => input.input_part === "DT")
            .map((input, index) => {
              return (
                <div className={input.title} key={index}>
                  <input type={input.type} id={input.id} required />
                  <label htmlFor={input.id} className="no-select">
                    {input.label} <span>*</span>
                  </label>
                </div>
              );
            })}
        </div>

        <div className="message">
          <textarea id="message" required></textarea>
          <label htmlFor="message" className="no-select">
            Describe your issue or question <span>*</span>
          </label>
        </div>
        <StyledBtn>SEND</StyledBtn>
      </StyledForm>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 600px;
  height: 100vh;
  margin: 2rem auto 1rem auto;
  padding: 0.5rem 1rem;
`;

const StyledForm = styled.form`
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

    &:not(.issues label) {
      opacity: 0.7;
    }
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
  .unlimited,
  .message {
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

  .message {
    height: 180px;

    &:hover {
      & label,
      & textarea {
        opacity: 1;
      }
    }

    textarea {
      width: 100%;
      height: 155px;
      resize: none;
      padding: 0.5rem;
      font-size: 1.2rem;
      text-align: justify;
      opacity: 0.7;

      &:focus,
      &:valid {
        opacity: 1;
        & + label,
        & + label {
          opacity: 1;
        }
      }
    }
  }

  select,
  .date input,
  .time input {
    font-size: 1.1rem;
    cursor: pointer;
  }

  select {
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
    transition: 0.3s linear;

    &:active {
      background-size: 0.9em auto, 100%;
    }
  }
`;
const StyledBtn = styled(StyledButton)`
  position: relative;
`;

export default ContactForm;
