import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import MarkdownView from "react-showdown";
import { useSelector } from "react-redux";
import logoImg from "../../../../Images/Logo.png";

const RSingleReview = (props) => {
  const { imgLowResUrl } = useSelector((store) => store.movies);
  const [readMore, setReadMore] = React.useState(false);

  const {
    author,
    author_details: { avatar_path, rating },
    content,
    created_at,
  } = props;

  const showAvatar = () => {
    if (avatar_path === null) return logoImg;

    if (avatar_path.slice(1, 6) === "https") {
      return avatar_path.slice(1);
    }

    return imgLowResUrl + avatar_path;
  };

  return (
    <StyledWrapper>
      <StyledAuthorContainer>
        <div className="avatar">
          <img src={showAvatar()} alt="avatar" />
        </div>
        <div className="review-info">
          <div className="name-rating">
            <p>{author.length > 15 ? author.substring(0, 15) : author}</p>
            <p>
              <AiFillStar />
              {rating ? rating : " - "} <span>/10</span>
            </p>
          </div>
          <p>{new Date(created_at).toLocaleDateString()}</p>
        </div>
      </StyledAuthorContainer>
      <StyledContentContainer>
        <MarkdownView
          className="content"
          markdown={readMore ? content : `${content.substring(0, 200)}...`}
        />
        {content.length > 200 && (
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        )}
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
  text-align: justify;

  p {
    margin: 0.3rem 0;
  }

  button {
    display: block;
    margin: 0 0 0 auto;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.3);
    transition: all 0.3s linear;
    &:active {
      transform: scale(0.8);
    }
  }
`;

export default RSingleReview;
