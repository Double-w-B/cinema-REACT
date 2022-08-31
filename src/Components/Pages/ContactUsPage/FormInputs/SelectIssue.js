import React from "react";
import styled from "styled-components";
import { contactFormIssues } from "../../../../data";
import sortIco from "../../../../Images/sort-down.svg";

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
      <StyledSelect
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
      </StyledSelect>
      <label htmlFor="issue" className="no-select" ref={props.refIssue}>
        What can we help you with <span>*</span>
      </label>
    </div>
  );
};

const StyledSelect = styled.select`
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
  transition: 0.25s linear;

  & + label {
    opacity: 1;
  }
  option {
    font-family: "Exo", sans-serif;
    /* -moz-appearance: none; */
    /* font: -moz-pull-down-menu; */
    cursor: pointer;
  }

  &:active {
    background-size: 0.9em auto, 100%;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default SelectIssue;
