import styled from "styled-components";

export const SingleOffer = styled.div`
  width: calc(100% / 3);
  min-height: 180px;
  padding: 1rem 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.active ? "var(--primary-white-clr)" : "var(--primary-grey-clr)"};
  border-radius: 0.3rem;
  box-shadow: ${(props) => props.active && "rgba(0, 0, 0, 0.35) 0px 5px 15px"};
  border: 2px solid #ffffff4c;
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  scale: ${(props) => (props.active ? "1" : "0.9")};
  transition: 0.3s linear;
  position: relative;

  p {
    &:first-child {
      font-size: 2.3rem;
      font-weight: bold;
      text-align: center;
      z-index: 1;
      white-space: pre-wrap;
    }

    &:last-child {
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 1px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      color: var(--primary-red-clr);
      transition: 0.3s linear;
      opacity: ${(props) => (props.active ? "1" : "0")};
    }
  }

  @media screen and (max-width: 900px) {
    p {
      &:first-child {
        font-size: 2.2rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 160px;

    p {
      &:first-child {
        font-size: 1.8rem;
      }
      &:last-child {
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    min-height: 140px;

    p {
      &:first-child {
        font-size: 1.5rem;
      }
      &:last-child {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 550px) {
    min-height: 110px;

    p {
      &:first-child {
        font-size: 1.3rem;
      }
      &:last-child {
        font-size: 0.9rem;
      }
    }
  }
`;
