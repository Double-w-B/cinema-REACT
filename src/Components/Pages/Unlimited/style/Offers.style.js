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

  margin: 1rem 0 2rem 0;

  p {
    margin-left: 4rem;
    margin-top: 1rem;
    transition: 0.3s linear;
    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
      font-size: 1.4rem;
      color: var(--primary-red-clr);
    }

    &:hover {
      color: var(--primary-red-clr);
    }
  }
`;
