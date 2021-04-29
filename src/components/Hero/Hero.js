import React, { useState, useEffect } from 'react';
import { StyleWrapper } from './Hero.styles';

const Hero = ({ image, title }) => {
  const [cssRule, setCssRule] = useState('');

  useEffect(() => {
    animate();
  });

  const animate = () => {
    setCssRule('animate');
  };

  return (
    <StyleWrapper>
      <div className={`image-container ${cssRule}`}>
        <img src={image} alt="omg so moody" />
        <div className="info-center">
          <h1 className={`${cssRule}`}>{title}</h1>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default Hero;
