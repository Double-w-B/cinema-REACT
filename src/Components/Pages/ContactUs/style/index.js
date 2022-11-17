import styled from "styled-components";
import { SharedMain } from "../../../../style/shared";
import { Container, Button } from "./ContactUs.style";
import { FormContainer, Form, FormButton } from "./ContactForm.style";
import { Message } from "./Message.style";
import { Select } from "./SelectIssue.style";

const StyledContactUs = styled(SharedMain)`
  width: 60%;
`;

StyledContactUs.Container = Container;
StyledContactUs.Button = Button;
StyledContactUs.FormContainer = FormContainer;
StyledContactUs.Form = Form;
StyledContactUs.FormButton = FormButton;
StyledContactUs.Message = Message;
StyledContactUs.Select = Select;

export default StyledContactUs;
