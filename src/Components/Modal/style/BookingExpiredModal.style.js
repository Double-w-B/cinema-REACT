import styled from "styled-components";
import { SharedButton } from "../../../style/shared/SharedButton.style";

const StyledBookingExpiredModal = styled.div`
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
  width: 100%;
  position: relative;

  &:active {
    transform: scale(0.9);
  }
`;

StyledBookingExpiredModal.Button = Button;

export default StyledBookingExpiredModal;
