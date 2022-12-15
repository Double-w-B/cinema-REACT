import React from "react";
import StyledBookingPage from "./style";
import { useDispatch, useSelector } from "react-redux";
import * as modalsSlice from "../../../redux/features/modals/modalsSlice";

const Timer = () => {
  const dispatch = useDispatch();

  const { isAuthModal, isBookingSummaryModal, isLoadingModal } = useSelector(
    (store) => store.modals
  );

  const [minutes, setMinutes] = React.useState(5);
  const [seconds, setSeconds] = React.useState(59);

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
          dispatch(modalsSlice.handleIsAuthModal(false));
          dispatch(modalsSlice.handleIsCardPaymentModal(false));
          dispatch(modalsSlice.handleIsMenuModal(false));
          dispatch(modalsSlice.handleIsModal(true));
          dispatch(modalsSlice.handleIsBookingExpiredModal(true));
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
