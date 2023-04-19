import { Link, useNavigate } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { Movie } from "@root/interfaces/movie";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(`/details/${movie.id}`)}
      className="flex flex-col gap-2 cursor-pointer"
    >
      <img
        src={movie.foto}
        alt={movie.nome}
        className="h-48 w-full object-cover rounded-lg hover:opacity-75 transition ease-in-out duration-150"
      />
      <span className="text-base md:text-lg font-bold text-white hover:text-gray-300 transition ease-in-out duration-150">
        {movie.nome}
      </span>
      <span className="whitespace-nowrap overflow-hidden overflow-ellipsis text-sm md:text-base text-white hover:text-gray-300 transition ease-in-out duration-150">
        {movie.sinopse}
      </span>
    </li>
  );
};

export default MovieCard;
