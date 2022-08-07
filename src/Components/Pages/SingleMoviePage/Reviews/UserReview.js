import React from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Sliders/MoviesNowPlayingSlider";
import { AiFillStar } from "react-icons/ai";
import { ratesTitle } from "../../../../data";

const UserReview = () => {
  const [rating, setRating] = React.useState("none");
  const [hover, setHover] = React.useState(0);
  const [review, setReview] = React.useState("");

  return (
    <StyledContainer>
      <div className="review">
        <div className="rating">
          <p>Your Review:</p>
          <StyledStarsContainer>
            <p>Your Rating:</p>
            <span>
              {Array.from({ length: 10 }, (el, index) => (
                <AiFillStar
                  key={index}
                  title={ratesTitle[index]}
                  className={
                    index <= ((rating && hover) || rating) ? "mark" : ""
                  }
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                />
              ))}
            </span>
          </StyledStarsContainer>
        </div>
        <textarea
          cols="30"
          rows="10"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
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

    .rating {
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 30%;
      text-align: center;
      font-style: italic;
      margin: 0 auto;
      color: rgba(255, 255, 255, 0.3);
      /* background-color: tomato; */
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
      cursor: text;
    }
  }
`;

const StyledStarsContainer = styled.div`
  width: 100%;

  p {
    margin-bottom: 1rem;
  }

  span {
    cursor: pointer;

    svg {
      transition: all 0.1s linear;

      &:hover {
        color: var(--primary-red-clr);
      }
      &.mark {
        color: var(--primary-red-clr);
      }
    }

    * {
      cursor: pointer;
    }
  }
`;

const StyledBtn = styled(StyledButton)`
  position: relative;
  display: block;
  font-size: 1rem;
  margin: 1rem 0.5rem 0 auto;
`;
export default UserReview;
