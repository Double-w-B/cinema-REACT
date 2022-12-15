import styled from "styled-components";
import { SharedModalOverlay, SharedButton } from "../../../style/shared";

const StyledBookingExpiredModal = styled(SharedModalOverlay)`
  width: 25vw;
  min-width: 390px;
  max-width: 400px;
  height: 30vh;
  min-height: 230px;
  max-height: 240px;
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

  h1,
  p {
    text-align: center;
    transition: 0.3s linear;
  }

  a {
    width: 50%;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    min-width: 380px;
    min-height: 210px;

    h1 {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 650px) {
    height: 25vh;
    min-width: 340px;
    min-height: 180px;

    h1 {
      font-size: 1.6rem;
    }
  }
`;

const Button = styled(SharedButton)`
  position: relative;
  width: 100%;

  &:active {
    transform: scale(0.9);
  }
`;

StyledBookingExpiredModal.Button = Button;

export default StyledBookingExpiredModal;
