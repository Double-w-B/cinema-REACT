import React from "react";
import StyledAbout from "./style";
import banner_1 from "../../../assets/about_banner_1.webp";
import banner_2 from "../../../assets/about_banner_2.webp";

const Banner = () => {
  const [index, setIndex] = React.useState(0);

  const banners = [banner_1, banner_2];

  React.useEffect(() => {
    let slider = setInterval(() => {
      setIndex(() => {
        if (index === 0) return banners.length - 1;
        if (index === banners.length - 1) return 0;
      });
    }, 4500);
    return () => clearInterval(slider);
  }, [index, banners.length]);

  return (
    <StyledAbout.Banner>
      {banners.map((link, imgIndex) => {
        let position = "nextSlide";
        if (imgIndex === index) position = "activeSlide";
        if (imgIndex === index + 1) position = "nextSlide";
        if (imgIndex === index - 1) position = "lastSlide";

        return (
          <StyledAbout.ImgContainer className={position} key={imgIndex}>
            <img src={link} alt="" />;
          </StyledAbout.ImgContainer>
        );
      })}
      <div className="layer"></div>

      <StyledAbout.Title className="img1" index={index}>
        <div className="underline"></div>
        <p>
          Best place to watch <br /> a movie
        </p>
      </StyledAbout.Title>
      <StyledAbout.Title className="img2" index={index}>
        <div className="underline"></div>
        <p>
          Best place to spend
          <br /> time together
        </p>
      </StyledAbout.Title>
    </StyledAbout.Banner>
  );
};

export default Banner;
