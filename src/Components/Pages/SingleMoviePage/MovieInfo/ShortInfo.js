import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ShortInfo = () => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const {
    original_title,
    spoken_languages,
    production_countries,
    homepage,
    production_companies,
  } = singleMovieInfo;

  const checkHomePage = () => {
    if (homepage.length > 38) {
      return `${homepage.slice(0, 38)}...`;
    } else {
      return homepage;
    }
  };

  return (
    <StyledWrapper>
      <div className="orig_title">
        <p>Original title:</p>
        <p>"{original_title}"</p>
      </div>
      {spoken_languages && (
        <div className="lang">
          <p>{spoken_languages.length > 1 ? "Languages:" : "Language:"}</p>
          <p>{spoken_languages.map((lang) => lang.english_name).join(", ")}</p>
        </div>
      )}
      {production_countries && (
        <div className="prod_countries">
          <p>{production_countries.length > 1 ? "Countries:" : "Country:"}</p>
          <p>
            {production_countries.map((country) => country.name).join(", ")}
          </p>
        </div>
      )}
      {homepage && (
        <div className="web">
          <p>Website:</p>
          <a href={homepage} target="_blank" rel="noreferrer" title={homepage}>
            {checkHomePage()}
          </a>
        </div>
      )}
      {production_companies && (
        <div className="prod_companies">
          <p>Production:</p>
          <p>{production_companies.map((comp) => comp.name).join(", ")}</p>
        </div>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .orig_title,
  .lang,
  .prod_countries,
  .web,
  .prod_companies {
    display: flex;
    margin: 0.3rem 0;

    p {
      &:first-child {
        min-width: 30%;
      }
      &:last-child {
        color: #f12535;
      }
    }

    a {
      color: #fff;
    }
  }
`;

export default ShortInfo;
