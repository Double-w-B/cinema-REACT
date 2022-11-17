import styled from "styled-components";

export const OrdersSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 3rem;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      color: var(--primary-grey-clr);
      font-size: 1.2rem;
      font-style: italic;
      margin-top: 2rem;
    }
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #0a0f18;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #434343;
  }
`;
