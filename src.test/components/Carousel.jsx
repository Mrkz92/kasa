import arrowBack from "../assets/arrow-back.png";
import arrowForward from "../assets/arrow-forward.png";
import "./Carousel.scss";
import { useState } from "react";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <section className="Carousel">
      {length > 1 && (
        <img src={arrowBack} onClick={prevSlide} className="Carousel__prev" />
      )}
      {length > 1 && (
        <img
          src={arrowForward}
          alt="droite"
          onClick={nextSlide}
          className="Carousel__next"
        />
      )}
      {slides.map((slide, index) => (
        <div key={index} className="Carousel__slide">
          {index === current && (
            <img
              className="Carousel__picture"
              src={slide}
              alt="appartement à louer"
            />
          )}
          {index === current && (
            <span className="slider__number">
              {current + 1}/{length}
            </span>
          )}
        </div>
      ))}
    </section>
  );
}
