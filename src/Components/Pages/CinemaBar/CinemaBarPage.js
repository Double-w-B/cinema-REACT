import React from "react";
import styled from "styled-components";
import Navigation from "../../Navigation";
import { StyledMainContainer } from "../SingleMoviePage/SingleMoviePage";
import {
  StyledContentContainer,
  StyledBannerImg,
} from "../UnlimitedPage/UnlimitedPage";
import bannerImg from "../../../Images/cinemaBar.jpg";
import BarOffers from "./BarOffers";
import OffersDescription from "./OffersDescription";

const CinemaBarPage = () => {
  const [index, setIndex] = React.useState(0);
  const [showDesc, setShowDesc] = React.useState(true);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledMain>
      <Navigation pageTitle={"Cinema Bar"} />
      <h1>CineMania Bar</h1>
      <StyledContainer>
        <StyledBanner>
          <img src={bannerImg} alt="banner" />
        </StyledBanner>
        <p>
          Whether you're thirsting for a Frappuccino to enjoy alongside popcorn,
          looking for a place to relax and share the excitement with friends
          about the movie you've just seen, or simply want to grab a coffee on
          the way to work, in CineMania Bar you never know who you'll meet!
        </p>
        <p>
          Unlimited card holders get up to 25% discounts at CineMania Bar
          licensed stores. All you need to do is show your card at the counter
          and your discount will be applied. In CineMania Bar we serve a wide
          range of coffees, teas, cold drinks and freshly squeezed juices,
          served with ice cream, pastries and snacks.
        </p>
        <BarOffers
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
          climate-friendly place away from the hustle and bustle. CineMania Bar
          is a place to relax, socialize or talk to business. Unlimited wireless
          internet access will let you forget about coffee and ice. CineMania
          Bar is a unique pleasure and a moment of relaxation, not just before
          the movie but also after the movie and just to meet with your friends!
        </p>
      </StyledContainer>
    </StyledMain>
  );
};

const StyledMain = styled(StyledMainContainer)``;
const StyledContainer = styled(StyledContentContainer)`
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

const StyledBanner = styled(StyledBannerImg)`
  height: 30vh;
`;

export default CinemaBarPage;
