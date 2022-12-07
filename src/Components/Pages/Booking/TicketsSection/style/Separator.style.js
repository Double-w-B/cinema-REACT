import styled from "styled-components";

export const Separator = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 0 2rem;

  div:last-child {
    border: none;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 550px) {
    padding: 0;
  }
`;

export const Section = styled.div`
  width: 80%;
  height: 10vh;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  border-bottom: 1px solid var(--primary-grey-clr);

  .category {
    width: 35%;
    height: 100%;
    display: grid;
    place-items: center;

    p {
      font-size: 1.3rem;
      font-weight: bold;
    }
  }

  .price {
    width: 30%;
    height: 100%;
    display: grid;
    place-items: center;

    p {
      font-size: 1.2rem;
      color: var(--primary-red-clr);
    }
  }

  .number {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
      font-size: 1.2rem;
      width: 2rem;
      text-align: center;
    }

    button {
      min-width: 40px;
      min-height: 30px;
      cursor: pointer;
      border-radius: 0.3rem;
      outline: none;
      font-size: 1.5rem;
      color: #fff;
      border: 1px solid #f12535;
      background-color: rgba(241, 37, 53, 0.3);
      opacity: 0.75;
      transition: all 0.3s linear;

      &:hover {
        opacity: 1;
        background-color: var(--primary-red-clr);
      }

      &:active {
        transform: scale(0.7);
      }
    }
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    .category,
    .price {
      justify-content: flex-start;
    }
    .category p {
      font-size: 1.2rem;
    }
    .price p,
    .number p {
      font-size: 1.15rem;
    }
  }

  @media screen and (max-width: 650px) {
    .category p {
      font-size: 1.1rem;
    }
    .price p,
    .number p {
      font-size: 1.05rem;
    }
  }

  @media screen and (max-width: 550px) {
    padding: 0 0.5rem;
  }
`;
