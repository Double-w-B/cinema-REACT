import React from "react";
import * as Component from "./index";
import Error from "../../shared/Error";
import StyledUserAccount from "./style";
import Loading from "../../shared/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import Navigation from "../../shared/Navigation";

const UserAccountPage = (props) => {
  const [activeSection, setActiveSection] = React.useState(0);
  const { isAuthenticated, user, isLoading } = useAuth0();
  const isUser = isAuthenticated && user;

  const sectionInitialState = {
    activeSection,
    setActiveSection,
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !isUser) {
    return <Error />;
  }

  sessionStorage.removeItem("single_movie");

  return (
    <StyledUserAccount>
      <Navigation pageTitle={"Account"} />
      <h1>Nice to See you </h1>
      <StyledUserAccount.Container>
        <Component.UserData />
        <Component.AccountNavbar {...sectionInitialState} />
        <Component.AccountSections {...sectionInitialState} {...props} />
      </StyledUserAccount.Container>
    </StyledUserAccount>
  );
};

export default UserAccountPage;
