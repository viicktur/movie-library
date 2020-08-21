import React from "react";
import {
  SrtyledMovieThumb,
  StyledMovieThumb,
} from "../styles/StyledMovieThumb";

const MovieThumb = ({ clickable, image, movieId, movieName }) => (
  <StyledMovieThumb>
    {clickable ? (
      <img className="clickable" src={image} alt={movieName} />
    ) : (
      <img src={image} alt="movieThumb" />
    )}
  </StyledMovieThumb>
);

export default MovieThumb;
