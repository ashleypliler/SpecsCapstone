import React, { useState, useEffect, useRef } from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";
import { useCallback } from "react";

export const HomeCarousel = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentSlide]})`,
  };

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

 

  const getSlideStylesWithBackgroud = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex]})`,
    width: `${parentWidth}`,
  });

  const goToPrevious = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  }, [currentSlide, slides]);

  const gotoSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      goToNext();
    }, 4000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        ←
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        →
      </div>
      <div style={slideStyles}>
        {slides.map((_, slideIndex) => {
          <div
            key={slideIndex}
            style={getSlideStylesWithBackgroud(slideIndex)}
          ></div>;
        })}
      </div>
      <div>
        {slides.map((slide, slideIndex) => {
          <div key={slideIndex} onClick={() => gotoSlide(slideIndex)}>
            ⚫
          </div>;
        })}
      </div>
    </div>
  );
};
