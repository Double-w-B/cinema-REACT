import React from "react";
import styled from "styled-components";
import { StyledContentContainer } from "../../UnlimitedPage/UnlimitedPage";
import { useSelector } from "react-redux";
import SummaryPayment from "./SummaryPayment";
import SummaryContent from "./SummaryContent";

const BookingSummary = (props) => {
  const [guestEmail, setGuestEmail] = React.useState("");
  const [isShakeEmail, setIsShakeEmail] = React.useState(false);

  const { imgLowResUrl } = useSelector((store) => store.movies);
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { poster_path } = singleMovieInfo;

  const emailState = {
    guestEmail,
    setGuestEmail,
    isShakeEmail,
    setIsShakeEmail,
  };
  return (
    <StyledContainer>
      <h2>Booking Summary</h2>
      <StyledWrapper>
        <div className="summary-img">
          <img src={`${imgLowResUrl}${poster_path}`} alt="poster" />
        </div>
        <SummaryContent {...emailState} />
        <SummaryPayment {...props} {...emailState} />
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
