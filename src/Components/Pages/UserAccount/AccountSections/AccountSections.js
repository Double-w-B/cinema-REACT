import React from "react";
import * as Component from "./index";
import StyledAccountSections from "./style";

const AccountSections = (props) => {
  const sections = ["Orders", "Edit Account", "Payment Method"];

  const setActive = (index) => {
    let position = "next";
    if (props.activeSection === index) position = "active";
    if (
      props.activeSection === index - 1 ||
      (index === 0 && props.activeSection === sections.length - 1)
    )
      position = "last";
    return position;
  };

  const showSection = (sectionName) => {
    if (sectionName === "Orders") return <Component.OrdersSection {...props} />;
    if (sectionName === "Edit Account") return <Component.DataSection />;
    if (sectionName === "Payment Method")
      return <Component.PaymentMethodSection />;
  };

  return (
    <StyledAccountSections>
      <StyledAccountSections.Container>
        {sections.map((section, index) => {
          return (
            <StyledAccountSections.SingleSection
              key={index}
              className={setActive(index)}
            >
              {showSection(section)}
            </StyledAccountSections.SingleSection>
          );
        })}
      </StyledAccountSections.Container>
    </StyledAccountSections>
  );
};

export default AccountSections;
