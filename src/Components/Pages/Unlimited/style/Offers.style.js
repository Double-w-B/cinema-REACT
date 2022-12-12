import styled from "styled-components";

export const Offers = styled.div`
  width: 100%;
`;

export const Cards = styled.div`
  width: 100%;
  height: 20%;
  padding: 1rem 0;
  margin: 2rem 0 1rem 0;
  display: flex;
  gap: 1rem;
`;

export const Benefits = styled.div`
  width: 100%;
  min-height: 270px;
  margin: 2rem 0;
  padding-left: 4rem;

  .benefit {
    margin-top: 1rem;
    transition: 0.3s linear;
    display: flex;
    align-items: center;

    .icon {
      margin-right: 1rem;
      svg {
        font-size: 1.4rem;
        color: var(--primary-red-clr);
      }
    }
    p {
      &:hover {
        color: var(--primary-red-clr);
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-left: 2.5rem;
  }

  @media screen and (max-width: 675px) {
    min-height: 300px;
    padding-left: 0.5rem;
  }

  @media screen and (max-width: 675px) {
    min-height: 350px;
  }

  @media screen and (max-width: 500px) {
    min-height: 390px;
  }
`;
