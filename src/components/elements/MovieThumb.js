import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ clickable, image, movieId }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img className="clickable" src={image} alt="moviethumb" />
      </Link>
    ) : (
      <img src={image} alt="movieThumb" />
    )}
  </StyledMovieThumb>
);

MovieThumb.propTypes = {
  clickable: PropTypes.bool,
  image: PropTypes.string,
  movieId: PropTypes.number,
};

export default MovieThumb;
