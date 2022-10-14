import React from "react";
import { useSelector } from "react-redux";
import { BsPlayCircle } from "react-icons/bs";

import styled from "styled-components";

const Poster = (props) => {
  const { singleMovieVideo } = useSelector((store) => store.singleMovie);
  const { imgLowResUrl } = useSelector((store) => store.movies);

  const { poster_path, genres } = props;
  const { key } = singleMovieVideo;

  const abbreviation = (title) => {
    if (title === "Science Fiction") return "Sci-Fi";
    return title;
  };

  const handleClick = () => {
    props.setIsModal(true);
    props.setIsMovieTrailer(true);
  };

  return (
    <StyledPosterContainer>
      <div className="poster">
        <img src={`${imgLowResUrl}${poster_path}`} alt="" />
        {key && <BsPlayCircle onClick={handleClick} />}
      </div>
      {genres && (
        <div className="genres no-select">
          {genres.slice(0, 3).map((genre) => {
            return <div key={genre.id}>{abbreviation(genre.name)}</div>;
          })}
        </div>
      )}
    </StyledPosterContainer>
  );
};

const StyledPosterContainer = styled.div`
  width: 35%;
  height: 60vh;

  .poster {
    width: 76%;
    height: 92.5%;
    margin: 0 auto;
    position: relative;
    transition: 0.5s linear;

    &:hover {
      & img {
        filter: brightness(70%) drop-shadow(0px 5px 15px black);
      }

      & svg {
        font-size: 5rem;
        color: var(--primary-white-clr);
      }
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 4rem;
      color: rgba(255, 255, 255, 0.3);
      transition: 0.3s linear;
      cursor: pointer;

      &:hover {
        font-size: 5rem;
        color: var(--primary-white-clr);
      }

      &:active {
        transition: font-size 0.5s linear;
        font-size: 3rem;
      }
    }

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
      transition-property: -moz-filter, -ms-filter, -o-filter, -webkit-filter,
        filter;
      transition-duration: 0.3s;
      -webkit-filter: drop-shadow(0px 5px 15px black);
      filter: brightness(100%) drop-shadow(0px 5px 15px black);
    }
  }

  .genres {
    width: 80%;
    height: 8%;
    margin: 0 auto;
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;

    div {
      font-size: 1.1rem;
      display: grid;
      place-items: center;
      color: rgba(255, 255, 255, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-top: none;
      border-bottom: none;
      border-right: none;
      padding: 0 0.5rem;

      &:first-child {
        border-left: none;
      }
    }
  }
`;

export default Poster;
