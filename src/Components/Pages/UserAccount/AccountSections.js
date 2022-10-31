import React from "react";
import styled from "styled-components";
import * as Styles from "../UnlimitedPage/UnlimitedPage";

const AccountSections = (props) => {
  const sections = ["Orders", "Edit Account", "Payment Methods"];

  const setActive = (index) => {
    let position = "next";
    if (props.activeSection === index) position = "active";
    if (
      props.activeSection === index - 1 ||
      (index === 0 && props.activeSection === sections.length - 1)
    )
      position = "lastSlide";
    return position;
  };

  return (
    <StyledContainer>
      <StyledSectionContainer>
        {sections.map((section, index) => {
          return (
            <StyledImgContainer key={index} className={setActive(index)}>
              {section}
            </StyledImgContainer>
          );
        })}
      </StyledSectionContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled(Styles.StyledContentContainer)`
  height: 40vh;
  margin-top: 1rem;
  padding-bottom: 0;
`;

const StyledSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
`;

const StyledImgContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  visibility: hidden;
  position: absolute;
  transition: all 0.5s linear;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: grid;
  place-items: center;
  font-size: 2rem;
  color: black;

  &.active {
    visibility: visible;
    transform: translateX(0);
    background-color: green;
    transition-delay: 0.4s;
  }
  &.last {
    transform: translateX(-100%);
  }
  &.next {
    transform: translateX(100%);
  }
`;
export default AccountSections;
