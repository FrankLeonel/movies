import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Movie } from "@root/interfaces/movie";
import { addFavorite, removeFavorite } from "@root/assets/utils/favorites";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

import Skeleton from "@root/components/Skeleton";
import useMovie from "@root/hooks/useMovie";

import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const { movie, loading, error } = useMovie();
  const [favoritesMovies, setFavoritesMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const favorites = localStorage.getItem("movies");
    setFavoritesMovies(favorites ? JSON.parse(favorites) : []);
  }, []);

  const handleAddFavorite = () => {
    addFavorite({ movie, favoritesMovies, setFavoritesMovies });
    toast.success("Filme adicionado com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleRemoveFavorite = () => {
    removeFavorite({ movie, favoritesMovies, setFavoritesMovies });

    toast.success("Filme excluído com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  if (loading) {
    return (
      <div className="container-details">
        <Skeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-details">
        <h1>Erro ao carregar filme</h1>
      </div>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container-details">
        <div className="relative w-full h-full">
          <img
            src={movie?.foto ?? ""}
            alt={movie?.nome ?? ""}
            loading="lazy"
            className="relative w-full h-72 object-cover md:h-full rounded opacity-40"
          />
          <img
            src={movie?.foto ?? ""}
            alt={movie?.nome ?? ""}
            loading="lazy"
            className="absolute bottom-[15%] left-3 md:bottom-[20%] md:left-10 rounded w-[140px] h-[140px] md:w-[180px] md:h-[180px] object-cover"
          />
          <h1 className="absolute bottom-1 left-3 md:bottom-[10%] md:left-10 text-2xl md:text-3xl font-semibold text-neutral-100">
            {movie?.nome}
          </h1>
          {!favoritesMovies?.find((fav) => fav.id === movie?.id) ? (
            <div onClick={handleAddFavorite} className="btn-favorite">
              <MdFavoriteBorder size={30} />
            </div>
          ) : (
            <div onClick={handleRemoveFavorite} className="btn-favorite">
              <MdFavorite size={30} />
            </div>
          )}
        </div>
        <div className="container flex flex-col gap-3 mt-3">
          <h2 className="text-lg md:text-xl font-semibold leading-5">
            Sinopse
          </h2>
          <span className="text-base md:text-lg font-medium leading-8">
            {movie?.sinopse}
          </span>
        </div>

        <a
          href={`https://youtube.com/results?search_query=${movie?.nome} Trailer`}
          target="_blank"
          className="w-full mt-4 flex items-center justify-center gap-2 py-2 md:py-4 text-center bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-md text-neutral-100 font-medium text-sm hover:bg-red-700 transition-colors duration-300"
        >
          <AiOutlineYoutube size={40} />
          Pesquisar Trailer
        </a>
      </div>
    </>
  );
};

export default Details;
