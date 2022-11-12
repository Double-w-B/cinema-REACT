import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ShortInfo = () => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));

  const {
    original_title,
    spoken_languages,
    production_countries,
    homepage: link,
    production_companies,
  } = singleMovieInfo;

  const originalTitle = storedData?.original_title || original_title;
  const languages = storedData?.spoken_languages || spoken_languages;
  const countries = storedData?.production_countries || production_countries;
  const homepage = storedData?.homepage || link;
  const companies = storedData?.production_companies || production_companies;

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
        <p>"{originalTitle}"</p>
      </div>
      {languages && (
        <div className="lang">
          <p>{languages.length > 1 ? "Languages:" : "Language:"}</p>
          <p>{languages.map((lang) => lang.english_name).join(", ")}</p>
        </div>
      )}
      {countries && (
        <div className="prod_countries">
          <p>{countries.length > 1 ? "Countries:" : "Country:"}</p>
          <p>{countries.map((country) => country.name).join(", ")}</p>
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
      {companies && (
        <div className="prod_companies">
          <p>Production:</p>
          <p>{companies.map((comp) => comp.name).join(", ")}</p>
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
