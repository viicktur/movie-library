import React from "react";
import { Link } from "@reach/router";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ clickable, image, movieId, movieName }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img className="clickable" src={image} alt={movieName} />
      </Link>
    ) : (
      <img src={image} alt="movieThumb" />
    )}
  </StyledMovieThumb>
);

export default MovieThumb;
