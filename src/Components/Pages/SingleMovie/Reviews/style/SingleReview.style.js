import styled from "styled-components";

export const SingleReview = styled.article`
  width: 96%;
  padding: 0.5rem;
  margin: 1rem auto;
  color: #fff;
  display: flex;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);

  @media screen and (max-width: 900px) {
    padding: 0 0.5rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Author = styled.div`
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
      min-width: 70px;
      max-height: 70px;
      min-height: 70px;
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

  @media screen and (max-width: 900px) {
    .avatar {
      width: 40%;
    }
    .review-info {
      width: 60%;

      .name-rating {
        p:first-child {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;

    .avatar {
      width: 30%;
      min-width: 90px;
      max-width: 90px;
      justify-content: start;
    }

    .review-info {
      width: calc(100% - 90px);
      padding-left: 0;
      position: relative;

      p:not(.name-rating p) {
        position: absolute;
        top: 0;
        right: 0;
      }
      .name-rating {
        p:first-child {
          font-size: 1.05rem;
        }
      }
    }
  }
`;

export const Review = styled.div`
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
  @media screen and (max-width: 900px) {
    padding-top: 1.6rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 0;

    .content_buttons {
      margin-top: 1rem;
    }
  }
`;
