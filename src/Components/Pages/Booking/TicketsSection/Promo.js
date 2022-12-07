import React from "react";
import StyledTickets from "./style";
import { IoMdCloseCircle } from "react-icons/io";
import { promoCodes } from "../../../../data/projectData";

const Promo = (props) => {
  const { inputValue, setInputValue, setIsPromoCode, isPromoCode } = props;

  const handleBtnClick = (e) => {
    e.preventDefault();
    if (promoCodes.includes(inputValue)) setIsPromoCode(true);
  };

  const handleDeletePromo = () => {
    setIsPromoCode(false);
    setInputValue("");
  };

  return (
    <StyledTickets.Promo isPromoCode={isPromoCode}>
      {isPromoCode ? (
        <p>
          Promo code: <span> {inputValue}</span>
          <IoMdCloseCircle onClick={handleDeletePromo} />
        </p>
      ) : (
        <form>
          <input
            type="text"
            value={inputValue}
            placeholder="Promo Code"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Promo Code")}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <StyledTickets.Button onClick={(e) => handleBtnClick(e)}>
            Add
          </StyledTickets.Button>
        </form>
      )}
    </StyledTickets.Promo>
  );
};

export default Promo;
