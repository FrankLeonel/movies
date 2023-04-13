import { Link, useNavigate } from "react-router-dom";
import { Movie } from "@root/interfaces/movie";

import Skeleton from "@root/components/Skeleton";
import Slider from "@root/components/Slider";
import useMovies from "@root/hooks/useMovies";

const Home = () => {
  const navigate = useNavigate();
  const { movies, loading } = useMovies();

  if (loading) {
    return (
      <div className="pt-4">
        <Skeleton />
      </div>
    );
  }

  return (
    <>
      <Slider slides={movies?.slice(0, 4) ?? movies} />
      <ul className="container grid grid-cols-1 md:grid-cols-3 gap-4">
        {...movies?.slice(4).map((movie: Movie) => (
          <li
            key={movie.id}
            onClick={() => navigate(`details/${movie.id}`)}
            className="flex flex-col gap-2 cursor-pointer"
          >
            <img
              src={movie.foto}
              alt={movie.nome}
              className="rounded-lg hover:opacity-75 transition ease-in-out duration-150"
            />
            <span className="text-base md:text-lg font-bold text-white hover:text-gray-300 transition ease-in-out duration-150">
              {movie.nome}
            </span>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-sm md:text-base text-white hover:text-gray-300 transition ease-in-out duration-150">
              {movie.sinopse}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
