import React from "react";
import styled from "styled-components";
import Navigation from "../../Navigation";
import { StyledMainContainer } from "../SingleMoviePage/SingleMoviePage";
import * as Styles from "../UnlimitedPage/UnlimitedPage";
import * as Component from "./index";
import ErrorPage from "../ErrorPage/ErrorPage";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from "../LoadingPage/LoadingPage";

const UserAccountPage = (props) => {
  const [activeSection, setActiveSection] = React.useState(0);
  const { isAuthenticated, user, isLoading } = useAuth0();
  const isUser = isAuthenticated && user;

  const sectionInitialState = {
    activeSection,
    setActiveSection,
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!isLoading && !isUser) {
    return <ErrorPage />;
  }

  sessionStorage.removeItem("single_movie");

  return (
    <StyledMain>
      <Navigation pageTitle={"Account"} />
      <h1>Nice to See you </h1>
      <StyledContainer>
        <Component.UserData />
        <Component.AccountNav {...sectionInitialState} />
        <Component.AccountSections {...sectionInitialState} {...props} />
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
