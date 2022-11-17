import React from "react";
import { contactFormInputs } from "../../../../data/projectData";

const DateTime = (props) => {
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  const values = [date, time];
  const { form, setForm } = props;

  const handleSetFn = (e) => {
    e.target.id === "date" ? setDate(e.target.value) : setTime(e.target.value);
  };

  React.useEffect(() => {
    form.date = date;
    form.time = time;
    setForm({ ...form });
    // eslint-disable-next-line
  }, [date, time]);

  return (
    <div className="date-time">
      {contactFormInputs
        .filter((input) => input.inputsSection === "DT")
        .map((input, index) => {
          return (
            <div className={input.title} key={index}>
              <input
                type={input.type}
                id={input.id}
                value={values[index]}
                onChange={(e) => handleSetFn(e)}
                required
              />
              <label
                htmlFor={input.id}
                className="no-select"
                ref={input.id === "date" ? props.refDate : props.refTime}
              >
                {input.label} <span>*</span>
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default DateTime;
