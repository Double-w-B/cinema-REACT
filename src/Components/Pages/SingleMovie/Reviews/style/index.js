import styled from "styled-components";
import { LogInInfo } from "./Reviews.style";
import { UserReview, Stars, Button } from "./UserReview.style";
import { SingleReview, Author, Review } from "./SingleReview.style";

const StyledReviews = styled.section`
  width: 100%;
  margin: 2rem auto;
  padding: 1rem 0 2rem 0;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

StyledReviews.LogInInfo = LogInInfo;
StyledReviews.UserReview = UserReview;
StyledReviews.Stars = Stars;
StyledReviews.Button = Button;
StyledReviews.SingleReview = SingleReview;
StyledReviews.Author = Author;
StyledReviews.Review = Review;

export default StyledReviews;
