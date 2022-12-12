import styled from "styled-components";
import { SharedMain } from "../../../../style/shared";
import { Container, Button } from "./ContactUs.style";
import { FormContainer, Form, FormButton } from "./ContactForm.style";
import { Message } from "./Message.style";
import { Select } from "./SelectIssue.style";

const StyledContactUs = styled(SharedMain)`
  width: 60%;

  transition: 0.3s linear;
  /* width: 1050px; */

  @media screen and (max-width: 1150px) {
    width: 950px;
  }

  @media screen and (max-width: 1000px) {
    width: 93%;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 650px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

StyledContactUs.Container = Container;
StyledContactUs.Button = Button;
StyledContactUs.FormContainer = FormContainer;
StyledContactUs.Form = Form;
StyledContactUs.FormButton = FormButton;
StyledContactUs.Message = Message;
StyledContactUs.Select = Select;

export default StyledContactUs;
