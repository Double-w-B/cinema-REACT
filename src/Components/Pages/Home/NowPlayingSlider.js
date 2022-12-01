import React from "react";
import StyledHomePage from "./style";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import * as Styled from "../../../style/shared";
import * as singleMovieSlice from "../../../redux/features/movies/singleMovieSlice";
import * as bookingSlice from "../../../redux/features/booking/bookingSlice";

const NowPlayingSlider = () => {
  const dispatch = useDispatch();

  const [index, setIndex] = React.useState(0);
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);

  const { moviesNowPlaying, nowPlayingIsLoading, imgHiResUrl } = useSelector(
    (store) => store.movies
  );
  const firstSixMovies = moviesNowPlaying.slice(0, 6);

  React.useEffect(() => {
    const changeValue = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", changeValue);
    return () => window.removeEventListener("resize", changeValue);
  });

  React.useEffect(() => {
    const lastIndex = firstSixMovies.length - 1;
    index < 0 && setIndex(lastIndex);
    index > lastIndex && setIndex(0);
  }, [index, firstSixMovies.length]);

  React.useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > firstSixMovies.length - 1) index = 0;
        return index;
      });
    }, 6000);
    return () => clearInterval(slider);
  }, [index, firstSixMovies.length]);

  const setActiveImage = () => {
    return firstSixMovies.map((movie, movieIndex) => {
      const { id, backdrop_path, title } = movie;

      const setPath = () => {
        const urlMovieTitle = title.split(" ").join("_");
        return `/nowPlaying/${urlMovieTitle}/booking`;
      };

      const handleClick = () => {
        sessionStorage.removeItem("single_movie");
        dispatch(singleMovieSlice.removeSingleMovieData());
        dispatch(singleMovieSlice.getSingleMovieInfo(id));
        dispatch(singleMovieSlice.getSingleMovieVideos(id));
        dispatch(singleMovieSlice.getSingleMovieReviews(id));
        dispatch(bookingSlice.addBookingMovieId(id));
        dispatch(bookingSlice.addBookingMovieTitle(title));
      };

      let position = "nextSlide";
      if (movieIndex === index) position = "activeSlide";

      if (
        movieIndex === index - 1 ||
        (index === 0 && movieIndex === firstSixMovies.length - 1)
      )
        position = "lastSlide";

      const checkTitleLength = () => {
        if (title.length > 20 && windowSize < 1000) {
          const tempTitle = title.split(" ");
          const firstPartTitle = tempTitle.slice(0, 2).join(" ");
          const secondPartTitle = tempTitle
            .slice(2, tempTitle.length)
            .join(" ");

          return (
            <>
              <p>{firstPartTitle}</p>
              <p>{secondPartTitle}</p>
            </>
          );
        }
        return <p>{title}</p>;
      };

      return (
        <StyledHomePage.NowPlayingSlider.ImgContainer
          key={id}
          className={position}
          title={title}
        >
          <img src={imgHiResUrl + backdrop_path} alt="" />
          <div className="layer"></div>
          <div className="title">{checkTitleLength()}</div>
          <Link to={setPath()} onClick={handleClick} draggable="false">
            <Styled.SharedButton className="btn-slider">
              book now
            </Styled.SharedButton>
          </Link>
        </StyledHomePage.NowPlayingSlider.ImgContainer>
      );
    });
  };

  return (
    <StyledHomePage.NowPlayingSlider className="no-select">
      <Styled.SharedArrowContainer
        className="left"
        onClick={() => setIndex(index - 1)}
      >
        <FaChevronLeft />
      </Styled.SharedArrowContainer>
      <Styled.SharedArrowContainer
        className="right"
        onClick={() => setIndex(index + 1)}
      >
        <FaChevronRight />
      </Styled.SharedArrowContainer>
      {!nowPlayingIsLoading && setActiveImage()}
    </StyledHomePage.NowPlayingSlider>
  );
};

export default NowPlayingSlider;
