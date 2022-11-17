import React from "react";
import StyledFAQ from "./style";
import Navigation from "../../shared/Navigation";
import * as FAQmodule from "../../../data";
import SingleQA from "./SingleQA";

const FAQpage = (props) => {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <StyledFAQ>
      <Navigation pageTitle={"FAQ"} />
      <h1>Frequently Asked Questions</h1>

      <StyledFAQ.Container>
        <StyledFAQ.Topic>
          <h2 ref={props.refTickets}>Tickets and Pricing</h2>
          {FAQmodule.ticketsAndPricingFaq.map((quest, index) => {
            return <SingleQA key={index} {...quest} />;
          })}
        </StyledFAQ.Topic>

        <StyledFAQ.Topic>
          <h2 ref={props.refMovie}>Going to the Movie</h2>
          {FAQmodule.goingToTheMovieFaq.map((quest, index) => {
            return <SingleQA key={index} {...quest} />;
          })}
        </StyledFAQ.Topic>

        <StyledFAQ.Topic>
          <h2 ref={props.refCovid}>Coronavirus (COVID-19)</h2>
          {FAQmodule.coronavirusFaq.map((quest, index) => {
            return <SingleQA key={index} {...quest} />;
          })}
        </StyledFAQ.Topic>
      </StyledFAQ.Container>
    </StyledFAQ>
  );
};

export default FAQpage;
