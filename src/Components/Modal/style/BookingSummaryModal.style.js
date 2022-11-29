import styled from "styled-components";
import { SharedButton } from "../../../style/shared/SharedButton.style";

const StyledBookingSummaryModal = styled.div`
  width: 30vw;
  height: 50vh;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--primary-white-clr);
  position: absolute;
  left: 50%;
  top: ${(props) => (props.showModal ? "50%" : "40%")};
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
  opacity: ${(props) => (props.showModal ? "1" : "0")};
  background: #080c13;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 3px;

  h2 {
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    word-break: break-word;
    span {
      color: var(--primary-red-clr);
    }
  }
  a {
    width: 100%;
    display: grid;
    place-items: center;
  }
`;

const Button = styled(SharedButton)`
  position: relative;
  width: 50%;
`;

StyledBookingSummaryModal.Button = Button;

export default StyledBookingSummaryModal;
