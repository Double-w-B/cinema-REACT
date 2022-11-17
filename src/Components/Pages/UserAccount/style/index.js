import styled from "styled-components";
import { Container } from "./UserAccount.style";
import { SharedMain } from "../../../../style/shared";
import { AccountNavbar, Header } from "./AccountNavbar.style";
import { UserData, ImgContainer, DataContainer } from "./UserData.style";

const StyledUserAccount = styled(SharedMain)``;

StyledUserAccount.Container = Container;
StyledUserAccount.UserData = UserData;
StyledUserAccount.ImgContainer = ImgContainer;
StyledUserAccount.DataContainer = DataContainer;
StyledUserAccount.AccountNavbar = AccountNavbar;
StyledUserAccount.Header = Header;

export default StyledUserAccount;
