import styled from "styled-components";
import { SharedSection } from "../../../../../style/shared";
import { Container, Section } from "./Schedule.style";
import { Date } from "./Date.style";
import { Overview } from "./Overview.style";
import { Poster } from "./Poster.style";
import { TimeContainer, Screenings } from "./Time.style";

const StyledSchedule = styled(SharedSection)`
  padding: 1rem 0 1rem 1rem;

  @media screen and (max-width: 900px) {
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 650px) {
    padding: 1rem 0.5rem 0.5rem 0.5rem;

    h2 {
      font-size: 1.3rem;
    }
  }
`;

StyledSchedule.Container = Container;
StyledSchedule.Section = Section;
StyledSchedule.Date = Date;
StyledSchedule.Overview = Overview;
StyledSchedule.Poster = Poster;
StyledSchedule.TimeContainer = TimeContainer;
StyledSchedule.Screenings = Screenings;

export default StyledSchedule;
