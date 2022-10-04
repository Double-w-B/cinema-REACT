import React from "react";
import styled from "styled-components";
import { movieTickets } from "../../../../data";

const Separator = (props) => {
  const {
    adultTickets,
    setAdultTickets,
    childTickets,
    setChildTickets,
    seniorTickets,
    setSeniorTickets,
  } = props;
  const categories = [adultTickets, childTickets, seniorTickets];

  const handleMinusBtn = (category, price) => {
    if (category === "Adult") {
      adultTickets > 0 && setAdultTickets(adultTickets - 1);
    }
    if (category === "Child") {
      childTickets > 0 && setChildTickets(childTickets - 1);
    }
    if (category === "Senior") {
      seniorTickets > 0 && setSeniorTickets(seniorTickets - 1);
    }
  };
  const handlePlusBtn = (category, price) => {
    if (category === "Adult") {
      adultTickets < 10 && setAdultTickets(adultTickets + 1);
    }
    if (category === "Child") {
      childTickets < 10 && setChildTickets(childTickets + 1);
    }
    if (category === "Senior") {
      seniorTickets < 10 && setSeniorTickets(seniorTickets + 1);
    }
  };
  return (
    <StyledContainer>
      {movieTickets.map((categoryTicket, index) => {
        const { category, price } = categoryTicket;
        return (
          <StyledSection key={index}>
            <div className="category">
              <p>{category}</p>
            </div>
            <div className="price">
              <p>${price}</p>
            </div>
            <div className="number">
              <button
                className="minus"
                onClick={() => handleMinusBtn(category, price)}
              >
                -
              </button>
              <p>{categories[index]}</p>
              <button
                className="plus"
                onClick={() => handlePlusBtn(category, price)}
              >
                +
              </button>
            </div>
          </StyledSection>
        );
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 0 2rem;
`;

const centerItem = `
display: grid;
place-items: center;
`;

const StyledSection = styled.div`
  width: 80%;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid white;

  .category {
    width: 40%;
    height: 100%;
    ${centerItem};

    p {
      font-size: 1.3rem;
      font-weight: bold;
    }
  }
  .price {
    width: 35%;
    height: 100%;
    ${centerItem};

    p {
      font-size: 1.2rem;
      color: var(--primary-red-clr);
    }
  }
  .number {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
      font-size: 1.2rem;
      width: 2rem;
      text-align: center;
    }

    button {
      min-width: 40px;
      min-height: 30px;
      cursor: pointer;
      border-radius: 0.3rem;
      outline: none;
      font-size: 1.5rem;
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
export default Separator;
