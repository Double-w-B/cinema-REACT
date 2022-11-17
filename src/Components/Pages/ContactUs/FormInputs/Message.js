import React from "react";
import StyledContactUs from "../style";

const Message = (props) => {
  const [message, setMessage] = React.useState("");
  const { form, setForm } = props;

  React.useEffect(() => {
    form.message = message;
    setForm({ ...form });
    // eslint-disable-next-line
  }, [message]);

  return (
    <StyledContactUs.Message className="message">
      <textarea
        id="message"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <label htmlFor="message" className="no-select" ref={props.refMessage}>
        Describe your issue or question <span>*</span>
      </label>
    </StyledContactUs.Message>
  );
};

export default Message;
