import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const RSingleReview = () => {
  return (
    <StyledWrapper>
      <StyledAuthorContainer>
        <div className="avatar">
          <img
            src="https://www.gravatar.com/avatar/bf3b87ecb40599290d764e6d73c86319.jpg"
            alt="avatar"
          />
        </div>
        <div className="review-info">
          <div className="name-rating">
            <p>John Doe</p>
            <p>
              <AiFillStar />
              7.5 <span> / 10</span>
            </p>
          </div>
          <p>{new Date("2022-06-17T02:00:50.622Z").toLocaleDateString()}</p>
        </div>
      </StyledAuthorContainer>
      <StyledReviewContainer>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam
          neque expedita ducimus? Laborum labore doloribus, qui ea, ab voluptate
          velit possimus atque dolore necessitatibus amet, magnam unde
          perferendis id!
        </p>
      </StyledReviewContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.article`
  width: 96%;
  padding: 0.5rem;
  margin: 2rem auto;
  color: #fff;
  //   background-color: #c3c3c3;
  display: flex;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
`;

const StyledAuthorContainer = styled.div`
  width: 30%;
  display: flex;
  //   background-color: tomato;

  .avatar {
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    // background-color: thistle;

    img {
      width: 100%;
      height: 100%;
      max-width: 70px;
      max-height: 70px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }

  .review-info {
    width: 65%;
    height: 100%;
    padding-left: 0.5rem;

    .name-rating {
      margin-bottom: 0.5rem;
      p:first-child {
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
      }
      p:last-child {
        display: flex;
        align-items: center;
        color: #fff;
        svg {
          color: #f12535;
          font-size: 1.2rem;
        }
        span {
          color: rgba(255, 255, 255, 0.3);
        }
      }
    }

    p:last-child {
      color: rgba(255, 255, 255, 0.3);
    }
  }
`;

const StyledReviewContainer = styled.div`
  width: 70%;
  //   background-color: steelblue;

  p {
    text-align: justify;
  }
`;
export default RSingleReview;
