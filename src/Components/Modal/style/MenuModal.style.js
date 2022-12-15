import styled from "styled-components";
import { SharedModalOverlay } from "../../../style/shared";

const StyledMenuModal = styled(SharedModalOverlay)`
  width: 50%;
  height: 100%;
  padding: 0 1.5rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: ${(props) => (props.showModal ? "0" : "-100%")};
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
  opacity: ${(props) => (props.showModal ? "1" : "0")};
  transition: all 0.5s ease-out;
  z-index: 11;

  .heading {
    width: 100%;
    height: 10vh;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--primary-grey-clr);

    p {
      cursor: default;
    }

    svg {
      font-size: 1.8rem;
      cursor: pointer;
      opacity: 0.8;
      transition: all 0.1s linear;

      &:hover {
        opacity: 1;
      }

      &:active {
        transform: scale(0.8);
      }
    }
  }

  ul {
    padding: 1.5rem;
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    li {
      width: 40%;
      margin: 0 auto;
      border: none;
      text-transform: capitalize;
      display: grid;
      place-items: center;
      font-weight: 500;
      transition: 0.3s linear;
      color: black;
      color: var(--primary-grey-clr);
      opacity: ${(props) => (props.showModal ? "1" : "0")};
      visibility: ${(props) => (props.showModal ? "visible" : "hidden")};

      &:nth-child(1) {
        transition-delay: ${(props) => props.showModal && "0.4s"};
      }
      &:nth-child(2) {
        transition-delay: ${(props) => props.showModal && "0.55s"};
      }
      &:nth-child(3) {
        transition-delay: ${(props) => props.showModal && "0.7s"};
      }
      &:nth-child(4) {
        transition-delay: ${(props) => props.showModal && "0.85s"};
      }
      &:nth-child(5) {
        transition-delay: ${(props) => props.showModal && "1s"};
      }
      &:nth-child(6) {
        transition-delay: ${(props) => props.showModal && "1.15s"};
      }

      &:last-child {
        visibility: ${(props) => (props.isUser ? "visible" : "hidden")};
      }

      &:hover {
        width: 50%;
        transition: 0.5s linear;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
      }

      a,
      p {
        font-size: 1.1rem;
        color: var(--primary-white-clr);
        letter-spacing: 0.5px;
        transition: all 0.1s linear;
        cursor: pointer;

        &:hover {
          color: var(--primary-red-clr) !important;
        }
      }
    }
  }

  .greeting {
    width: 100%;
    min-height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--primary-grey-clr);
    p {
      font-size: 1.1rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 900px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 76%;

    .heading {
      font-size: 1.4rem;
      svg {
        font-size: 2.2rem;
      }
    }

    ul li {
      width: 65%;
      &:hover {
        width: 75%;
      }
    }
  }
`;

export default StyledMenuModal;
