import styled from "styled-components";
import { Container } from "./UserAccount.style";
import { SharedMain } from "../../../../style/shared";
import { AccountNavbar, Header } from "./AccountNavbar.style";
import { UserData, ImgContainer, DataContainer } from "./UserData.style";

const StyledUserAccount = styled(SharedMain)`
  transition: 0.3s linear;
  width: 1050px;

  @media screen and (max-width: 1150px) {
    width: 950px;
  }

  @media screen and (max-width: 1000px) {
    width: 93%;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 650px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

StyledUserAccount.Container = Container;
StyledUserAccount.UserData = UserData;
StyledUserAccount.ImgContainer = ImgContainer;
StyledUserAccount.DataContainer = DataContainer;
StyledUserAccount.AccountNavbar = AccountNavbar;
StyledUserAccount.Header = Header;

export default StyledUserAccount;
