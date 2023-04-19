import { useEffect, useState } from "react";
import { Movie } from "@root/interfaces/movie";
import MovieCard from "@root/components/MovieCard";
import Error from "@root/components/Error";

const Favorites = () => {
  const [favoritesMovies, setFavoritesMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const favorites = localStorage.getItem("movies");
    setFavoritesMovies(favorites ? JSON.parse(favorites) : []);
  }, []);

  if (!favoritesMovies?.length) {
    return (
      <div className="container pt-4">
        <Error
          lead="Favoritos"
          title="Ops, sua lista de favoritos está vazia :("
          message="Você não possui nenhum filme favorito, por favor, tente de novo mais tarde."
        />
      </div>
    );
  }

  return (
    <ul className="grid-movies mb-8 py-8">
      {favoritesMovies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default Favorites;
