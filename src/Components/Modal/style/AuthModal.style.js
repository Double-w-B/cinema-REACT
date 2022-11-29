import styled from "styled-components";
import { SharedButton } from "../../../style/shared/SharedButton.style";

export const StyledAuthModal = styled.div`
  width: 30vw;
  height: 50vh;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--primary-white-clr);
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
  opacity: ${(props) => (props.showModal ? "1" : "0")};
  position: absolute;
  left: 50%;
  top: ${(props) => (props.showModal ? "50%" : "40%")};
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
  background: #080c13;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 3px;

  h1 {
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 80%;

  .log-in,
  .guest {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    p {
      text-align: center;
      margin-top: 1rem;
      span {
        color: var(--primary-red-clr);
        cursor: pointer;
      }
    }
  }
  .or {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .line {
      width: 44%;
      height: 1px;
      background-color: var(--primary-white-clr);
    }

    p {
      width: 2.5rem;
      text-align: center;
      text-transform: uppercase;
    }
  }
  .guest {
    justify-content: flex-start;

    p {
      font-size: 0.9rem;
      color: var(--primary-grey-clr);
      a {
        color: var(--primary-red-clr);
      }
    }
  }
`;

export const Button = styled(SharedButton)`
  width: 100%;
  position: relative;
`;

StyledAuthModal.ButtonsContainer = ButtonsContainer;
StyledAuthModal.Button = Button;

export default StyledAuthModal;
