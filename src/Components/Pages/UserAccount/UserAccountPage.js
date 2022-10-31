import React from "react";
import styled from "styled-components";
import Navigation from "../../Navigation";
import { StyledMainContainer } from "../SingleMoviePage/SingleMoviePage";
import * as Styles from "../UnlimitedPage/UnlimitedPage";
import UserData from "./UserData";
import AccountNav from "./AccountNav";
import AccountSections from "./AccountSections";

const UserAccountPage = (props) => {
  const [activeSection, setActiveSection] = React.useState(0);
  const { setIsModal, setIsLoadingModal } = props;

  const sectionInitialState = {
    activeSection,
    setActiveSection,
  };

  React.useEffect(() => {
    setIsModal(true);
    setIsLoadingModal(true);
    const timer = setTimeout(() => {
      setIsModal(false);
      setIsLoadingModal(false);
    }, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);

  return (
    <StyledMain>
      <Navigation pageTitle={"Account"} />
      <h1>Nice to See you </h1>
      <StyledContainer>
        <UserData />
        <AccountNav {...sectionInitialState} />
        <AccountSections {...sectionInitialState} />
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
