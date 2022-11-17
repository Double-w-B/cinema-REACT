import React from "react";
import StyledContactUs from "../style";
import { contactFormIssues } from "../../../../data/projectData";

const SelectIssue = (props) => {
  const [issue, setIssue] = React.useState("");
  const { form, setForm } = props;

  React.useEffect(() => {
    form.issue = issue;
    setForm({ ...form });
    // eslint-disable-next-line
  }, [issue]);

  return (
    <div className="issues">
      <StyledContactUs.Select
        id="issue"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
      >
        {contactFormIssues.map((issue, index) => {
          return (
            <option value={issue} key={index}>
              {issue}
            </option>
          );
        })}
      </StyledContactUs.Select>
      <label htmlFor="issue" className="no-select" ref={props.refIssue}>
        What can we help you with <span>*</span>
      </label>
    </div>
  );
};

export default SelectIssue;
