import React from "react";
import styled from "styled-components";
import Navigation from "../../Navigation";
import { StyledMainContainer } from "../SingleMoviePage/SingleMoviePage";
import * as Styles from "../UnlimitedPage/UnlimitedPage";
import UserData from "./UserData";
import AccountNav from "./AccountNav";
import AccountSections from "./AccountSections/AccountSections";

const UserAccountPage = (props) => {
  const [activeSection, setActiveSection] = React.useState(0);

  const sectionInitialState = {
    activeSection,
    setActiveSection,
  };

  sessionStorage.removeItem("single_movie");

  return (
    <StyledMain>
      <Navigation pageTitle={"Account"} />
      <h1>Nice to See you </h1>
      <StyledContainer>
        <UserData />
        <AccountNav {...sectionInitialState} />
        <AccountSections {...sectionInitialState} {...props} />
      </StyledContainer>
    </StyledMain>
  );
};

const StyledMain = styled(StyledMainContainer)``;

const StyledContainer = styled(Styles.StyledContentContainer)`
  background-color: transparent;
  box-shadow: none;
`;

export default UserAccountPage;
