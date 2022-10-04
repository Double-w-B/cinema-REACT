import React from "react";
import styled from "styled-components";
import { promoCodes } from "../../../../data";
import { IoMdCloseCircle } from "react-icons/io";

const Promo = (props) => {
  const { inputValue, setInputValue, setIsPromoCode, isPromoCode } = props;

  const handleBtnClick = (e) => {
    e.preventDefault();
    if (promoCodes.includes(inputValue)) setIsPromoCode(true);
  };

  const handlePromoClick = () => {
    setIsPromoCode(false);
    setInputValue("");
  };

  return (
    <StyledContainer isPromoCode={isPromoCode}>
      {isPromoCode ? (
        <>
          <p>
            Promo code: <span> {inputValue}</span>
            <IoMdCloseCircle onClick={handlePromoClick} />
          </p>
        </>
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
          <button onClick={(e) => handleBtnClick(e)}>Add</button>
        </form>
      )}
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isPromoCode ? " flex-start" : "center")};

  p {
    margin-left: 2rem;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    span {
      margin-left: 2rem;
      color: green;
    }

    svg {
      font-size: 1.2rem;
      margin-left: 1rem;
      color: var(--primary-red-clr);
      cursor: pointer;
    }
  }

  form {
    width: 90%;
    height: 80%;
    display: flex;
    align-items: center;

    input {
      min-width: 250px;
      min-height: 35px;
      margin-right: 1rem;
      outline: none;
      padding-left: 1rem;
      color: var(--primary-white-clr);
      font-size: 1.3rem;
      border: 1px solid var(--primary-grey-clr);
      border-radius: 0.3rem;
      background-color: transparent;
      position: relative;

      &::placeholder {
        opacity: 0.15;
        font-size: 1.2rem;
      }
      &:focus {
        border-color: var(--primary-white-clr);
      }
    }

    button {
      min-width: 60px;
      min-height: 30px;
      cursor: pointer;
      border-radius: 0.3rem;
      outline: none;
      font-size: 1.3rem;
      color: #fff;
      border: 1px solid #f12535;
      background-color: rgba(241, 37, 53, 0.3);
      opacity: 0.75;
      transition: all 0.3s linear;
      &:hover {
        opacity: 1;
        background-color: var(--primary-red-clr);
      }
      &:active {
        transform: scale(0.7);
      }
    }
  }
`;
export default Promo;
