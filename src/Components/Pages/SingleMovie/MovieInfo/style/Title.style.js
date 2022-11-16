import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font-weight: bold;
    font-size: 2rem;
    margin-right: 1rem;
  }

  .rate {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;

    p {
      &:first-child {
        display: flex;
        align-items: center;

        font-size: 1.5rem;
        svg {
          color: #f12535;
          margin-right: 0.2rem;
        }
      }
      &:last-child {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }
`;
