import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "../../Navigation";
import ContactForm from "./ContactForm";
import { StyledMainContainer } from "../SingleMoviePage/SingleMoviePage";
import { StyledContentContainer } from "../UnlimitedPage/UnlimitedPage";
import { StyledButton } from "../../Sliders/MoviesNowPlayingSlider";
import { FAQsTopics } from "../../../data";

const ContactUsPage = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (ref) => {
    let refElement;
    if (ref === "FAQsTickets") refElement = props.refTickets;
    if (ref === "FAQsMovie") refElement = props.refMovie;
    if (ref === "FAQsCovid") refElement = props.refCovid;

    const timeout = setTimeout(() => {
      refElement.current.scrollIntoView({ behavior: "smooth" });
    }, 400);
    return () => clearTimeout(timeout);
  };

  return (
    <StyledMain>
      <Navigation pageTitle={"Contact"} />
      <h1>Contact Us</h1>
      <StyledSection>
        <div className="gaq-topics">
          <h2>Browse Help Topics (FAQs) first</h2>
          <div className="topics">
            {FAQsTopics.map((topic, index) => {
              return (
                <Link
                  to="/help/faq"
                  onClick={() => handleClick(`${topic.ref}`)}
                  key={index}
                >
                  <StyledBtn>
                    {topic.icon}
                    {topic.title}
                  </StyledBtn>
                </Link>
              );
            })}
          </div>
        </div>
        <h2>
          Send us an email{" "}
          <span>
            (<span>*</span> required fields)
          </span>
        </h2>
       
        <ContactForm setIsModal={props.setIsModal} />
      </StyledSection>
    </StyledMain>
  );
};

const StyledMain = styled(StyledMainContainer)`
  width: 60%;
`;
const StyledSection = styled(StyledContentContainer)`
  .gaq-topics {
    width: 100%;
    height: 20vh;
    margin: 0 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    h2 {
      text-align: left;
      margin-left: 2rem;
    }

    .topics {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }

  h2 {
    text-align: left;
    margin-left: 2rem;
    span {
      font-size: 0.9rem;
      letter-spacing: 0.5px;
      span {
        color: var(--primary-red-clr);
      }
    }
  }
`;

const StyledBtn = styled(StyledButton)`
  position: relative;
  text-transform: none;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;
export default ContactUsPage;
