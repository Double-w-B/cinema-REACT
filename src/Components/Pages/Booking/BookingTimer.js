import React from "react";
import styled, { keyframes, css } from "styled-components";

const BookingTimer = (props) => {
  const [minutes, setMinutes] = React.useState(5);
  const [seconds, setSeconds] = React.useState(59);
  const {
    setIsModal,
    setIsAuthModal,
    setIsBookingExpiredModal,
    isBookingSummaryModal,
    isLoadingModal,
    isAuthModal,
    setIsCardPaymentModal,
  } = props;

  React.useEffect(() => {
    let interval = setInterval(() => {
      if (isLoadingModal || isBookingSummaryModal || isAuthModal) {
        clearInterval(interval);
        return;
      }

      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          setIsAuthModal(false);
          setIsCardPaymentModal(false);
          setIsModal(true);
          setIsBookingExpiredModal(true);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <StyledContainer className="no-select" min={minutes}>
      {"0" + minutes}:{seconds < 10 ? "0" + seconds : seconds}
    </StyledContainer>
  );
};

const scale = keyframes`
  0% {
        transform: scale(1.0);
        color: var(--primary-white-clr);

    }
    50%{
        transform: scale(1.1);
        color: var(--primary-red-clr);
    }
    100% {
        transform: scale(1.0);
        color: var(--primary-white-clr);
    }
`;

const StyledContainer = styled.span`
  font-size: 1.2rem;
  margin-left: 0.2rem;
  font-weight: 400;
  color: #fff;
  display: flex;
  align-items: center;
  animation: ${(props) =>
    props.min < 1 &&
    css`
      ${scale} 1.2s infinite linear
    `};
`;

export default BookingTimer;
