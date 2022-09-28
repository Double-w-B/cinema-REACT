import React from "react";
import styled from "styled-components";
import { StyledContentContainer } from "../UnlimitedPage/UnlimitedPage";
import { useSelector } from "react-redux";
import { BsPlayCircle } from "react-icons/bs";

const Schedule = (props) => {
  const { singleMovieInfo, singleMovieVideo } = useSelector(
    (store) => store.singleMovie
  );
  const { key } = singleMovieVideo;
  const { imgLowResUrl } = useSelector((store) => store.movies);
  const { poster_path, genres } = singleMovieInfo;
  console.log(singleMovieInfo.genres);

  const abbreviation = (title) => {
    if (title === "Science Fiction") return "Sci-Fi";
    return title;
  };
  const handleClick = () => {
    props.setIsModal(true);
    props.setIsMovieTrailer(true);
  };

  return (
    <StyledSection>
      <StyledScheduleContainer></StyledScheduleContainer>
      <StyledPosterContainer>
        <div className="poster">
          <img src={`${imgLowResUrl}${poster_path}`} alt="" />
          {key && (
            <div className="trailer-cta">
              <BsPlayCircle onClick={handleClick} />
            </div>
          )}
        </div>
        {genres && (
          <div className="genres no-select">
            {genres.slice(0, 3).map((genre) => {
              return <div key={genre.id}>{abbreviation(genre.name)}</div>;
            })}
          </div>
        )}
      </StyledPosterContainer>
    </StyledSection>
  );
};

const StyledSection = styled(StyledContentContainer)`
  padding: 1rem 0 1rem 2rem;
  display: flex;
`;

const StyledScheduleContainer = styled.div`
  width: 65%;
  height: 60vh;
  background-color: tomato;
`;
const StyledPosterContainer = styled.div`
  width: 35%;
  height: 60vh;
  /* background-color: forestgreen; */

  .poster {
    width: 76%;
    height: 92.5%;
    min-width: 275px;
    min-height: 400px;
    margin: 0 auto;
    position: relative;
    /* background-color: white; */
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .trailer-cta {
      width: 100%;
      height: 100%;
      /* background-color: rgba(0, 0, 0, 0.1); */
      display: grid;
      place-items: center;
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.3s linear;

      &:hover {
        background-color: rgba(0, 0, 0, 0.3);

        svg {
          font-size: 5rem;
          /* color: var(--primary-red-clr); */
          color: var(--primary-white-clr);
        }
      }

      svg {
        font-size: 4rem;
        color: rgba(255, 255, 255, 0.3);
        transition: 0.3s linear;
        cursor: pointer;

        &:active {
          transform: scale(0.85);
        }
      }
    }
  }

  .genres {
    width: 80%;
    height: 8%;
    margin: 0 auto;
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;

    /* background-color: white; */

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
      /* background-color: black; */

      &:first-child {
        border-left: none;
      }
    }
  }
`;

export default Schedule;
