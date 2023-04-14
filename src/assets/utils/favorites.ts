import { Movie } from "@root/interfaces/movie";

type favoriteProps = {
  movie: Movie;
  favoritesMovies: Movie[];
  setFavoritesMovies: (favoritesMovies: Movie[]) => void;
};

export const addFavorite = ({
  movie,
  favoritesMovies,
  setFavoritesMovies,
}: favoriteProps) => {
  const movieAdd = [...favoritesMovies, movie];
  localStorage.setItem("movies", JSON.stringify(movieAdd));
  setFavoritesMovies(movieAdd);
};

export const removeFavorite = ({
  movie,
  favoritesMovies,
  setFavoritesMovies,
}: favoriteProps) => {
  const movieRemove = favoritesMovies?.filter((item) => item.id !== movie?.id);
  localStorage.setItem("movies", JSON.stringify(movieRemove));
  setFavoritesMovies(movieRemove);
};
