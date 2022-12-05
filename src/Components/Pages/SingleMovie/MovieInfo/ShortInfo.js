import React from "react";
import StyledMovieInfo from "./style";
import { useSelector } from "react-redux";

const ShortInfo = () => {
  const { singleMovieInfo } = useSelector((store) => store.singleMovie);
  const { windowWidth } = useSelector((store) => store.app);
  const storedData = JSON.parse(sessionStorage.getItem("single_movie"));

  const {
    original_title,
    spoken_languages,
    production_countries,
    homepage: link,
    production_companies,
    release_date,
    runtime,
  } = singleMovieInfo;

  const originalTitle = storedData?.original_title || original_title;
  const languages = storedData?.spoken_languages || spoken_languages;
  const countries = storedData?.production_countries || production_countries;
  const homepage = storedData?.homepage || link;
  const companies = storedData?.production_companies || production_companies;
  const date = storedData?.release_date || release_date;
  const time = storedData?.runtime || runtime;

  const checkHomePage = () => {
    if (homepage.length > 38) {
      return `${homepage.slice(0, 38)}...`;
    } else {
      return homepage;
    }
  };

  return (
    <StyledMovieInfo.ShortInfo>
      <div className="orig_title">
        <p>Original title:</p>
        <p>"{originalTitle}"</p>
      </div>

      {date && windowWidth < 940 && (
        <div className="date">
          <p>Release date:</p>
          <p>{date}</p>
        </div>
      )}

      {time && windowWidth < 940 && (
        <div className="time">
          <p>Running time:</p>
          <p>{time > 0 ? time + " min" : "unknown"}</p>
        </div>
      )}

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
    </StyledMovieInfo.ShortInfo>
  );
};

export default ShortInfo;
