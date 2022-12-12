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

  @media screen and (max-width: 768px) {
    p {
      font-size: 1rem;
      margin: 1rem;
    }
  }
`;

export const Banner = styled(SharedBanner)`
  height: 35vh;

  img {
    object-position: 0 45%;
  }

  @media screen and (max-width: 640px) {
    height: 30vh;
  }

  @media screen and (max-width: 560px) {
    height: 25vh;
  }
`;
