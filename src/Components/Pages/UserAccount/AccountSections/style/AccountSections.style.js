import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
`;

export const SingleSection = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  visibility: hidden;
  position: absolute;
  transition: all 0.4s linear;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgba(43, 52, 68, 0.2);

  &.active {
    visibility: visible;
    transform: translateX(0);
  }

  &.last {
    transform: translateX(-100%);
  }

  &.next {
    transform: translateX(100%);
  }
`;
