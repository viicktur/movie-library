import React, { useState, useEffect } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../config";
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

const Home = () => {
  const [state, setState] = useState({ movie: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchmovies = async (endpoint) => {
    setError(true);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();

      setState((prev) => ({
        ...prev,
        movies: [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchmovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);
  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default Home;
