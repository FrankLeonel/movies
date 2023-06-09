import { useEffect, useState } from "react";
import { Movie } from "@root/interfaces/movie";
import { API_URL } from "@root/config/constants";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    (() => {
      setLoading(true);
      fetch(API_URL)
        .then((response) => response.json())
        .then((json) => {
          setMovies(json);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    })();
  }, []);

  return { movies, loading, error };
};

export default useMovies;
