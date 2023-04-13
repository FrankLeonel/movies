import { useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Movie } from "@root/interfaces/movie";

type SliderProps = {
  slides: Movie[];
};

const Slider = ({ slides }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-screen-xl m-auto py-4 md:py-16 md:px-4 relative group">
      <Link to={`details/${slides[currentIndex]?.id}`}>
        <div className="relative w-full h-full">
          <img
            src={slides[currentIndex]?.foto}
            alt={slides[currentIndex]?.nome}
            className="relative w-full h-full rounded-2xl bg-center bg-cover duration-500 ease-in-out opacity-30"
          />
          <p className="absolute bottom-0 px-4 md:px-8 py-2 md:py-4 text-white text-sm font-bold md:text-2xl">
            {slides[currentIndex]?.nome}
          </p>
        </div>
      </Link>

      <div className="hidden group-hover:block absolute top-[45%] md:top-[50%] -translate-x-0 translate-y-[-70%] md:translate-y-[-50%] left-2 md:left-5 text-2xl rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[45%] md:top-[50%]  -translate-x-0 translate-y-[-70%] md:translate-y-[-50%] right-2 md:right-5 text-2xl rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled
              className={
                slideIndex === currentIndex ? "text-gray-500" : "text-white"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
