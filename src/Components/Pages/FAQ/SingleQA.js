import React from "react";
import StyledFAQ from "./style";
import { FaChevronCircleDown } from "react-icons/fa";

const SingleQA = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { question, answer } = props;
  return (
    <StyledFAQ.SingleQA isOpen={isOpen} isCloseAll={props.isCloseAll}>
      <div className="title">
        <h3>{question}</h3>
        <FaChevronCircleDown onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className="answer">
        <p>{answer}</p>
      </div>
    </StyledFAQ.SingleQA>
  );
};

export default SingleQA;
