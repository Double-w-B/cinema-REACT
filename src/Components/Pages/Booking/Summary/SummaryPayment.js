import React from "react";
import styled, { keyframes } from "styled-components";
import payPalLogo from "../../../../Images/payPal.webp";
import visaLogo from "../../../../Images/visa.webp";
import gPayLogo from "../../../../Images/gPay.webp";
import applePayLogo from "../../../../Images/applePay.webp";
import { StyledButton } from "../../../Sliders/MoviesNowPlayingSlider";
import { useSelector } from "react-redux";

const SummaryPayment = (props) => {
  const [paymentMethod, setPaymentMethod] = React.useState(null);
  const [isShakeMsg, setIsShakeMsg] = React.useState(false);
  const summaryContainer = React.useRef("");

  const logos = [payPalLogo, visaLogo, gPayLogo, applePayLogo];
  const { bookingTime, bookingSeats, bookingNumberOfTickets } = useSelector(
    (store) => store.bookingTickets
  );
  const {
    scheduleContainer,
    ticketsContainer,
    seatsContainer,
    guestEmail,
    isShakeEmail,
    setIsShakeEmail,
  } = props;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsShakeMsg(false);
      setIsShakeEmail(false);
    }, 350);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [isShakeMsg, isShakeEmail]);

  const handleClick = () => {
    const showErrorContainer = (element) => {
      window.scrollTo({
        top: element.current.offsetTop - 10,
        behavior: "smooth",
      });
    };

    if (!bookingTime) {
      showErrorContainer(scheduleContainer);
      return;
    }
    if (!bookingNumberOfTickets) {
      showErrorContainer(ticketsContainer);
      return;
    }
    if (bookingSeats.length < 1) {
      showErrorContainer(seatsContainer);
      return;
    }
    if (!guestEmail.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
      showErrorContainer(summaryContainer);
      setIsShakeEmail(true);
      return;
    }
    if (paymentMethod == null) {
      showErrorContainer(summaryContainer);
      setIsShakeMsg(true);
      return;
    }
  };

  return (
    <StyledContainer isShakeMsg={isShakeMsg} ref={summaryContainer}>
      <p>Select a payment method</p>
      <div className="summary-payment-method">
        {logos.map((logo, index) => {
          return (
            <div
              key={index}
              className={paymentMethod === index ? "active" : ""}
              onClick={() => setPaymentMethod(index)}
            >
              <img src={logo} alt="" />
            </div>
          );
        })}
      </div>
      <StyledBtn onClick={handleClick}>Complete booking</StyledBtn>
    </StyledContainer>
  );
};

export const shake = keyframes`
  0% {
    transform: translate(0, 0);
  }
  1.78571% {
    transform: translate(8px, 0);
  }
  3.57143% {
    transform: translate(0, 0);
  }
  5.35714% {
    transform: translate(8px, 0);
  }
  7.14286% {
    transform: translate(0, 0);
  }
  8.92857% {
    transform: translate(8px, 0);
  }
  10.71429% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }

`;

const StyledContainer = styled.div`
  width: 35%;
  height: 100%;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    text-align: center;
    font-style: italic;
    color: var(--primary-grey-clr);
    -webkit-animation: ${(props) => props.isShakeMsg && shake};
    -moz-animation: ${(props) => props.isShakeMsg && shake};
    -o-animation: ${(props) => props.isShakeMsg && shake};
    animation: ${(props) => props.isShakeMsg && shake};
    animation-duration: 5.72s;
  }

  .summary-payment-method {
    width: 100%;
    height: 60%;
    display: grid;
    grid-template-columns: repeat(2, 48%);
    grid-template-rows: repeat(2, 48%);
    justify-content: space-between;
    gap: 0.5rem;

    div {
      border: 1px solid var(--primary-grey-clr);
      border-radius: 0.3rem;
      background-color: rgba(255, 255, 255, 0.1);
      transition: 0.3s linear;
      opacity: 0.7;
      cursor: pointer;

      &:hover {
        opacity: 1;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      &.active {
        opacity: 1;
        border: 1px solid var(--primary-white-clr);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      img {
        width: 100%;
        height: 100%;
        padding: 0.8rem;
        object-fit: contain;
        color: transparent;
      }
    }
  }
`;

const StyledBtn = styled(StyledButton)`
  position: relative;

  &:active {
    transform: scale(0.9);
  }
`;
export default SummaryPayment;
