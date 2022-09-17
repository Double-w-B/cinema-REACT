import React from "react";
import styled from "styled-components";
import Navigation from "../../Navigation";
import { StyledMainContainer } from "../SingleMoviePage/SingleMoviePage";
import * as Styles from "../UnlimitedPage/UnlimitedPage";
import bannerImg from "../../../Images/cafeBanner.webp";
import CafeOffers from "./CafeOffers";
import OffersDescription from "./OffersDescription";

const CinemaCafePage = () => {
  const [index, setIndex] = React.useState(0);
  const [showDesc, setShowDesc] = React.useState(true);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledMain>
      <Navigation pageTitle={"Cinema Cafe"} />
      <h1>CineMania Cafe</h1>
      <StyledContainer>
        <StyledBanner>
          <img src={bannerImg} alt="banner" />
        </StyledBanner>
        <p>
          Whether you're thirsting for a Frappuccino to enjoy alongside popcorn,
          looking for a place to relax and share the excitement with friends
          about the movie you've just seen, or simply want to grab a coffee on
          the way to work, in CineMania Cafe you never know who you'll meet!
        </p>
        <p>
          Unlimited card holders get up to 25% discounts at CineMania Cafe
          licensed stores. All you need to do is show your card at the counter
          and your discount will be applied. In CineMania Cafe we serve a wide
          range of coffees, teas, cold drinks and freshly squeezed juices,
          served with ice cream, pastries and snacks.
        </p>
        <CafeOffers
          index={index}
          setIndex={setIndex}
          setShowDesc={setShowDesc}
        />
        <OffersDescription
          index={index}
          showDesc={showDesc}
          setShowDesc={setShowDesc}
        />

        <p>
          Aromatic, freshly brewed coffee, frozen tea, tasty dessert, nutritious
          sandwich, hot dog or even a pizza! All in a particularly
          climate-friendly place away from the hustle and bustle. CineMania Cafe
          is a place to relax, socialize or talk to business. Unlimited wireless
          internet access will let you forget about coffee and ice. CineMania
          Cafe is a unique pleasure and a moment of relaxation, not just before
          the movie but also after the movie and just to meet with your friends!
        </p>
      </StyledContainer>
    </StyledMain>
  );
};

const StyledMain = styled(StyledMainContainer)``;
const StyledContainer = styled(Styles.StyledContentContainer)`
  min-height: 125vh;

  p {
    &:nth-child(2) {
      margin-top: 2rem;
    }

    font-size: 1.1rem;
    margin: 1rem 2rem;
    text-align: justify;
  }
`;

const StyledBanner = styled(Styles.StyledBannerImg)`
  height: 30vh;
`;

export default CinemaCafePage;
