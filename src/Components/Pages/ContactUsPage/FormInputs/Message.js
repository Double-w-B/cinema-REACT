import React from "react";
import styled from "styled-components";

const Message = (props) => {
  const [message, setMessage] = React.useState("");
  const { form, setForm } = props;

  React.useEffect(() => {
    form.message = message;
    setForm({ ...form });
    // eslint-disable-next-line
  }, [message]);

  return (
    <StyledContainer className="message">
      <textarea
        id="message"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <label htmlFor="message" className="no-select" ref={props.refMessage}>
        Describe your issue or question <span>*</span>
      </label>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
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
`;

export default Message;
