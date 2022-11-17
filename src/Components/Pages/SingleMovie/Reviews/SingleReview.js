import React from "react";
import StyledReviews from "./style";
import MarkdownView from "react-showdown";
import { AiFillStar } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import logoImg from "../../../../assets/Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { removeUserReview } from "../../../../redux/features/movies/singleMovieSlice";

const SingleReview = (props) => {
  const dispatch = useDispatch();
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));

  const { name: userName, avatar: userAvatar } = useSelector(
    (store) => store.userData
  );
  const { imgLowResUrl } = useSelector((store) => store.movies);
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const [readMore, setReadMore] = React.useState(false);
  const { user, isAuthenticated } = useAuth0();

  const isUser = isAuthenticated && user;
  const movieId = storedData?.id || singleMovieInfo.id;

  const {
    author,
    author_details: { avatar_path, rating },
    content,
    created_at,
    id,
  } = props;

  const showAvatar = () => {
    if (movieId === id) {
      return userAvatar || user?.picture || avatar_path || logoImg;
    }
    if (avatar_path === null) return logoImg;

    if (avatar_path.slice(1, 6) === "https") {
      return avatar_path.slice(1);
    }

    return imgLowResUrl + avatar_path;
  };

  const showName = () => {
    if (movieId === id) {
      const authorName = userName || user?.name.split(" ")[0] || author;
      return authorName?.length > 15 ? authorName.substring(0, 15) : authorName;
    }

    return author.length > 15 ? author.substring(0, 15) : author;
  };

  return (
    <StyledReviews.SingleReview>
      <StyledReviews.Author>
        <div className="avatar">
          <img src={showAvatar()} alt="avatar" />
        </div>
        <div className="review-info">
          <div className="name-rating">
            <p>{showName()}</p>
            <p>
              <AiFillStar />
              {rating ? rating : " - "} <span>/10</span>
            </p>
          </div>
          <p>{new Date(created_at).toLocaleDateString()}</p>
        </div>
      </StyledReviews.Author>
      <StyledReviews.Review readMore={readMore}>
        <MarkdownView
          className="content"
          markdown={
            readMore
              ? content
              : content.length > 200
              ? `${content.substring(0, 200)}...`
              : content
          }
        />
        <div className="content_buttons">
          {isUser && movieId === id && (
            <button onClick={() => dispatch(removeUserReview())}>remove</button>
          )}

          {content.length > 200 && (
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "read more"}
            </button>
          )}
        </div>
      </StyledReviews.Review>
    </StyledReviews.SingleReview>
  );
};

export default SingleReview;
