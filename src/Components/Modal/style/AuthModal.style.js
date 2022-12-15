import styled from "styled-components";
import { SharedModalOverlay, SharedButton } from "../../../style/shared";

export const StyledAuthModal = styled(SharedModalOverlay)`
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
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
  opacity: ${(props) => (props.showModal ? "1" : "0")};
  top: ${(props) => (props.showModal ? "50%" : "40%")};
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;

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
  position: relative;
  width: 100%;
`;

StyledAuthModal.ButtonsContainer = ButtonsContainer;
StyledAuthModal.Button = Button;

export default StyledAuthModal;
