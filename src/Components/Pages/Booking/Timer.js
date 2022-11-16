import React from "react";
import StyledBookingPage from "./style";

const Timer = (props) => {
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
    <StyledBookingPage.Timer className="no-select" min={minutes}>
      {"0" + minutes}:{seconds < 10 ? "0" + seconds : seconds}
    </StyledBookingPage.Timer>
  );
};

export default Timer;
