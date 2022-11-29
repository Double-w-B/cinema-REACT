import React from "react";
import StyledContactUs from "./style";
import * as Input from "./FormInputs";
import { useDispatch } from "react-redux";
import * as Validation from "./FormInputs/validation.js";
import * as modalsSlice from "../../../redux/features/modals/modalsSlice";

const ContactForm = (props) => {
  const dispatch = useDispatch();
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
    Validation.checkInputsChange(form, refs);
    Validation.validationSuccess(form) ? setIsError(false) : setIsError(true);
    // eslint-disable-next-line
  }, [form]);

  const handleClick = (e) => {
    e.preventDefault();

    if (Validation.validateInputs(form, refs)) {
      dispatch(modalsSlice.handleIsModal(true));
      dispatch(modalsSlice.handleIsLoadingModal(true));

      const timer = setTimeout(() => {
        dispatch(modalsSlice.handleIsLoadingModal(false));
        dispatch(modalsSlice.handleIsContactUsModal(true));
      }, 3600);
      return () => clearTimeout(timer);
    }
    Validation.showError(form, refs);
  };

  return (
    <StyledContactUs.FormContainer>
      <StyledContactUs.Form email={form.email} emailConfirm={form.emailConfirm}>
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
        <StyledContactUs.FormButton
          onClick={(e) => handleClick(e)}
          isError={isError}
        >
          SEND
        </StyledContactUs.FormButton>
      </StyledContactUs.Form>
    </StyledContactUs.FormContainer>
  );
};

export default ContactForm;
