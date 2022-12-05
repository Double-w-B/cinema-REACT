import styled from "styled-components";
import { SharedButton } from "../../../../../style/shared/SharedButton.style";

export const ButtonContainer = styled.div`
  height: 8%;
  width: 45%;
  margin: 1rem auto;

  @media screen and (max-width: 940px) {
    width: 40%;
    margin: 2rem auto 1rem auto;
  }
`;

export const Button = styled(SharedButton)`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(241, 37, 53, 0.3);

  &:active {
    transform: scale(0.9);
  }
`;
