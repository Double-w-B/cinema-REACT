import React from "react";
import StyledLoading from "./style/Loading.style";
import spinner from "../../assets/spinner_loading.gif";

const Loading = () => {
  return (
    <StyledLoading>
      <img src={spinner} alt="" />
    </StyledLoading>
  );
};

export default Loading;
