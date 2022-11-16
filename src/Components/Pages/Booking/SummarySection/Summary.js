import React from "react";
import StyledSummary from "./style";
import { useSelector, useDispatch } from "react-redux";
import { addBookingEmail } from "../../../../redux/features/booking/bookingSlice";
import { useAuth0 } from "@auth0/auth0-react";
import * as Component from "./index";

const Summary = (props) => {
  const dispatch = useDispatch();
  const { user } = useAuth0();

  const [userEmail, setUserEmail] = React.useState("");
  const [isShakeEmail, setIsShakeEmail] = React.useState(false);
  const [isSeatsEqTicketsAmount, setIsSeatsEqTicketsAmount] =
    React.useState(false);
  const { imgLowResUrl } = useSelector((store) => store.movies);
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { email: storedEmail } = useSelector((store) => store.userData);
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));

  const { poster_path } = singleMovieInfo;
  const moviePoster = storedData?.poster_path || poster_path;

  const initialState = {
    userEmail,
    setUserEmail,
    isShakeEmail,
    setIsShakeEmail,
    isSeatsEqTicketsAmount,
    setIsSeatsEqTicketsAmount,
  };

  React.useEffect(() => {
    setUserEmail(storedEmail);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    setUserEmail(user?.email);
  }, [user]);

  React.useEffect(() => {
    dispatch(addBookingEmail(userEmail));
    // eslint-disable-next-line
  }, [userEmail]);

  return (
    <StyledSummary>
      <h2 className="no-select">Booking Summary</h2>
      <StyledSummary.Container>
        <div className="summary-img no-select">
          <img src={`${imgLowResUrl}${moviePoster}`} alt="" />
        </div>
        <Component.Order {...initialState} />
        <Component.PaymentMethod {...props} {...initialState} />
      </StyledSummary.Container>
    </StyledSummary>
  );
};

export default Summary;
