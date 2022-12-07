import styled, { css } from "styled-components";
import { scale1 } from "../../../../style/shared/SharedKeyframes.style";

export const Timer = styled.span`
  font-size: 1.2rem;
  margin-left: 0.2rem;
  font-weight: 400;
  color: #fff;
  display: flex;
  align-items: center;
  animation: ${(props) =>
    props.min < 1 &&
    css`
      ${scale1} 1.2s infinite linear
    `};

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
