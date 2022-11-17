import React from "react";
import { contactFormInputs } from "../../../../data/projectData";

const FullName = (props) => {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const values = [name, surname];
  const { form, setForm } = props;

  const handleSetFn = (e) => {
    e.target.id === "name"
      ? setName(e.target.value.replace(/[^a-zA-Z]/g, ""))
      : setSurname(e.target.value.replace(/[^a-zA-Z]/g, ""));
  };

  React.useEffect(() => {
    form.name = name;
    form.surname = surname;
    setForm({ ...form });
    // eslint-disable-next-line
  }, [name, surname]);

  return (
    <div className="customer">
      {contactFormInputs
        .filter((input) => input.inputsSection === "NS")
        .map((input, index) => {
          return (
            <div className={input.title} key={index}>
              <input
                type={input.type}
                id={input.id}
                value={values[index]}
                onChange={(e) => handleSetFn(e)}
                autoComplete="off"
                required
              />
              <label
                htmlFor={input.id}
                className="no-select"
                ref={input.id === "name" ? props.refName : props.refSurname}
              >
                {input.label} <span>*</span>
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default FullName;
