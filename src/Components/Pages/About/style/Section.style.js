import styled from "styled-components";
import { SharedSection } from "../../../../style/shared/SharedSection.style";

export const Section = styled(SharedSection)`
  padding-bottom: 2rem;
  font-size: 1.1rem;

  & > p {
    margin: 2rem 1rem 0 1rem;
    text-align: justify;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
