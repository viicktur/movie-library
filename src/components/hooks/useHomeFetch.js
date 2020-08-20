import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";

export const useHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchmovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();
      console.log(result);
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

  return [{ state, loading, error }, fetchmovies];
};
