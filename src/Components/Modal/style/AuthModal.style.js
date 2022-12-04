import styled from "styled-components";
import { SharedButton } from "../../../style/shared/SharedButton.style";

export const StyledAuthModal = styled.div`
  width: 30vw;
  min-width: 420px;
  max-width: 460px;
  height: 50vh;
  min-height: 380px;
  max-height: 400px;
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

  @media screen and (max-width: 768px) {
    height: 45vh;
    min-height: 340px;
    min-width: 380px;

    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 650px) {
    min-width: 340px;

    h1 {
      font-size: 1.6rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: calc(100% - 1.8rem);

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

  @media screen and (max-width: 650px) {
    p {
      font-size: 0.9rem;
    }
    .guest {
      p {
        font-size: 0.8rem;
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
