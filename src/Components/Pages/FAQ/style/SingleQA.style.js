import styled from "styled-components";

export const SingleQA = styled.article`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem 1rem 0.5rem 1rem;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 3s linear;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h3 {
      color: ${(props) => props.isOpen && "var(--primary-red-clr)"};
      transition: all 0.3s linear;
      transition-delay: 0.1s;
      margin-right: 0.5rem;
    }

    .title__icon {
      min-width: 35px;
      min-height: 30px;
      display: grid;
      place-items: center;
      align-self: flex-start;

      svg {
        font-size: 1.5rem;
        color: ${(props) => props.isOpen && "var(--primary-red-clr)"};
        transform: ${(props) => props.isOpen && "rotate(90deg)"};
        transition: all 0.3s linear;
        transition-delay: 0.1s;
        cursor: pointer;

        &:hover {
          color: var(--primary-red-clr);
        }
      }
    }
  }

  .answer {
    width: 100%;
    padding: 0 2rem 0.5rem 2rem;
    overflow: hidden;
    transition: all 0.3s linear;
    height: ${(props) => (!props.isOpen ? "0" : "100%")};

    p {
      width: 100%;
      font-size: 1.05rem;
      margin-top: 0.5rem;
      text-align: justify;
      opacity: ${(props) => (props.isOpen ? "1" : "0")};
      transition: all 0.3s linear;
      transition-delay: 0.1s;
    }
  }

  @media screen and (max-width: 900px) {
    .answer {
      padding: 0 1rem 0.5rem 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    .answer {
      p {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    .answer {
      padding: 0;
    }
  }
`;
