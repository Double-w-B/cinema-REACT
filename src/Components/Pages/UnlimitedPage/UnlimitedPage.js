import React from "react";
import styled from "styled-components";
import Navigation from "../../Navigation";
import bannerImg from "../../../Images/unlim_banner.webp";
import Offers from "./Offers";

const UnlimitedPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledMainContainer>
      <Navigation pageTitle={"Unlimited"} />
      <h1>Unlimited Movies Card</h1>

      <StyledContentContainer>
        <StyledBannerImg>
          <img src={bannerImg} alt="banner" />
        </StyledBannerImg>

        <StyledInfoContainer>
          <p>
            With an Unlimited Movies Card, you can watch as many movies as you
            want, as many times as you want, whenever you want, wherever you
            want. Plus, get advance tickets as soon as they go on sale, save
            from 10% on all food and non-alcoholic beverages in cinema and enjoy
            the many other benefits.
          </p>

          <Offers />

          <p>
            Pay for your card either monthly or in one lump sum and then come to
            CineMania at any time to see as many films as you want. Getting your
            Unlimited Movies Card can be done in minutes online and you can start using
            it straight away.
          </p>
          <p>To get more information call 04030 3030 0333 or ask for more details in CineMania.</p>
        </StyledInfoContainer>
      </StyledContentContainer>
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.main`
  width: 70%;
  margin: 2rem auto;
  color: var(--primary-white-clr);
  cursor: default;
`;

const StyledContentContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 1rem;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledBannerImg = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px,
      inset rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

const StyledInfoContainer = styled.article`
  width: 100%;
  padding: 2rem 1rem 1rem 1rem;
  font-size: 1.1rem;


  p {
    text-align: justify;
    &:last-child{
      margin-top:1rem;
    }
  }
`;

export default UnlimitedPage;
