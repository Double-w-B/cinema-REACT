import React from "react";
import StyledContactUs from "./style";
import { Link } from "react-router-dom";
import Navigation from "../../shared/Navigation";
import ContactForm from "./ContactForm";
import { FAQsTopics } from "../../../data/projectData";

const ContactUsPage = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    window.onpopstate = () => {
      props.setIsModal(false);
      props.setIsFormValid(false);
    };
  });

  const handleClick = (ref) => {
    let refElement;
    if (ref === "FAQsTickets") refElement = props.FAQsTickets;
    if (ref === "FAQsMovie") refElement = props.FAQsMovie;
    if (ref === "FAQsCovid") refElement = props.FAQsCovid;

    const timeout = setTimeout(() => {
      refElement.current.scrollIntoView({ behavior: "smooth" });
    }, 400);
    return () => clearTimeout(timeout);
  };

  return (
    <StyledContactUs>
      <Navigation pageTitle={"Contact"} />
      <h1>Contact Us</h1>
      <StyledContactUs.Container>
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
                  <StyledContactUs.Button>
                    {topic.icon}
                    {topic.title}
                  </StyledContactUs.Button>
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

        <ContactForm {...props} />
      </StyledContactUs.Container>
    </StyledContactUs>
  );
};

export default ContactUsPage;
