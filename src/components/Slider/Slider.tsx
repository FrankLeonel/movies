import { Link } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Movie } from "@root/interfaces/movie";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

type SliderProps = {
  slides: Movie[];
};

const Slider = ({ slides }: SliderProps) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      renderArrowPrev={(clickHandler, hasPrev) =>
        hasPrev && (
          <div onClick={clickHandler} className="arrow left-9 z-10 text-center">
            <SlArrowLeft size={30} />
          </div>
        )
      }
      renderArrowNext={(clickHandler, hasNext) =>
        hasNext && (
          <div onClick={clickHandler} className="arrow right-9">
            <SlArrowRight size={30} />
          </div>
        )
      }
      className="max-w-screen-xl h-auto pt-6 pb-10 md:py-16 md:px-4 relative"
    >
      {slides.map(({ id, foto, nome }) => (
        <Link to={`/details/${id}`} key={id}>
          <div className="relative w-full h-full">
            <img
              src={foto}
              alt={nome}
              className="relative w-full h-48 md:h-auto object-cover rounded-2xl bg-center bg-cover duration-500 ease-in-out opacity-30"
            />
            <p className="absolute bottom-0 px-4 md:px-8 py-2 md:py-4 text-white text-sm font-bold md:text-2xl">
              {nome}
            </p>
          </div>
        </Link>
      ))}
    </Carousel>
  );
};

export default Slider;
