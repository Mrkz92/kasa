import arrowBack from "../assets/arrow-back.png";
import arrowForward from "../assets/arrow-forward.png";
import "./Carousel.scss";
import { useState } from "react";
import Stack from "./Stack";

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
      <Stack>
        <div className="Carousel__control">
          {length > 1 && (
            <img
              src={arrowBack}
              alt=""
              onClick={prevSlide}
              className="Carousel__prev"
            />
          )}
          <span className="slider__number">
            {current + 1}/{length}
          </span>
          {length > 1 && (
            <img
              src={arrowForward}
              alt="droite"
              onClick={nextSlide}
              className="Carousel__next"
            />
          )}
        </div>
        <Stack>
          <div className="Carousel__slides">
            {slides.map((slide, index) => (
              <img
                key={index}
                className={`Carousel__slide Carousel__picture`}
                $
                {...(index === current ? "is--active" : "")}
                src={slide}
                alt="appartement à louer"
              />
            ))}
          </div>
        </Stack>
      </Stack>
    </section>
  );
}
