import styled from "styled-components";

export const InfoContainer = styled.section`
  width: 100%;
  min-height: 500px;
  margin: ${(props) =>
    props.trailer ? "2rem auto 4rem auto" : "0 auto 4rem auto"};
  display: flex;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ReviewTitle = styled.div`
  width: 100%;

  h1 {
    text-transform: capitalize;
    letter-spacing: 1px;
    color: #fff;

    span {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.3);
    }
  }
`;
