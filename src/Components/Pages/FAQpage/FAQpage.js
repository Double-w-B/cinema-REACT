import React from "react";
import styled from "styled-components";
import Navigation from "../../Navigation";
import * as FAQmodule from "../../../data";
import SingleQA from "./SingleQA";
import { StyledMainContainer } from "../SingleMoviePage/SingleMoviePage";

const FAQpage = (props) => {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <StyledMain>
      <Navigation pageTitle={"FAQ"} />
      <h1>Frequently Asked Questions</h1>

      <StyledFaqContainer>
        <StyledTopic>
          <h2 ref={props.refTickets}>Tickets and Pricing</h2>
          {FAQmodule.ticketsAndPricingFaq.map((quest, index) => {
            return <SingleQA key={index} {...quest} />;
          })}
        </StyledTopic>

        <StyledTopic>
          <h2 ref={props.refMovie}>Going to the Movie</h2>
          {FAQmodule.goingToTheMovieFaq.map((quest, index) => {
            return <SingleQA key={index} {...quest} />;
          })}
        </StyledTopic>

        <StyledTopic>
          <h2 ref={props.refCovid}>Coronavirus (COVID-19)</h2>
          {FAQmodule.coronavirusFaq.map((quest, index) => {
            return <SingleQA key={index} {...quest} />;
          })}
        </StyledTopic>
      </StyledFaqContainer>
    </StyledMain>
  );
};

const StyledMain = styled(StyledMainContainer)``;

const StyledFaqContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

const StyledTopic = styled.article`
  width: 100%;
  padding-left: 0.5rem;

  h2 {
    color: var(--primary-red-clr);
    margin-bottom: 1rem;
  }
`;

export default FAQpage;
