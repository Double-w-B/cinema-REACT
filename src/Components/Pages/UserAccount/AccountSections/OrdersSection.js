import React from "react";
import SingleOrder from "./SingleOrder";
import { useSelector } from "react-redux";
import StyledAccountSections from "./style";
import spinnerImg from "../../../../assets/spinner_3.gif";

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
      <StyledAccountSections.OrdersSection className="center">
        <img src={spinnerImg} alt="" />
      </StyledAccountSections.OrdersSection>
    );
  }

  if (userOrders.length === 0) {
    return (
      <StyledAccountSections.OrdersSection className="center">
        <h2>No orders found</h2>
        <p>Looks like you haven't made any orders yet.</p>
      </StyledAccountSections.OrdersSection>
    );
  }

  return (
    <StyledAccountSections.OrdersSection ref={container}>
      {userOrders.map((order, index) => {
        return <SingleOrder {...order} key={index} {...props} />;
      })}
    </StyledAccountSections.OrdersSection>
  );
};

export default OrdersSection;
