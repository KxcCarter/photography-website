import React, { useState } from 'react';
import { Wrapper } from './HeroSlider.styles';
import { IMAGES } from '../photoApi/API';

const HeroSlider = (props) => {
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

  const navButtons = IMAGES.map((item, index) => <NavButtons key={index} />);

  return (
    <Wrapper>
      <div className="view-container">
        <div className="title-center">
          <h1>H. Raymond Carter Photography</h1>
        </div>

        {imageSlides}

        <div className="navigation">{navButtons}</div>
      </div>
    </Wrapper>
  );
};

export default HeroSlider;
