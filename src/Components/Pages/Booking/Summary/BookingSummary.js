import React from "react";
import styled from "styled-components";
import { StyledContentContainer } from "../../UnlimitedPage/UnlimitedPage";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledButton } from "../../../Sliders/MoviesNowPlayingSlider";
import payPalLogo from "../../../../Images/payPal.png";
import visaLogo from "../../../../Images/visa.png";
import gPayLogo from "../../../../Images/gPay.png";
import applePayLogo from "../../../../Images/applePay.png";

const BookingSummary = () => {
  const { imgLowResUrl } = useSelector((store) => store.movies);
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const {
    bookingMovieTitle,
    bookingDay,
    bookingTime,
    bookingTotalPrice,
    bookingSeats,
    bookingNumberOfTickets: allTickets,
    bookingAdultTickets: adultTickets,
    bookingChildTickets: childTickets,
    bookingSeniorTickets: seniorTickets,
  } = useSelector((store) => store.bookingTickets);

  const { poster_path } = singleMovieInfo;
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  const logos = [payPalLogo, visaLogo, gPayLogo, applePayLogo];
  const [paymentMethod, setPaymentMethod] = React.useState("");

  const numberOfTickets = () => {
    const allGroups = [adultTickets, childTickets, seniorTickets];
    const filteredGroup = allGroups
      .map((tickets, index) => {
        if (tickets > 0 && index === 0) {
          return `Adult x${tickets}`;
        }
        if (tickets > 0 && index === 1) {
          return `Child x${tickets}`;
        }
        if (tickets > 0 && index === 2) {
          return `Senior x${tickets}`;
        }
      })
      .filter((group) => group)
      .join(", ");

    return filteredGroup;
  };

  return (
    <StyledContainer>
      <h2>Booking Summary</h2>
      <StyledWrapper>
        <div className="summary-img">
          <img src={`${imgLowResUrl}${poster_path}`} alt="poster" />
        </div>
        <div className="summary-content">
          <h2>{bookingMovieTitle}</h2>
          <p>
            <span>Tickets:</span>{" "}
            {allTickets ? allTickets + ` (${numberOfTickets()})` : allTickets}
          </p>
          <p>
            <span>Date:</span> {bookingDay}
          </p>
          <p>
            <span>Time:</span> {bookingTime}
          </p>

          <p>
            <span>Seats:</span> {bookingSeats.join(", ")}
          </p>
          <p>
            <span>Total:</span> ${bookingTotalPrice}
          </p>
          {!isUser && (
            <label>
              Email address: <input type="email" required />
            </label>
          )}
        </div>
        <div className="summary-payment">
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
          <StyledBtn>Complete booking</StyledBtn>
        </div>
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

  .summary-content {
    width: 45%;
    height: 100%;
    padding: 0 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;

      span {
        color: var(--primary-grey-clr);
      }
    }

    label {
      color: var(--primary-grey-clr);

      input {
        width: 60%;
        border: none;
        outline: none;
        padding-left: 0.5rem;
        font-size: 1.05rem;
        border-radius: 2px;
        transition: 0.3s linear;
        background-color: transparent;
        border: 1px solid var(--primary-grey-clr);
        color: var(--primary-white-clr);

        &:hover {
          border: 1px solid var(--primary-white-clr);
        }
        &:focus {
          opacity: 1;
          border: 1px solid var(--primary-white-clr);
        }
      }
    }
  }

  .summary-payment {
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
          padding: 0.5rem;
          object-fit: contain;
          color: transparent;
        }
      }
    }
  }
`;

const StyledBtn = styled(StyledButton)`
  position: relative;
`;

export default BookingSummary;
