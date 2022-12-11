import styled from "styled-components";
import { SharedMain } from "../../../../style/shared";
import { Container, Topic } from "./FAQ.style";
import { SingleQA } from "./SingleQA.style";

const StyledFAQ = styled(SharedMain)`
  transition: 0.3s linear;
  width: 1050px;

  @media screen and (max-width: 1150px) {
    width: 950px;
  }

  @media screen and (max-width: 1000px) {
    width: 93%;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 650px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

StyledFAQ.Container = Container;
StyledFAQ.Topic = Topic;
StyledFAQ.SingleQA = SingleQA;

export default StyledFAQ;
