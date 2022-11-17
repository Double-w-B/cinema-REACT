import React from "react";
import StyledCinemaCafe from "./style";
import Navigation from "../../shared/Navigation";
import bannerImg from "../../../assets/cafeBanner.webp";
import * as Component from "./index";

const CinemaCafePage = () => {
  const [index, setIndex] = React.useState(0);
  const [showDesc, setShowDesc] = React.useState(true);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledCinemaCafe>
      <Navigation pageTitle={"Cinema Cafe"} />
      <h1>CineMania Cafe</h1>
      <StyledCinemaCafe.Container>
        <StyledCinemaCafe.Banner>
          <img src={bannerImg} alt="" />
        </StyledCinemaCafe.Banner>
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
        <Component.Offers
          index={index}
          setIndex={setIndex}
          setShowDesc={setShowDesc}
        />
        <Component.OffersDescription
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
      </StyledCinemaCafe.Container>
    </StyledCinemaCafe>
  );
};

export default CinemaCafePage;
