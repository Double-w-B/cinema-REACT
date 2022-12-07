import styled from "styled-components";
import { SharedMain, SharedContainer } from "../../../../style/shared";

const StyledComingSoon = styled(SharedMain)`
  transition: 0.3s linear;
  width: 1050px;

  h1 {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 1150px) {
    width: 950px;
  }

  @media screen and (max-width: 1000px) {
    width: 93%;
  }
`;

const PostersContainer = styled(SharedContainer)`
  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`;

StyledComingSoon.PostersContainer = PostersContainer;

export default StyledComingSoon;
