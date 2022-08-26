import React from "react";
import styled from "styled-components";
import Navigation from "../../Navigation";
import { StyledMainContainer } from "../SingleMoviePage/SingleMoviePage";
import { StyledContentContainer } from "../UnlimitedPage/UnlimitedPage";
import Banner from "./StyledBanner";

const AboutPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <StyledMain>
      <Navigation pageTitle={"About"} />
      <h1>About CineMania</h1>
      <StyledSection>
        <Banner />

        <p>
          CineMania has been a part of the CineManiaWorld group, which has been
          in the cinema industry for nearly 90 years. At this point, it is the
          second largest cinema network in the world, with 9 518 rooms in 790
          cinemas. CineManiaWorld operates in 10 countries - the United States,
          the United Kingdom, Poland, Ireland, Israel, Czech Republic, Bulgaria,
          Romania, Hungary and Slovakia. It organizes 14,5 million films a year,
          displaying more than 300 million viewers.
        </p>

        <p>
          CineMania is much more than just a cinema. It offers both the biggest
          and most anticipated film premieres and concerts of the world's stars,
          night film marathons, major sporting events, opera, ballet and
          retransmissions of performances from the UK National Theater. Every
          cinema has more than 5 halls equipped with laser projectors and
          electrically fold-out leather seats, so you can watch movies even in a
          semi-lying position.
        </p>

        <p>
          CineMania has been recognized for many times during prestigious
          competitions. It is the Super Brand created for movie lovers. For many
          years CineMania has been a leader in the area of Event Cinema on the
          European markets (winner of the 2014 ECA Awards). We are committed to
          being "The Best Place to Watch a Movie!".
        </p>
      </StyledSection>
    </StyledMain>
  );
};

const StyledMain = styled(StyledMainContainer)``;

const StyledSection = styled(StyledContentContainer)`
  padding-bottom: 2rem;
  font-size: 1.1rem;

  & > p {
    margin: 2rem 1rem 0 1rem;
    text-align: justify;
  }
`;

export default AboutPage;
