import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Sliders/MoviesNowPlayingSlider";

const RUserReview = () => {
  return (
    <StyledContainer>
      <div className="review">
        <p>Your Review:</p>
        <textarea cols="30" rows="10"></textarea>
      </div>
      <StyledBtn>add review</StyledBtn>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 96%;
  margin: 1rem auto 2rem auto;

  .review {
    width: 100%;
    display: flex;
    padding-right: 0.5rem;

    p {
      font-size: 1.2rem;
      width: 25%;
      text-align: center;
      font-style: italic;
      margin: 0 auto;
      color: rgba(255, 255, 255, 0.3);
    }

    textarea {
      width: 70%;
      resize: none;
      outline: none;
      padding: 0.5rem;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.3);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
`;

const StyledBtn = styled(StyledButton)`
  position: relative;
  display: block;
  font-size: 1rem;
  margin: 1rem 0.5rem 0 auto;
`;
export default RUserReview;
