import React from "react";
import StyledUserAccount from "./style";

const AccountNavbar = (props) => {
  const sections = ["Orders", "Edit Account", "Payment Method"];
  const { activeSection, setActiveSection } = props;

  const checkIndex = (index) => {
    if (index === activeSection) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <StyledUserAccount.AccountNavbar className="no-select">
      <StyledUserAccount.Header>
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
      </StyledUserAccount.Header>
    </StyledUserAccount.AccountNavbar>
  );
};

export default AccountNavbar;
