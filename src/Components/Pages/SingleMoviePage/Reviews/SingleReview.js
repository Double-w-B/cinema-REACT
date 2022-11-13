import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import MarkdownView from "react-showdown";
import { useSelector, useDispatch } from "react-redux";
import { removeUserReview } from "../../../../features/movies/singleMovieSlice";
import logoImg from "../../../../Images/Logo.png";
import { useAuth0 } from "@auth0/auth0-react";

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
    <StyledWrapper>
      <StyledAuthorContainer>
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
      </StyledAuthorContainer>
      <StyledContentContainer readMore={readMore}>
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
      </StyledContentContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.article`
  width: 96%;
  padding: 0.5rem;
  margin: 1rem auto;
  color: #fff;
  display: flex;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
`;

const StyledAuthorContainer = styled.div`
  width: 30%;
  display: flex;

  .avatar {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      max-width: 70px;
      max-height: 70px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      color: transparent;
    }
  }

  .review-info {
    width: 70%;
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
          margin-right: 0.2rem;
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

const StyledContentContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: justify;
  word-wrap: break-word;

  p {
    margin: 0.3rem 0;
  }

  .content_buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
      display: block;
      margin-left: 1rem;
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: rgba(255, 255, 255, 0.3);
      transition: all 0.2s linear;

      &:last-child {
        color: ${(props) =>
          props.readMore
            ? "var(--primary-red-clr)"
            : "rgba(255, 255, 255, 0.3)"};
      }

      &:hover {
        color: var(--primary-red-clr);
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
`;

export default SingleReview;
