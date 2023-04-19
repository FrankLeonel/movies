import { Movie } from "@root/interfaces/movie";

import Skeleton from "@root/components/Skeleton";
import Slider from "@root/components/Slider";
import MovieCard from "@root/components/MovieCard";
import Error from "@root/components/Error";
import useMovies from "@root/hooks/useMovies";

const Home = () => {
  const { movies, loading, error } = useMovies();

  if (loading) {
    return (
      <div className="container pt-4">
        <Skeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container pt-4">
        <Error message="Não foi possível obter os filmes vindos da api, por favor, tente novamente mais tarde." />
      </div>
    );
  }

  return (
    <div className="container h-full mb-14">
      <Slider slides={movies?.slice(0, 4) ?? movies} />
      <ul className="grid-movies">
        {...movies
          ?.slice(4)
          .map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)}
      </ul>
    </div>
  );
};
export default Home;
