import React from "react";
import styled from "styled-components";
import payPalLogo from "../../../../Images/payPal.png";
import visaLogo from "../../../../Images/visa.png";
import gPayLogo from "../../../../Images/gPay.png";
import applePayLogo from "../../../../Images/applePay.png";
import { StyledButton } from "../../../Sliders/MoviesNowPlayingSlider";

const SummaryPayment = () => {
  const logos = [payPalLogo, visaLogo, gPayLogo, applePayLogo];
  const [paymentMethod, setPaymentMethod] = React.useState("");
  return (
    <StyledContainer>
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
    </StyledContainer>
  );
};

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
`;

const StyledBtn = styled(StyledButton)`
  position: relative;
`;
export default SummaryPayment;
