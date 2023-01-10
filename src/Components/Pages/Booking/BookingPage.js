import React from "react";
import * as Component from "./index";
import * as Shared from "../../shared";
import StyledBookingPage from "./style";
import { RiTimerLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as modalsSlice from "../../../redux/features/modals/modalsSlice";
import * as singleMovieSlice from "../../../redux/features/movies/singleMovieSlice";

const BookingPage = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { moviesNowPlaying, nowPlayingIsLoading } = useSelector(
    (store) => store.movies
  );
  const [isError, setIsError] = React.useState(false);
  const [isPageLoading, setIsPageLoading] = React.useState(false);

  const { title } = singleMovieInfo;

  const { isAuthenticated, user, isLoading } = useAuth0();
  const isUser = isAuthenticated && user;

  const movieTitle = storedData?.title || title;
  const isMovieData = Object.keys(singleMovieInfo).length > 0;

  const scheduleContainer = React.useRef("");
  const ticketsContainer = React.useRef("");
  const seatsContainer = React.useRef("");

  const refs = {
    scheduleContainer,
    ticketsContainer,
    seatsContainer,
  };

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  React.useEffect(() => {
    if (!isLoading && !isUser && isMovieData) {
      dispatch(modalsSlice.handleIsModal(true));
      dispatch(modalsSlice.handleIsAuthModal(true));
    }
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    window.onpopstate = () => {
      dispatch(modalsSlice.hideAllModals());
    };
  });

  React.useEffect(() => {
    if (nowPlayingIsLoading && !isMovieData) {
      setIsPageLoading(true);
    }

    if (!nowPlayingIsLoading && !isMovieData) {
      const currentRoute = location.pathname;
      const endpoint = currentRoute.split("/").at(-2).split("_").join(" ");
      const foundMovie = moviesNowPlaying.find(
        (movie) => movie.title === endpoint
      );
      if (foundMovie) {
        dispatch(singleMovieSlice.getSingleMovieInfo(foundMovie.id));
        dispatch(singleMovieSlice.getSingleMovieVideos(foundMovie.id));
        dispatch(singleMovieSlice.getSingleMovieReviews(foundMovie.id));
        setIsPageLoading(false);
      } else {
        setIsError(true);
        const timer = setTimeout(() => {
          setIsPageLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
    // eslint-disable-next-line
  }, [nowPlayingIsLoading]);

  if ((nowPlayingIsLoading || isPageLoading) && !isError) {
    return <Shared.Loading />;
  }

  if (isError) {
    return <Shared.Error />;
  }

  return (
    <StyledBookingPage>
      <Shared.Navigation
        title={"Tickets"}
        pageTitle={movieTitle}
        booking={true}
      />
      <h1>
        Booking <RiTimerLine />
        <Component.Timer {...props} />
      </h1>
      <Component.Schedule {...refs} {...props} />
      <Component.Tickets {...refs} />
      <Component.Seats {...refs} />
      <Component.Summary {...refs} {...props} />
    </StyledBookingPage>
  );
};

export default BookingPage;
