import styled from "styled-components";
import { SharedButton } from "../../../style/shared/SharedButton.style";

const StyledContactUsModal = styled.div`
  width: 30vw;
  min-width: 450px;
  max-width: 460px;
  height: 40vh;
  min-height: 290px;
  max-height: 300px;
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

  .content {
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(43, 52, 68, 0.4);

    h1 {
      text-align: center;
      margin: 0 1rem;
    }

    p {
      text-align: justify;
      font-size: 1.1rem;
      word-break: break-word;
      hyphens: auto;
    }

    a {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    min-width: 400px;

    .content {
      h1 {
        font-size: 1.8rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    min-width: 380px;

    .content {
      h1 {
        font-size: 1.6rem;
      }
    }
  }
`;

const Button = styled(SharedButton)`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 40%;
  padding: 0.4rem 0.5rem;
`;

StyledContactUsModal.Button = Button;

export default StyledContactUsModal;
