import styled from "styled-components";

export const ShortInfo = styled.div`
  width: 100%;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .orig_title,
  .lang,
  .date,
  .time,
  .prod_countries,
  .web,
  .prod_companies {
    display: flex;
    margin: 0.3rem 0;

    p {
      &:first-child {
        min-width: 30%;
      }
      &:last-child {
        color: #f12535;
      }
    }

    a {
      color: #fff;
    }
  }

  @media screen and (max-width: 940px) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 600px) {
    padding-left: 0;
    p {
      &:first-child {
        min-width: 35%;
      }
    }
  }
`;
