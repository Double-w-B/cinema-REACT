import React from "react";
import styled from "styled-components";
import * as Styles from "../../UnlimitedPage/UnlimitedPage";
import DataSection from "./DataSection";
import OrdersSection from "./OrdersSection";
import PaymentMethodSection from "./PaymentMethodSection";

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
    if (sectionName === "Orders") return <OrdersSection />;
    if (sectionName === "Edit Account") return <DataSection />;
    if (sectionName === "Payment Method") return <PaymentMethodSection />;
  };

  return (
    <StyledContainer>
      <StyledSectionsContainer>
        {sections.map((section, index) => {
          return (
            <StyledSingleSection key={index} className={setActive(index)}>
              {showSection(section)}
            </StyledSingleSection>
          );
        })}
      </StyledSectionsContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled(Styles.StyledContentContainer)`
  height: 40vh;
  margin-top: 1rem;
  padding-bottom: 0;
`;

const StyledSectionsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
`;

const StyledSingleSection = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  visibility: hidden;
  position: absolute;
  transition: all 0.4s linear;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgba(43, 52, 68, 0.2);
  /* display: grid;
  place-items: center;
  font-size: 2rem;
  color: black; */

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
export default AccountSections;
