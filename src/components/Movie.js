import React from "react";
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

import { useMovieFetch } from "./hooks/useMovieFetch";

const Movie = ({ movieId }) => {
  //We return state from the useMovieFetch movier but reffered to it as movie in this "Movie component"
  const [movie, loading, error] = useMovieFetch(movieId);
  if (error) return <div>Something is wrong!!!</div>;
  if (loading) return <Spinner />;
  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} plot="PLOT" />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
