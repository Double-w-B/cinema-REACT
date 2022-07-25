import React from "react";
import {useLocation} from "react-router-dom";

const SingleMoviePage = () => {
  const location = useLocation()
  const {movieId} = location.state;

  return <main>SingleMoviePage</main>;
};

export default SingleMoviePage;
