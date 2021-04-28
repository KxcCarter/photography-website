import React, { useState, useEffect } from 'react';
import { Wrapper } from './HeroSlider.styles';
import { IMAGES } from '../photoApi/API';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const HeroSlider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageSlides = IMAGES.map((item, index) => (
    <div className="slide" key={index}>
      <img className="image" src={item.img} alt={item.altText} />
      <div className="info-center">
        <h1>{item.altText}</h1>
      </div>
    </div>
  ));

  const NavButtons = () => {
    const [activeClass, setActiveClass] = useState('');
    return (
      <div
        className={`navBtn ${activeClass}`}
        onClick={() => setActiveClass('active')}
      ></div>
    );
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === IMAGES.length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? IMAGES.length - 1 : currentSlide - 1);
  };
  console.log(currentSlide);

  //   useEffect(() => {
  //     const autoSlide = setInterval(() => {
  //       nextSlide();
  //     }, 1000);
  //     return () => {
  //       clearInterval(autoSlide);
  //     };
  //   }, [currentSlide]);

  const navButtons = IMAGES.map((item, index) => <NavButtons key={index} />);

  return (
    <Wrapper>
      <div className="view-container">
        <div className="title-center">
          <h1>H. Raymond Carter Photography</h1>
        </div>
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

        {/* <div className="navigation">{navButtons}</div> */}
      </div>
    </Wrapper>
  );
};

export default HeroSlider;
