import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "@root/interfaces/movie";
import { API_URL, defaultValue } from "@root/config/constants";

const useMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>(defaultValue);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    (() => {
      setLoading(true);
      fetch(`${API_URL}/${id}`)
        .then((response) => response.json())
        .then((json) => {
          setMovie(json);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    })();
  }, []);

  return { movie, loading, error };
};

export default useMovie;
