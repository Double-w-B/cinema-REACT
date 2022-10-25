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
  const [userEmail, setUserEmail] = React.useState("");
  const [isShakeEmail, setIsShakeEmail] = React.useState(false);
  const [isSeatsEqTicketsAmount, setIsSeatsEqTicketsAmount] =
    React.useState(false);

  const { imgLowResUrl } = useSelector((store) => store.movies);
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { poster_path } = singleMovieInfo;

  const initialState = {
    userEmail,
    setUserEmail,
    isShakeEmail,
    setIsShakeEmail,
    isSeatsEqTicketsAmount,
    setIsSeatsEqTicketsAmount,
  };

  const { user } = useAuth0();

  React.useEffect(() => {
    if (user && user.email !== null) {
      setUserEmail(user.email);
    }
  }, [user]);

  React.useEffect(() => {
    dispatch(addBookingEmail(userEmail));
    // eslint-disable-next-line
  }, [userEmail]);

  return (
    <StyledContainer>
      <h2>Booking Summary</h2>
      <StyledWrapper>
        <div className="summary-img">
          <img src={`${imgLowResUrl}${poster_path}`} alt="poster" />
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

  .summary-img {
    width: 20%;
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
