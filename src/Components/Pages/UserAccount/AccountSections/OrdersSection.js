import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SingleOrder from "./SingleOrder";
import spinnerImg from "../../../../Images/spinner_3.gif";

const OrdersSection = (props) => {
  const storedData = JSON.parse(sessionStorage.getItem("bookings"));
  const { orders } = useSelector((store) => store.userData);
  const [isLoading, setIsLoading] = React.useState(true);
  const container = React.useRef(null);

  const userOrders = storedData || orders;

  React.useEffect(() => {
    if (container) {
      const timer = setTimeout(() => {
        container.current?.scrollTo(0, 0);
      }, 350);
      return () => clearTimeout(timer);
    }
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <StyledContainer className="center">
        <img src={spinnerImg} alt="" />
      </StyledContainer>
    );
  }

  if (userOrders.length === 0) {
    return (
      <StyledContainer className="center">
        <h2>No orders found</h2>
        <p>Looks like you haven't made any orders yet.</p>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer ref={container}>
      {userOrders.map((order, index) => {
        return <SingleOrder {...order} key={index} {...props} />;
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 3rem;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      color: var(--primary-grey-clr);
      font-size: 1.2rem;
      font-style: italic;
      margin-top: 2rem;
    }
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #0a0f18;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #434343;
  }
`;

export default OrdersSection;
