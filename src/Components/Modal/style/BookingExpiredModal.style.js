import styled from "styled-components";
import { SharedButton } from "../../../style/shared/SharedButton.style";

const StyledBookingExpiredModal = styled.div`
  width: 25vw;
  height: 30vh;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--primary-white-clr);
  position: absolute;
  left: 50%;
  top: ${(props) => (props.showModal ? "50%" : "40%")};
  transform: translate(-50%, -50%);
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
  opacity: ${(props) => (props.showModal ? "1" : "0")};
  transition: all 0.3s ease-out;
  background: #080c13;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 3px;

  h1,
  p {
    text-align: center;
  }

  a {
    width: 50%;
    margin: 0 auto;
  }
`;

const Button = styled(SharedButton)`
  width: 100%;
  position: relative;

  &:active {
    transform: scale(0.9);
  }
`;

StyledBookingExpiredModal.Button = Button;

export default StyledBookingExpiredModal;
