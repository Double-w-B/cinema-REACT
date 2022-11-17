import React from "react";
import Offers from "./Offers";
import StyledUnlimited from "./style";
import Navigation from "../../shared/Navigation";
import bannerImg from "../../../assets/unlim_banner.webp";
import { SharedBanner, SharedSection } from "../../../style/shared";

const UnlimitedPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledUnlimited>
      <Navigation pageTitle={"Unlimited"} />
      <h1>Unlimited Movies Card</h1>

      <SharedSection>
        <SharedBanner>
          <img src={bannerImg} alt="" />
        </SharedBanner>

        <StyledUnlimited.InfoContainer>
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
            Unlimited Movies Card can be done in minutes online and you can
            start using it straight away.
          </p>
          <p>
            To get more information call 04030 3030 0333 or ask for more details
            in CineMania.
          </p>
        </StyledUnlimited.InfoContainer>
      </SharedSection>
    </StyledUnlimited>
  );
};

export default UnlimitedPage;
