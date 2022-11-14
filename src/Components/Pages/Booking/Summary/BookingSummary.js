import React from "react";
import styled from "styled-components";
import { StyledContentContainer } from "../../UnlimitedPage/UnlimitedPage";
import { useSelector, useDispatch } from "react-redux";
import { addBookingEmail } from "../../../../features/booking/bookingSlice";
import SummaryPayment from "./SummaryPayment";
import SummaryContent from "./SummaryContent";
import { useAuth0 } from "@auth0/auth0-react";

const BookingSummary = (props) => {
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
    <StyledContainer>
      <h2 className="no-select">Booking Summary</h2>
      <StyledWrapper>
        <div className="summary-img no-select">
          <img src={`${imgLowResUrl}${moviePoster}`} alt="" />
        </div>
        <SummaryContent {...initialState} />
        <SummaryPayment {...props} {...initialState} />
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled(StyledContentContainer)`
  padding: 1rem;
`;
const StyledWrapper = styled.div`
  width: 95%;
  height: 30vh;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;

  .summary-img {
    width: 160px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      color: transparent;
      filter: drop-shadow(0px 5px 15px black);
    }
  }
`;

export default BookingSummary;
