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
  const [isShakeTextarea, setIsShakeTextarea] = React.useState(false);

  const { user } = useAuth0();
  const { picture, given_name, name, sub: id } = user;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsShakeTextarea(false);
    }, 350);
    return () => clearTimeout(timer);
  }, [isShakeTextarea]);

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

  const handleRatingClass = (index) => {
    if (index <= ((rating && hover) || rating)) {
      return "mark";
    }
    return "";
  };

  const handleClick = () => {
    const userReview = {
      author: checkName(),
      author_details: {
        avatar_path: checkAvatar(),
        rating: rating === "-" ? null : rating + 1,
        id: id.split("|")[1],
      },
      content: review,
      created_at: new Date().toISOString(),
      id: singleMovieInfo?.id,
    };
    if (review.trim()) {
      return dispatch(addUserReview(userReview));
    }
    setIsShakeTextarea(true);
  };

  return (
    <StyledReviews.UserReview isShakeTextarea={isShakeTextarea}>
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
                  className={handleRatingClass(index)}
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
          placeholder="I don't know about you, but ..."
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) =>
            (e.target.placeholder = "I don't know about you, but ...")
          }
        ></textarea>
      </div>
      <StyledReviews.Button onClick={handleClick}>
        add review
      </StyledReviews.Button>
    </StyledReviews.UserReview>
  );
};

export default UserReview;
