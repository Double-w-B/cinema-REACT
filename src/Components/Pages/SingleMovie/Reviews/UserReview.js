import React from "react";
import StyledReviews from "./style";
import { AiFillStar } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { ratesTitle } from "../../../../data/projectData";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addUserReview } from "../../../../redux/features/movies/singleMovieSlice";

const UserReview = () => {
  const dispatch = useDispatch();

  const { name: userName, avatar: userAvatar } = useSelector(
    (store) => store.singleMovie
  );
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const [rating, setRating] = React.useState("-");
  const [hover, setHover] = React.useState(0);
  const [review, setReview] = React.useState("");

  const { user } = useAuth0();
  const { picture, given_name, name, sub: id } = user;

  const checkAvatar = () => {
    if (userName) {
      return userName;
    }
    return picture;
  };

  const checkName = () => {
    if (userAvatar) return userAvatar;

    if (given_name) {
      return given_name;
    } else {
      return name.split(" ")[0];
    }
  };

  const showDate = () => {
    review.trim() &&
      dispatch(
        addUserReview({
          author: checkName(),
          author_details: {
            avatar_path: checkAvatar(),
            rating: rating === "-" ? null : rating + 1,
            id: id.split("|")[1],
          },
          content: review,
          created_at: new Date().toISOString(),
          id: singleMovieInfo?.id,
        })
      );
  };

  return (
    <StyledReviews.UserReview>
      <div className="review">
        <div className="rating">
          <p>Your Review:</p>
          <StyledReviews.Stars>
            <p className="stars">Your Rating:</p>
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
          </StyledReviews.Stars>
        </div>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
      </div>
      <StyledReviews.Button onClick={showDate}>add review</StyledReviews.Button>
    </StyledReviews.UserReview>
  );
};

export default UserReview;
