import React, { useState, useEffect } from 'react';
import { Wrapper } from './HeroSlider.styles';
import { IMAGES } from '../../photoApi/API';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageSlides = IMAGES.map((item, index) => (
    <div
      className={`slide ${index === currentSlide ? 'active' : ''}`}
      key={index}
    >
      {index === currentSlide && (
        <>
          <img className={`image`} src={item.img} alt={item.altText} />
          <div className="info-center">
            <h1>{item.altText}</h1>
          </div>
        </>
      )}
    </div>
  ));

  const nextSlide = () => {
    setCurrentSlide(currentSlide === IMAGES.length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? IMAGES.length - 1 : currentSlide - 1);
  };

  // NOTE! Uncomment the code below to turn on slider.

  useEffect(() => {
    const autoSlider = setTimeout(() => {
      nextSlide();
    }, 6000);
    return () => {
      clearTimeout(autoSlider);
    };
  }, [currentSlide, nextSlide]);

  return (
    <Wrapper>
      <div className="view-container">
        {imageSlides}
        <div className="nav-arrows">
          <FaArrowAltCircleLeft
            className="arrow arrow-left"
            onClick={prevSlide}
          />
          <FaArrowAltCircleRight
            className="arrow arrow-right"
            onClick={nextSlide}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSlider;
