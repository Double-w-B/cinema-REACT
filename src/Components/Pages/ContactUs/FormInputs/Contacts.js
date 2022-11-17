import React from "react";
import { contactFormInputs } from "../../../../data/projectData";
import { AiFillMinusCircle, AiFillCheckCircle } from "react-icons/ai";

const Contacts = (props) => {
  const [email, setEmail] = React.useState("");
  const [emailConfirm, setEmailConfirm] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState("");
  const [cardNum, setCardNum] = React.useState("");

  const values = [email, emailConfirm, phoneNum, cardNum];
  const { form, setForm } = props;

  const handleSetFn = (e) => {
    e.target.id === "email" && setEmail(e.target.value.toLocaleLowerCase());
    e.target.id === "email-confirm" &&
      setEmailConfirm(e.target.value.toLocaleLowerCase());
    e.target.id === "phone" &&
      setPhoneNum(e.target.value.replace(/[^0-9.]/g, ""));
    e.target.id === "unlimited" && setCardNum(e.target.value);
  };

  React.useEffect(() => {
    form.email = email.toLocaleLowerCase();
    form.emailConfirm = emailConfirm.toLocaleLowerCase();
    form.phoneNum = phoneNum;
    form.cardNum = cardNum;
    setForm({ ...form });
    // eslint-disable-next-line
  }, [email, emailConfirm, phoneNum, cardNum]);

  const emailsEqualityCheck = () => {
    if (email.length > 1 && emailConfirm.length > 0 && email !== emailConfirm) {
      return <AiFillMinusCircle />;
    }
    if (email.length > 1 && emailConfirm.length > 0 && email === emailConfirm) {
      return <AiFillCheckCircle />;
    }
  };

  const setRefFn = (id) => {
    if (id === "email") return props.refEmail;
    if (id === "email-confirm") return props.refEmailConfirm;
    return null;
  };

  const handleOnPaste = (e, id) => {
    if (id === "email-confirm") {
      e.preventDefault();
      return false;
    }
  };
  return (
    <>
      {contactFormInputs
        .filter((input) => input.inputsSection === "EEPU")
        .map((input, index) => {
          return (
            <div className={input.title} key={index}>
              <input
                type={input.type}
                id={input.id}
                value={values[index]}
                onChange={(e) => handleSetFn(e)}
                autoComplete="off"
                onPaste={(e) => handleOnPaste(e, input.id)}
                required
              />
              <label
                htmlFor={input.id}
                className="no-select"
                ref={setRefFn(input.id)}
              >
                {input.label}
                {input.id !== "phone" && input.id !== "unlimited" && (
                  <span>*</span>
                )}
              </label>
              {input.title === "email-confirm" && emailsEqualityCheck()}
            </div>
          );
        })}
    </>
  );
};

export default Contacts;
