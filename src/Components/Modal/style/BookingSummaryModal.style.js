import styled from "styled-components";
import { SharedModalOverlay, SharedButton } from "../../../style/shared";

const StyledBookingSummaryModal = styled(SharedModalOverlay)`
  width: 30vw;
  min-width: 450px;
  max-width: 460px;
  height: 50vh;
  min-height: 380px;
  max-height: 400px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 50%;
  top: ${(props) => (props.showModal ? "50%" : "40%")};
  transform: translate(-50%, -50%);
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
  opacity: ${(props) => (props.showModal ? "1" : "0")};
  transition: all 0.3s ease-out;

  h1 {
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    word-break: break-word;
    hyphens: auto;
    text-align: justify;

    span {
      color: var(--primary-red-clr);
      hyphens: none;
    }
  }
  a {
    width: 100%;
    display: grid;
    place-items: center;
  }

  @media screen and (max-width: 768px) {
    height: 45vh;
    min-height: 400px;
    min-width: 380px;
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 650px) {
    min-width: 340px;

    h1 {
      font-size: 1.6rem;
    }
  }
`;

const Button = styled(SharedButton)`
  position: relative;
  width: 50%;
`;

StyledBookingSummaryModal.Button = Button;

export default StyledBookingSummaryModal;
