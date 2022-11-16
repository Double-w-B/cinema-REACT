import styled from "styled-components";

export const OffersDescription = styled.div`
  width: 75%;
  min-height: 180px;
  margin: 4.5rem auto 0 auto;

  && p {
    transition: 0.4s ease-in;
    transform: ${(props) =>
      props.showDesc ? "translateX(0)" : "translateY(2rem)"};
    opacity: ${(props) => (props.showDesc ? "1" : "0")};
  }
`;
