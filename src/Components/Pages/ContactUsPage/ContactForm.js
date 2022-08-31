import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../Sliders/MoviesNowPlayingSlider";
import * as Input from "./FormInputs";
import { validateInputs, checkInputsChange } from "./FormInputs/validation";

const ContactForm = () => {
  const [isError, setIsError] = React.useState(true);
  const [form, setForm] = React.useState({
    issue: "",
    name: "",
    surname: "",
    email: "",
    emailConfirm: "",
    phoneNum: "",
    cardNum: "",
    date: "",
    time: "",
    message: "",
  });

  const labelIssue = React.useRef("");
  const labelName = React.useRef("");
  const labelSurname = React.useRef("");
  const labelEmail = React.useRef("");
  const labelEmailConfirm = React.useRef("");
  const labelDate = React.useRef("");
  const labelTime = React.useRef("");
  const labelMessage = React.useRef("");

  const refs = [
    labelIssue,
    labelName,
    labelSurname,
    labelEmail,
    labelEmailConfirm,
    labelDate,
    labelTime,
    labelMessage,
  ];

  React.useEffect(() => {
    const { issue, name, surname, email, emailConfirm, date, time, message } =
      form;

    checkInputsChange(form, refs);

    if (
      issue &&
      name &&
      surname &&
      email &&
      emailConfirm &&
      date &&
      time &&
      message &&
      issue !== "- Select the issue -" &&
      email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/) &&
      emailConfirm.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/) &&
      email === emailConfirm
    ) {
      setIsError(false);
    } else {
      setIsError(true);
    }
    // eslint-disable-next-line
  }, [form]);

  const handleClick = (e) => {
    e.preventDefault();
    validateInputs(form, refs);
  };

  return (
    <StyledContainer>
      <StyledForm action="" email={form.email} emailConfirm={form.emailConfirm}>
        <Input.SelectIssue
          form={form}
          setForm={setForm}
          refIssue={labelIssue}
        />
        <Input.FullName
          form={form}
          setForm={setForm}
          refName={labelName}
          refSurname={labelSurname}
        />
        <Input.Contacts
          form={form}
          setForm={setForm}
          refEmail={labelEmail}
          refEmailConfirm={labelEmailConfirm}
        />
        <Input.DateTime
          form={form}
          setForm={setForm}
          refDate={labelDate}
          refTime={labelTime}
        />
        <Input.Message
          form={form}
          setForm={setForm}
          refMessage={labelMessage}
        />
        <StyledBtn onClick={(e) => handleClick(e)} isError={isError}>
          SEND
        </StyledBtn>
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

const StyledBtn = styled(StyledButton)`
  position: relative;
  background-color: ${(props) => !props.isError && "var(--primary-red-clr)"};
  opacity: ${(props) => !props.isError && "0.9"};
`;

export default ContactForm;
