import styled from "styled-components";

export const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    letter-spacing: 1px;
    margin-bottom: 1rem;
    color: #fff;
    transition: 0.3s linear;
  }

  .genres {
    display: flex;
    margin: ${(props) => !props.trailer && "0 0 0 auto"};
    align-items: flex-end;
    padding-bottom: 0.5rem;

    div {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-top: none;
      border-bottom: none;
      border-right: none;
      padding: 0 0.5rem;

      &:first-child {
        border-left: none;
      }
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    .genres {
      justify-content: end;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 3rem;

    h1 {
      font-size: ${(props) => (props.titleLength > 20 ? "1.6rem" : "1.8rem")};
    }
  }

  @media screen and (max-width: 650px) {
    h1 {
      font-size: ${(props) => (props.titleLength > 20 ? "1.3rem" : "1.5rem")};
      margin-right: 1rem;
    }
    .genres {
      div {
        font-size: 1rem;
      }
    }
  }
`;
