import React from "react";
import styled from "styled-components";
import * as Styles from "../UnlimitedPage/UnlimitedPage";

const AccountNav = (props) => {
  const sections = ["Orders", "Edit Account", "Payment Methods"];
  const { activeSection, setActiveSection } = props;

  const checkIndex = (index) => {
    if (index === activeSection) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <StyledContainer className="no-select">
      <StyledHeader>
        <nav>
          <ul>
            {sections.map((link, index) => {
              return (
                <li key={index}>
                  <p
                    className={checkIndex(index)}
                    onClick={() => setActiveSection(index)}
                  >
                    {link}
                  </p>
                </li>
              );
            })}
          </ul>
        </nav>
      </StyledHeader>
    </StyledContainer>
  );
};
const StyledContainer = styled(Styles.StyledContentContainer)`
  margin-top: 0;
  padding-bottom: 0;
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 6vh;

  nav {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    ul {
      width: 50%;
      height: 100%;
      padding: 0.5rem 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      li {
        font-size: 1.1rem;
        border: none;
        border-left: 1px solid var(--primary-white-clr);
        text-transform: capitalize;
        display: grid;
        place-items: center;

        &:last-child {
          border-right: 1px solid var(--primary-white-clr);
        }
        p {
          transition: all 0.1s linear;
          cursor: pointer;

          &.active,
          &:hover {
            color: var(--primary-red-clr);
          }
        }
      }
    }
  }
`;
export default AccountNav;
