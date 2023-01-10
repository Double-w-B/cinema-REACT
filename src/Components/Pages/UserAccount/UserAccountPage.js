import React from "react";
import * as Component from "./index";
import * as Shared from "../../shared";
import StyledUserAccount from "./style";
import { useAuth0 } from "@auth0/auth0-react";

const UserAccountPage = (props) => {
  const [activeSection, setActiveSection] = React.useState(0);
  const { isAuthenticated, user, isLoading } = useAuth0();
  const isUser = isAuthenticated && user;

  const sectionInitialState = {
    activeSection,
    setActiveSection,
  };

  if (isLoading) {
    return <Shared.Loading />;
  }

  if (!isLoading && !isUser) {
    return <Shared.Error />;
  }

  sessionStorage.removeItem("single_movie");

  return (
    <StyledUserAccount>
      <Shared.Navigation pageTitle={"Account"} />
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
