import styled from "styled-components";
import { SharedSection, SharedBanner } from "../../../../style/shared";

export const Container = styled(SharedSection)`
  min-height: 125vh;

  p {
    &:nth-child(2) {
      margin-top: 2rem;
    }

    font-size: 1.1rem;
    margin: 1rem 2rem;
    text-align: justify;
  }
`;

export const Banner = styled(SharedBanner)`
  height: 30vh;
`;
