import React from "react";
import styled from "styled-components";
import { movieScreenings } from "../../../../data";

const Time = (props) => {
  const { day } = props;
  const { genres } = props.singleMovieInfo;
  const { screeningTime, setScreeningTime } = props;
  console.log(props);

  React.useEffect(() => {
    setScreeningTime("");
    // eslint-disable-next-line
  }, [day]);

  const findMovieScreenings = () => {
    const currentMovieGenres = genres.map((genre) => genre.name.toLowerCase());
    const currentDayMovieScreenings =
      new window.Date(day).getDay() % 2 === 0
        ? movieScreenings[0]
        : movieScreenings[1];
    const foundGenre = currentMovieGenres.find((genre) =>
      Object.keys(currentDayMovieScreenings).includes(genre)
    );
    if (foundGenre) {
      return currentDayMovieScreenings[foundGenre];
    } else {
      return movieScreenings[2];
    }
  };

  const showMovieScreenings = () => {
    return findMovieScreenings().map((time, index) => {
      return (
        <div
          key={index}
          className={screeningTime === time ? "active" : ""}
          onClick={() => setScreeningTime(time)}
        >
          <p>{time}</p>
        </div>
      );
    });
  };

  return (
    <StyledTimeContainer>
      <h3>
        Available <br />
        movie screenings:
      </h3>
      <StyledTimeScreenings>
        {genres && showMovieScreenings()}
      </StyledTimeScreenings>
    </StyledTimeContainer>
  );
};

const StyledTimeContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    text-align: center;
    margin: 0 auto;
  }
`;

const StyledTimeScreenings = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    width: calc(100% / 5);
    height: 80px;
    width: 80px;
    display: grid;
    place-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 0.3rem;
    color: var(--primary-grey-clr);
    border: 1px solid var(--primary-grey-clr);
    transition: 0.3s linear;
    cursor: pointer;
    opacity: 0.7;

    &.active {
      color: var(--primary-white-clr);
      border: 1px solid var(--primary-white-clr);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      opacity: 1;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export default Time;