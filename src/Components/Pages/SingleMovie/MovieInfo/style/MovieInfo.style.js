import styled from "styled-components";
import { SharedButton } from "../../../../../style/shared/SharedButton.style";

export const ButtonContainer = styled.div`
  height: 8%;
  width: 45%;
  margin: 0 auto 0.5rem auto;
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
